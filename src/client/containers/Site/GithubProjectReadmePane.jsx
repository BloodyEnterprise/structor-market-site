
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel, Alert } from 'react-bootstrap';

import { fetchGithubProjectReadme } from '../../actions/fetchGithubProjectReadme.js';

class GithubProjectReadmePane extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    componentDidMount(){
        const { readmeFile: { projectFullName }, dispatch } = this.props;
        if(projectFullName){
            dispatch(fetchGithubProjectReadme({ repoFullName: projectFullName }));
        }
    }

    render() {
        const {
            readmeFile: {
                fetching: { status, error, errorText },
                content
            },
        } = this.props;

        let panelContent = null;
        if(status === 'loading'){
            panelContent = (
                <p className="text-center">
                    <span style={{fontSize: '30px'}} className='fa fa-cog fa-spin'></span>
                </p>
            );
        } else if(status === 'done'){
            if(!error){
                panelContent = (
                    <div dangerouslySetInnerHTML={{__html: content}} ></div>
                );
            } else {
                panelContent = (<Alert bsStyle="danger">{errorText}</Alert>);
            }
        }

        return (
            <Panel>
                {panelContent}
            </Panel>
        );
    }
}



function mapStateToProps(state) {
    const { github: { readmeFile } } = state;

    return {
        readmeFile
    };
}

export default connect(mapStateToProps)(GithubProjectReadmePane);


