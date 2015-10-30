import { downloadFromServer } from '../api';
import { createAction, handleActions } from '../reduxActionsSequence';

const SET_CURRENT_GITHUB_PROJECT_README = 'SET_CURRENT_GITHUB_PROJECT_README';
const FETCH_GITHUB_PROJECT_README = 'FETCH_GITHUB_PROJECT_README';

export const setCurrentGithubProjectReadme = createAction(SET_CURRENT_GITHUB_PROJECT_README);

export const fetchGithubProjectReadme = createAction(FETCH_GITHUB_PROJECT_README, (options) => {
    let result = {};
    const { repoFullName } = options;
    return downloadFromServer('githubDownloadHTML', { query: 'https://api.github.com/repos/' + repoFullName + '/readme' })
        .then( response => {
            console.log('%o', response);
            result = {
                content: response
            };
            return result;
        });
}, ({ repoFullName }) => ({ repoFullName }));

/**
 * State substructure: { github }
 */
export default handleActions({

    [SET_CURRENT_GITHUB_PROJECT_README]: (state, action) => {
        let newState = Object.assign({}, state);
        newState.readmeFile = Object.assign({}, newState.readmeFile, {
            projectFullName: action.payload
        });
        return newState;
    },

    [FETCH_GITHUB_PROJECT_README]: {
        start(state, action){
            let newState = Object.assign({}, state);
            newState.readmeFile = Object.assign({}, newState.readmeFile, {
                fetching: {
                    status: 'loading',
                    errorText: '',
                    error: false
                },
                content: null
            });
            return newState;
        },
        next(state, action){
            let newState = Object.assign({}, state);
            newState.readmeFile = Object.assign({}, newState.readmeFile, {
                fetching: {
                    status: 'done',
                    errorText: '',
                    error: false
                },
                content: action.payload.content
            });
            return newState;
        },
        throw(state, action){
            let newState = Object.assign({}, state);
            newState.readmeFile = Object.assign({}, newState.readmeFile, {
                fetching: {
                    status: 'done',
                    errorText: !!action.payload.message ? action.payload.message : 'Error: no message',
                    error: true
                },
                content: null
            });
            return newState;
        }
    }

}, {});

