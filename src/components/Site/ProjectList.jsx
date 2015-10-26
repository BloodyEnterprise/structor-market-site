import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProjectThumbnailAir from './ProjectThumbnailAir.jsx';

import { getJSON } from '../../actions/serverActions.js';
import * as ApplicationActions from '../../actions/applicationActions.js';

class ProjectList extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    componentDidMount(){
        this.props.fetchProjectList();
    }

    render() {
        const { projects, projectFetchStatus, projectFetchErrorText } = this.props;
        let content = [];
        if(projectFetchStatus === 'fetching'){
            content.push(<p>Loading...</p>);
        } else if(projectFetchStatus === 'stopped'){
            if(projectFetchErrorText){
                content.push(<p>{'Error occurred: ' + projectFetchErrorText}</p>);
            } else {
                _.forEach(projects, (value, index) => {
                    content.push(
                        <ProjectThumbnailAir
                            key={value.projectId}
                            projectName={value.projectName}
                            createDate={value.createDate}
                            description={value.description}
                            userName={value.userProfile.login}
                            countDownload={value.countDownload}
                            projectId={value.projectId}  />
                    )
                });
            }
        }
        return (
            <div {...this.props}>
                {content}
            </div>
            );
    }
}

function mapStateToProps(state) {
    const { projects, projectFetchStatus, projectFetchErrorText } = state.application;
    return {
        projects, projectFetchStatus, projectFetchErrorText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjectList: () => dispatch(
            getJSON('/getProjectGalleryList',
                {},
                [ApplicationActions.START_FETCHING_PROJECT_LIST],
                [ApplicationActions.FINISH_FETCHING_PROJECT_LIST],
                [ApplicationActions.FAILURE_FETCHING_PROJECT_LIST]
            )
        )
    };
}

export default connect( mapStateToProps, mapDispatchToProps )(ProjectList);
