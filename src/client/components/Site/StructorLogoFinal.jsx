import React, { Component, PropTypes } from 'react';
import logoImage from '../../assets/images/umylogo-white.svg';

class StructorLogoFinal extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <img {...this.props} src={logoImage}>
            </img>
        );
    }
}

export default StructorLogoFinal;