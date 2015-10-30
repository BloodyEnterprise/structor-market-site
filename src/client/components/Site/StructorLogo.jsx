import React, { Component, PropTypes } from 'react';
import logoImage from '../../assets/images/structor-logo-white.svg';

class StructorLogo extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <img {...this.props} src={logoImage}>
            { this.props.children }
            </img>
        );
    }
}


StructorLogo.propTypes = {
    
};
StructorLogo.defaultProps = {
    
};

export default StructorLogo;