
import React, { Component, PropTypes } from 'react';


class IFrameFrame extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <div style={{position: 'absolute', top: '60px', left: '5px', right: '5px', bottom: '5px'}}>
                <iframe
                    src="//slides.com/alexanderpustovalov/deck/embed"
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="0"
                    webkitAllowFullScreen={true}
                    mozAllowFullScreen={true}
                    allowFullScreen={true}>
                </iframe>
            </div>
            );
    }
}


export default IFrameFrame;