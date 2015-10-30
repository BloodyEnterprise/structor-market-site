
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ModalClose } from '../../components/ReactBootstrap';
import ScreenShot from '../../components/Site/ScreenShot.jsx';
import { hideModal } from '../../actions/modalGithubProjectScreenshot.js';

class ModalScreenShotWrapper extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.handleClose = this.handleClose.bind(this);
    }


    shouldComponentUpdate(nextProps, nextState){
        return this.props.show != nextProps.show;
    }

    handleClose(){
        this.props.dispatch(hideModal());
    }

    render() {
        const { show, screenshotUrl } = this.props;
        let bodyContent = null;
        if(screenshotUrl){
            bodyContent = (
                <ScreenShot
                    src={screenshotUrl}
                    style={ { width: '100%'} }>
                </ScreenShot>            );
        } else {
            bodyContent = (
                <div style={{ padding: '2em' }}>
                    <h4 className="text-danger">
                        <span>A screenshot file was not found for this project</span>
                    </h4>
                    <h4 className="text-danger">
                            <span>
                                To have a good looking project thumbnail please add "screenshot.png"
                                file to the root of project's source code in GitHub repository
                            </span>
                    </h4>
                </div>
            );
        }
        return (
            <ModalClose show={show} bsSize="large" title="Project screenshot" onClose={this.handleClose}>
                {bodyContent}
            </ModalClose>
        );
    }
}


ModalScreenShotWrapper.propTypes = {
};
ModalScreenShotWrapper.defaultProps = {
};


function mapStateToProps(state) {
    const { github: { modalScreenshot: { show, screenshotUrl } } } = state;
    return {
        show,
        screenshotUrl
    };
}

export default connect(mapStateToProps)(ModalScreenShotWrapper);


