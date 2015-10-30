
import React, { Component, PropTypes } from 'react';
//import logoImage from '../../assets/images/structor-market-screenshot.png';

class ScreenShot extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <img {...this.props} src={this.props.src}>
            </img>
        );
    }
}


ScreenShot.propTypes = {
    src: PropTypes.string.isRequired
};
ScreenShot.defaultProps = {
    src: ""
};

export default ScreenShot;