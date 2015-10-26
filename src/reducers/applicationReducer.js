import * as Actions from '../actions/applicationActions.js';

export default function(state = {}, action = {type: 'UNKNOWN'}){

    const { payload } = action;

    switch (action.type){

        case Actions.START_FETCHING_PROJECT_LIST:
            return Object.assign({},
                state,
                {
                    projectFetchStatus: 'fetching',
                    projectFetchErrorText: null,
                    projects: []
                }
            );

        case Actions.FINISH_FETCHING_PROJECT_LIST:
            return Object.assign({},
                state,
                {
                    projectFetchStatus: 'stopped',
                    projectFetchErrorText: null,
                    projects: payload.data.data
                }
            );

        case Actions.FAILURE_FETCHING_PROJECT_LIST:
            return Object.assign({},
                state,
                {
                    projectFetchStatus: 'stopped',
                    projectFetchErrorText: payload.data,
                    projects: []
                }
            );

        case Actions.START_FETCHING_PROJECT_OVERVIEW:
            return Object.assign({},
                state,
                {
                    projectOverviewFetchStatus: 'fetching',
                    projectOverviewFetchErrorText: null,
                    projectOverviewText: null
                }
            );

        case Actions.FINISH_FETCHING_PROJECT_OVERVIEW:
            return Object.assign({},
                state,
                {
                    projectOverviewFetchStatus: 'stopped',
                    projectOverviewFetchErrorText: null,
                    projectOverviewText: payload.data
                }
            );

        case Actions.FAILURE_FETCHING_PROJECT_OVERVIEW:
            return Object.assign({},
                state,
                {
                    projectOverviewFetchStatus: 'stopped',
                    projectOverviewFetchErrorText: payload.data,
                    projectOverviewText: null
                }
            );

        case Actions.FETCH_PROJECT_INFO:
            return Object.assign({},
                state,
                {
                    projectInfo: payload.data.data
                }
            );

        default:
            return state;

    }

}
