import { handleActions } from '../reduxActionsSequence';
import reduceReducers from 'reduce-reducers';

import addGithubRepoToIndexReducer from '../actions/addGithubRepoToIndex.js';
import fetchGithubProjectInfoReducer from '../actions/fetchGithubProjectInfo.js';
import loadIndexDataReducer from '../actions/loadIndexData.js';
import modalGithubProjectScreenshotReducer from '../actions/modalGithubProjectScreenshot.js';
import fetchGithubProjectReadmeReducer from '../actions/fetchGithubProjectReadme.js';

/**
 * Merge objects into state substructure: { github }
 */
const githubReducer = reduceReducers(
    addGithubRepoToIndexReducer,
    fetchGithubProjectInfoReducer,
    loadIndexDataReducer,
    modalGithubProjectScreenshotReducer,
    fetchGithubProjectReadmeReducer
);

export default githubReducer;

