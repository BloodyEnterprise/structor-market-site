
import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import marked from 'marked';
import StructorLogo from './StructorLogo.jsx';

class ProjectThumbnailAir extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        return (
            <Panel style={{ border: 0 }}>
                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 2 }
                             md={ 2 }
                             sm={ 2 }
                             lg={ 2 }
                             className="hidden-xs">
                            <div style={ { display: 'table-cell',    textAlign: 'center'} }>
                                <div style={ {    padding: '20px'} }>
                                    <StructorLogo style={ {    width: '100%'} }></StructorLogo>
                                </div>
                                <p className="text-center">
                                    <span>{this.props.countDownload}</span>
                                </p>
                                <Button bsStyle="primary" bsSize="xs" href={'/rbs/downloadGalleryFile?id=' + this.props.projectId + '&packageFileName=__app.tar.gz'}>
                                    <span>Download</span>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={ 12 }
                             md={ 10 }
                             sm={ 10 }
                             lg={ 10 }>
                            <div style={ {    position: 'relative',    verticalAlign: 'top'} }>
                                <h3 className="text-danger" style={ {    width: '80%'} }>
                                    <Link className="text-danger" to={'/details/' + this.props.projectId}>
                                    <span >{this.props.projectName}</span>
                                        </Link>
                                </h3>
                                <p>
                                    <span>Uploaded: {this.props.createDate}</span>
                                    <span>  |  </span>
                                    <span>Author: {this.props.userName}</span>
                                </p>
                                <hr></hr>
                                <p>
                                    <span dangerouslySetInnerHTML={{__html: marked(this.props.description)}} ></span>
                                </p>
                                <p className="text-right">
                                    <Link to={'/details/' + this.props.projectId}>
                                        <span>Read more details...</span>
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            );
    }
}

ProjectThumbnailAir.propTypes = {
    projectName: PropTypes.string,
    createDate: PropTypes.string,
    description: PropTypes.string,
    userName: PropTypes.string,
    countDownload: PropTypes.number,
    projectId: PropTypes.number
};
ProjectThumbnailAir.defaultProps = {
    projectName: 'Unknown',
    createDate: 'Unknown',
    description: 'Unknown',
    userName: 'Unknown',
    countDownload: 0,
    projectId: -1
};

export default ProjectThumbnailAir;


