import { createAction, handleActions } from '../reduxActionsSequence';

const SHOW_MODAL_GITHUB_SCREENSHOT = 'SHOW_MODAL_GITHUB_SCREENSHOT';
const HIDE_MODAL_GITHUB_SCREENSHOT = 'HIDE_MODAL_GITHUB_SCREENSHOT';

export const showModal = createAction(SHOW_MODAL_GITHUB_SCREENSHOT, (srcUrl) => {
    return {
        srcUrl: srcUrl
    }
});

export const hideModal = createAction(HIDE_MODAL_GITHUB_SCREENSHOT);

/**
 * State substructure: { github }
 */

export default handleActions({

    [SHOW_MODAL_GITHUB_SCREENSHOT]: (state, action) => {
        let newState = Object.assign({}, state, {
            modalScreenshot: {
                show: true,
                screenshotUrl: action.payload.srcUrl
            }
        });
        return newState;
    },

    [HIDE_MODAL_GITHUB_SCREENSHOT]: (state, action) => {
        let newState = Object.assign({}, state, {
            modalScreenshot: {
                show: false,
                screenshotUrl: null
            }
        });
        return newState;
    }

}, {});