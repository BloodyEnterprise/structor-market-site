
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ScreenShot from './ScreenShot.jsx';
import StructorLogoFinal from './StructorLogoFinal.jsx';

class GithubProjectInfoPane extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.handleScreenshotClick = this.handleScreenshotClick.bind(this);
        this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
    }

    handleScreenshotClick(e){
        const { onScreenShotClick, screenshotUrl } = this.props;
        if(onScreenShotClick){
            onScreenShotClick(screenshotUrl);
        }
    }

    handleReadMoreClick(e){
        //e.stopPropagation();
        //e.preventDefault();
        const { onReadMoreClick, projectFullName } = this.props;
        if(onReadMoreClick){
            onReadMoreClick(projectFullName);
        }
    }

    render() {
        const { screenshotUrl, projectTitle, projectDescription, starsCount, downloadUrl, githubRepoUrl } = this.props;
        return (
            <div>
                <h4 style={ { marginTop: 0, overflow: 'hidden', height: '1.2em'} } className="under-title-text"><span >{projectTitle}</span></h4>
                <div style={ { overflow: 'auto', maxHeight: '18em', height: '18em'} }>
                    { !!screenshotUrl ?
                        <ScreenShot
                            style={ { width: '100%', cursor: 'pointer'} }
                            src={screenshotUrl}
                            onClick={this.handleScreenshotClick} /> :
                        <StructorLogoFinal
                            style={ { borderRadius: "5px", backgroundColor: "#f5f5f5", maxHeight: "18em", width: "100%", cursor: 'pointer' }}
                            onClick={this.handleScreenshotClick} />
                    }

                </div>
                <p style={ { marginTop: '0.7em', height: '3em', overflow: 'hidden', fontSize: '16px'} }>
                    <span>{projectDescription}</span>
                </p>
                <p style={ { height: '1.6em', fontSize: '16px'} }>
                    <Link to="/readme" onClick={this.handleReadMoreClick}><span >Read more details about project...</span></Link>
                </p>
                <hr></hr>
                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }>
                            <p>
                                <span className="fa fa-star text-left text-primary" style={ { width: '1.5em', fontSize: '20px'} }></span>
                                <strong>{starsCount}</strong>
                            </p>
                        </Col>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }>
                            <p>
                                <a href={downloadUrl}>
                                    <span className="fa fa-cloud-download text-left"style={ { width: '1.5em', fontSize: '20px'} } ></span>
                                    <span >Download</span>
                                </a>
                            </p>
                        </Col>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }>
                            <p>
                                <a href={githubRepoUrl} target="blank">
                                    <span className="fa fa-github text-left"style={ { width: '1.5em', fontSize: '20px'} } ></span>
                                    <span >GitHub</span>
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}

GithubProjectInfoPane.propTypes = {
    screenshotUrl: PropTypes.string,
    projectTitle: PropTypes.string.isRequired,
    projectDescription: PropTypes.string,
    projectFullName: PropTypes.string,
    starsCount: PropTypes.number,
    downloadUrl: PropTypes.string.isRequired,
    githubRepoUrl: PropTypes.string.isRequired,
    onScreenShotClick: PropTypes.func,
    onReadMoreClick: PropTypes.func
};
GithubProjectInfoPane.defaultProps = {
    screenshotUrl: null,
    starsCount: 0,
    projectDescription: 'Project description is not found'
};

export default GithubProjectInfoPane;