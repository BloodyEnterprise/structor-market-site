import _ from 'lodash';
import { invokeServer } from '../api';
import { createAction, handleActions } from '../reduxActionsSequence';

const ADD_GITHUB_REPO_TO_INDEX = 'ADD_GITHUB_REPO_TO_INDEX';
const CLEAR_ADDING_GITHUB_REPO_ERROR = 'CLEAR_ADDING_GITHUB_REPO_ERROR';

export const addGithubRepoToIndex = createAction(ADD_GITHUB_REPO_TO_INDEX, (owner, repo) => {
    let result = {
        owner,
        repo
    };
    let errors = [];
    let indexFileObj = null;

    return new Promise( (resolve, reject) => {

        if(!owner || owner.length <= 0){
            errors.push('Owner name was not specified.');
        }
        if(!repo || repo.length <= 0){
            errors.push('Repository name was not specified.');
        }

        if(errors.length > 0){
            reject(new Error(errors.join(' ')));
        } else {
            resolve();
        }
    })
        .then( () => {

            // todo: how to obtain state being inside of action ? We may check existence of repo in already loaded list in the state
            return invokeServer('readGithubIndexFile')
                .then( fileJsonObj => {
                    fileJsonObj.list = fileJsonObj.list || [];
                    let { list } = fileJsonObj;

                    list.forEach( item => {
                        if(item.owner === owner && item.repo === repo){
                            errors.push('Someone has already added this repository to the market.');
                        }
                    });

                    if(errors.length > 0){
                        throw Error(errors.join(' '));
                    }
                    indexFileObj = fileJsonObj;
                });
        })
        .then( () => {
            const repoFullName = owner + '/' + repo;

            return invokeServer('githubGetJson',
                { query: 'https://api.github.com/repos/' + repoFullName, noCache: true })
                .catch( err => {
                    throw Error('The specified repository does not exist.');
                })
                .then( response => {

                    // we need count for sorting
                    result.starsCount = response.stargazers_count;

                    return invokeServer('githubGetJson',
                        { query: 'https://api.github.com/repos/' + repoFullName + '/contents/.structor', noCache: true })
                        .catch( err => {
                            throw Error('The specified repository is not Structor compatible.');
                        })
                        .then( dirList => {
                            if(!dirList || !_.isArray(dirList) || dirList.length <= 0){
                                throw Error('It seems the specified repository is not Structor compatible one.');
                            } else {
                                const validFolders = [
                                    'defaults', 'desk', 'docs', 'generators', 'src', 'templates'
                                ];
                                let validFolderCount = 0;
                                dirList.forEach( folderItem => {
                                    if(_.includes(validFolders, folderItem.name)){
                                        validFolderCount++;
                                    }
                                });
                                if(validFolderCount === 0){
                                    throw Error('It seems the specified repository is not Structor compatible one.');
                                }
                            }
                        });
                })
        })
        .then( () => {
            indexFileObj.list.push({
                owner, repo
            });
            return invokeServer('writeGithubIndexFile', {jsonObj: indexFileObj});
        })
        .then( () => {
            return result;
        });
});

export const clearAddingGithubRepoError = createAction(CLEAR_ADDING_GITHUB_REPO_ERROR);

/**
 * State substructure: { github }
 */
export default handleActions({


    [ADD_GITHUB_REPO_TO_INDEX]: {
        start(state, action){
            let newState = Object.assign({}, state, {
                addRepoForm: {
                    fetching: {
                        status: 'loading',
                        errorText: '',
                        error: false
                    }
                }
            });
            return newState;
        },
        next(state, action){
            let newState = Object.assign({}, state, {
                addRepoForm: {
                    fetching: {
                        status: 'done',
                        errorText: '',
                        error: false
                    }
                }
            });
            let { list } = newState.indexFile.data;
            list.push(action.payload);
            list = _.sortByOrder(list, ['starsCount'], ['desc'] );
            newState.indexFile = Object.assign({}, newState.indexFile);
            newState.indexFile.data = {
                list: list
            };
            return newState;
        },
        throw(state, action){
            let newState = Object.assign({}, state, {
                addRepoForm: {
                    fetching: {
                        status: 'done',
                        errorText: !!action.payload.message ? action.payload.message : 'Error: no message',
                        error: true
                    }
                }
            });
            return newState;
        }
    },

    [CLEAR_ADDING_GITHUB_REPO_ERROR]: (state, action) => {
        let newState = Object.assign({}, state, {
            addRepoForm: {
                fetching: {
                    status: 'done',
                    errorText: '',
                    error: false
                }
            }
        });
        return newState;
    }

}, {});
