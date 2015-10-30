import { invokeServer } from '../api';
import { createAction, handleActions } from '../reduxActionsSequence';

const FETCH_GITHUB_PROJECT_INFO = 'FETCH_GITHUB_PROJECT_INFO';

export const fetchGithubProjectInfo = createAction(FETCH_GITHUB_PROJECT_INFO, (options) => {
    let result = {};
    const { repoFullName } = options;
    return invokeServer('githubGetJson', { query: 'https://api.github.com/repos/' + repoFullName })
        .then( response => {
            result = {
                id: response.id,
                name: response.name,
                fullName: response.full_name,
                description: response.description,
                starsCount: response.stargazers_count,
                htmlUrl: response.html_url
            };
        }).then( () => {
            return invokeServer('githubGetJson', { query: 'https://api.github.com/repos/' + repoFullName + '/contents/screenshot.png' })
                .then( response => {
                    result.screenshotUrl = response.download_url;
                })
                .catch( err => {
                    result.screenshotUrl = null;
                });
        }).then( () => {
            result.downloadUrl = 'https://api.github.com/repos/' + repoFullName + '/zipball/master';
            return result;
        });
}, ({ repoFullName }) => ({ repoFullName }));

/**
 * State substructure: { github }
 */
export default handleActions({

    [FETCH_GITHUB_PROJECT_INFO]: {
        start(state, action){
            let newState = Object.assign({}, state, {
                projects: Object.assign({}, state.projects)
            });
            newState.projects[action.meta.repoFullName] = {
                fetching: {
                    status: 'loading',
                    errorText: '',
                    error: false
                },
                info: {}
            };
            return newState;
        },
        next(state, action){
            let newState = Object.assign({}, state, {
                projects: Object.assign({}, state.projects)
            });
            newState.projects[action.meta.repoFullName] = {
                fetching: {
                    status: 'done',
                    errorText: '',
                    error: false
                },
                info: action.payload
            };
            return newState;
        },
        throw(state, action){
            let newState = Object.assign({}, state, {
                projects: Object.assign({}, state.projects)
            });
            newState.projects[action.meta.repoFullName] = {
                fetching: {
                    status: 'done',
                    errorText: !!action.payload.message ? action.payload.message : 'Error: no message',
                    error: true
                },
                info: {}
            };
            return newState;
        }
    }

}, {});

