
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import ProjectThumbnail from '../../components/Site/ProjectThumbnail.jsx';
import { loadIndexData } from '../../actions/loadIndexData.js';
import { fetchGithubProjectInfo } from '../../actions/fetchGithubProjectInfo.js';
import { showModal } from '../../actions/modalGithubProjectScreenshot.js';
import { setCurrentGithubProjectReadme } from '../../actions/fetchGithubProjectReadme.js';

class ProjectThumbnailGrid extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.handleRefreshProjectInfo = this.handleRefreshProjectInfo.bind(this);
        this.handleShowProjectScreenshot = this.handleShowProjectScreenshot.bind(this);
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(loadIndexData());
    }

    handleRefreshProjectInfo(projectFullName){
        this.props.dispatch(fetchGithubProjectInfo({ repoFullName: projectFullName }));
    }

    handleShowProjectScreenshot(srcUrl){
        this.props.dispatch(showModal(srcUrl));
    }

    handleReadMore(projectFullName){
        this.props.dispatch(setCurrentGithubProjectReadme(projectFullName));
    }

    render() {
        const {
            indexFile: {
                data: { list },
                fetching: { status, error, errorText }
            },
            projects
        } = this.props;

        let rows = [];
        if(status === 'loading'){
            rows.push(
                <Row key='loadingRow'>
                    <Col
                        xs={ 12 }
                        md={ 12 }
                        sm={ 12 }
                        lg={ 12 }
                        >
                        <p className="text-center">
                            <span style={{fontSize: '30px'}} className='fa fa-cog fa-spin'></span>
                        </p>
                    </Col>
                </Row>
            );
        } else if(status === 'done'){
            if(!error){
                //console.log('Projects: ');
                //console.log(JSON.stringify(projects, null, 4));
                if(list && list.length > 0){
                    for(let i = 0; i < list.length; i += 2){
                        let cols = [];
                        for(let x = 0; x < 2; x++){
                            if((i + x) < list.length){
                                const projectFullName = list[(i+x)].owner + '/' + list[(i+x)].repo;
                                const projectObj = projects[projectFullName];
                                cols.push(
                                    <Col
                                        key={'projectsCol' + x + i}
                                        xs={ 12 }
                                        md={ 6 }
                                        sm={ 6 }
                                        lg={ 6 }
                                        style={ { margin: 0, padding: 10} }>
                                        <ProjectThumbnail
                                            onRefreshProjectInfo={this.handleRefreshProjectInfo}
                                            onScreenShotClick={this.handleShowProjectScreenshot}
                                            onReadMoreClick={this.handleReadMore}
                                            projectFullName={projectFullName}
                                            projectObj={projectObj}
                                            style={ { margin: 0} }
                                            >
                                        </ProjectThumbnail>
                                    </Col>
                                );
                            }
                        }

                        rows.push(
                            <Row key={'projectsRow' + i}
                                 style={ { padding: 0} }>
                                {cols}
                            </Row>
                        );
                    }
                }
            } else {
                rows.push(
                    <Row key='errorRow'>
                        <Col
                            xs={ 12 }
                            md={ 12 }
                            sm={ 12 }
                            lg={ 12 }
                            >
                            <Alert bsStyle="danger">{errorText}</Alert>
                        </Col>
                    </Row>
                );
            }
        }

        return (
            <Grid {...this.props}>
                {rows}
            </Grid>
            );
    }
}


ProjectThumbnailGrid.propTypes = {
    fluid: PropTypes.bool,
    style: PropTypes.object
};
ProjectThumbnailGrid.defaultProps = {
    fluid: true,
    style: {
        marginTop: '2em'
    }
};


function mapStateToProps(state) {
    const { github: { indexFile, projects } } = state;
    return {
        indexFile,
        projects
    };
}


export default connect(mapStateToProps)(ProjectThumbnailGrid);


