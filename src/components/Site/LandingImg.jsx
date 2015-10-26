
import React, { Component, PropTypes } from 'react';
import titleImage from '../../assets/images/title-background.png';

class LandingImg extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <img src={titleImage} {...this.props}>
            { this.props.children }
            </img>
            );
    }
}


LandingImg.propTypes = {

};
LandingImg.defaultProps = {

};

export default LandingImg;