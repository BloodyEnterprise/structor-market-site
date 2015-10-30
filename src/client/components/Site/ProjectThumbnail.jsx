import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import GithubProjectInfoPane from './GithubProjectInfoPane.jsx';

class ProjectThumbnail extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    componentDidMount(){
        const { onRefreshProjectInfo, projectFullName, projectObj } = this.props;
        if(onRefreshProjectInfo && !projectObj){
            onRefreshProjectInfo(projectFullName);
        }
    }

    componentDidUpdate(){
        const { onRefreshProjectInfo, projectFullName, projectObj  } = this.props;
        if(onRefreshProjectInfo && !projectObj){
            onRefreshProjectInfo(projectFullName);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.projectObj != nextProps.projectObj;
    }

    render() {
        const { projectObj, projectFullName, onScreenShotClick, onReadMoreClick } = this.props;

        let content = null;

        if(!projectObj){
            content = (
                <p>
                    <span>{'Project ' + projectFullName + ' is absent'}</span>
                </p>
            );
        } else {
            const { projectObj: { fetching: { status, error, errorText }, info } } = this.props;
            if(status === 'loading'){
                content = (
                    <p className="text-center">
                        <span style={{fontSize: '30px'}} className='fa fa-cog fa-spin'></span>
                    </p>
                );
            } else if(status === 'done'){
                if(!error){
                    content = (
                        <GithubProjectInfoPane
                            screenshotUrl={info.screenshotUrl}
                            projectTitle={info.name}
                            projectDescription={info.description}
                            projectFullName={projectFullName}
                            starsCount={info.starsCount}
                            downloadUrl={info.downloadUrl}
                            githubRepoUrl={info.htmlUrl}
                            onScreenShotClick={onScreenShotClick}
                            onReadMoreClick={onReadMoreClick} />
                    );
                } else {
                    content = (
                        <div>
                            <h4 style={ { marginTop: 0, overflow: 'hidden', height: '1.2em'} } className="under-title-text">
                                <span >{projectFullName}</span>
                            </h4>
                            <p className="text-danger">
                                <span>{errorText}</span>
                            </p>
                        </div>
                    );
                }
            }
        }

        let thumbnailStyle = {
            width: '100%'
        };

        return (
            <Panel style={thumbnailStyle}>
                {content}
                {this.props.children}
            </Panel>
            );
    }
}


ProjectThumbnail.propTypes = {
    style: PropTypes.object,
    projectObj: PropTypes.object,
    projectFullName: PropTypes.string.isRequired,
    onRefreshProjectInfo: PropTypes.func,
    onScreenShotClick: PropTypes.func,
    onReadMoreClick: PropTypes.func
};
ProjectThumbnail.defaultProps = {
    style: {
        margin: 0
    }
};

export default ProjectThumbnail;