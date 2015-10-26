
import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import StructorLogo from './StructorLogo.jsx';

class ProjectThumbnailWrapper extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <div {...this.props}>
                { this.props.children }
            </div>
            );
    }
}


export default ProjectThumbnailWrapper;