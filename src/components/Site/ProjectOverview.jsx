
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { Panel } from 'react-bootstrap';

import { getFile, getJSON } from '../../actions/serverActions.js';
import * as ApplicationActions from '../../actions/applicationActions.js';

class ProjectOverview extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    componentDidMount(){
        this.props.fetchProjectOverview(this.props.params.projectId);
        this.props.fetchProjectInfo(this.props.params.projectId);
    }

    render() {
        const {
            projectInfo,
            projectOverviewText,
            projectOverviewFetchStatus,
            projectOverviewFetchErrorText
        } = this.props;
        //console.log(JSON.stringify(projectInfo, null, 4));
        let projectName = projectInfo ? projectInfo.projectName : "Loading...";
        let markdownText = projectOverviewText ? projectOverviewText : "Loading...";
        if(projectOverviewFetchStatus === 'fetching'){
            markdownText = 'Loading...';
        } else if(projectOverviewFetchStatus === 'stopped' && projectOverviewFetchErrorText) {
            markdownText = 'Error occurred: ' + projectOverviewFetchErrorText;
        }
        return (
            <div>
                <h3 className="text-danger"><span >{projectName}</span></h3>
                <Panel>
                    <div dangerouslySetInnerHTML={{__html: marked(markdownText)}} ></div>
                </Panel>
            </div>
        );
    }
}



function mapStateToProps(state) {
    const { projectInfo, projectOverviewText, projectOverviewFetchStatus, projectOverviewFetchErrorText } = state.application;
    return {
        projectInfo, projectOverviewText, projectOverviewFetchStatus, projectOverviewFetchErrorText

    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchProjectOverview: (projectId) => {
            dispatch(
                getFile('/preview/' + projectId + '/public/docs/Readme.md',
                    {},
                    [ApplicationActions.START_FETCHING_PROJECT_OVERVIEW],
                    [ApplicationActions.FINISH_FETCHING_PROJECT_OVERVIEW],
                    [ApplicationActions.FAILURE_FETCHING_PROJECT_OVERVIEW]
                )
            );
        },
        fetchProjectInfo: (projectId) => {
            dispatch(
                getJSON('/getProjectById?projectId=' + projectId,
                    {},
                    [],
                    [ApplicationActions.FETCH_PROJECT_INFO],
                    []
                )
            );
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);


