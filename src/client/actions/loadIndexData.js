import _ from 'lodash';
import { invokeServer } from '../api';
import { createAction, handleActions } from '../reduxActionsSequence';

const LOAD_INDEX_DATA = 'LOAD_INDEX_DATA';

export const loadIndexData = createAction(LOAD_INDEX_DATA, () => {
    return invokeServer('readGithubIndexFile').then( response => {

        let sequence = Promise.resolve();

        if(response && response.list && response.list.length > 0){

            response.list.forEach( repoEntity => {
                sequence = sequence.then(() => {
                    const repoFullName = repoEntity.owner + '/' + repoEntity.repo;
                    return invokeServer('githubGetJson', { query: 'https://api.github.com/repos/' + repoFullName })
                        .then( repoInfoObj => {
                            repoEntity.starsCount = repoInfoObj.stargazers_count
                        });
                });
            });

        }

        sequence = sequence.then( () => {
            response.list = _.sortByOrder(response.list, ['starsCount'], ['desc'] );
            return response;
        });

        return sequence;
    });
});

/**
 * State substructure: { github }
 */
export default handleActions({


    [LOAD_INDEX_DATA]: {
        start(state, action){
            return Object.assign({}, state, {
                indexFile: {
                    fetching: {
                        status: 'loading',
                        errorText: '',
                        error: false
                    },
                    data: {
                        list: []
                    }
                }
            });
        },
        next(state, action){
            return Object.assign({}, state, {
                indexFile: {
                    fetching: {
                        status: 'done',
                        errorText: '',
                        error: false
                    },
                    data: action.payload
                }
            });
        },
        throw(state, action){
            return Object.assign({}, state, {
                indexFile: {
                    fetching: {
                        status: 'done',
                        errorText: !!action.payload.message ? action.payload.message : 'Error: no message',
                        error: true
                    },
                    data: {
                        list: []
                    }
                }
            });
        }
    }

}, {});
