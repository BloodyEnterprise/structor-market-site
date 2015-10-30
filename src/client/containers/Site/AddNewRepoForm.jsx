import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { AlertDismissable } from '../../components/ReactBootstrap';

import { addGithubRepoToIndex, clearAddingGithubRepoError } from '../../actions/addGithubRepoToIndex.js';

class AddNewRepoForm extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.handleAddNewRepo = this.handleAddNewRepo.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.state = {
            ownerName: null,
            repoName: null,
            isSubmitted: false
        }
    }

    handleOnKeyDown(e){
        if(e.keyCode == 13){
            this.handleAddNewRepo(e);
        }
    }

    handleAlertDismiss(){
        this.props.dispatch(clearAddingGithubRepoError());
        this.setState({
            isSubmitted: false
        });
    }

    handleAddNewRepo(e){
        e.stopPropagation();
        e.preventDefault();
        let ownerName = this.refs.ownerNameInput.getValue();
        let repoName = this.refs.repoNameInput.getValue();
        this.props.dispatch(addGithubRepoToIndex(ownerName, repoName))
            .then((action) => {
                if(!action.error){
                    this.setState({
                        ownerName: null,
                        repoName: null,
                        isSubmitted: true
                    });
                }
            });
    }

    render() {
        let { addRepoForm: { fetching: { status, error, errorText } } } = this.props;
        let formColStyle = {
            paddingLeft: '5px',
            paddingRight: '5px'
        };

        let messageContent = null;
        let addButtonContent = null;
        let isElementDisabled = false;
        if(status === 'loading'){
            addButtonContent = ( <span className='fa fa-cog fa-spin'></span> );
            isElementDisabled = true;
        } else if(status === 'done'){
            addButtonContent = ( <span>Add</span> );
            if(!error){
                if(this.state.isSubmitted){
                    messageContent = (
                        <AlertDismissable bsStyle="success" onDismiss={this.handleAlertDismiss}>
                            <p><strong>Thank you for adding a boilerplate! We appreciate your contribution.</strong></p>
                            <p><strong>Please, tell us if you need help in documenting your project.</strong></p>
                        </AlertDismissable>
                    );
                }
            } else {
                messageContent = (
                    <AlertDismissable bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                        <span>{errorText}</span>
                    </AlertDismissable>
                );
            }
        }

        return (
            <div {...this.props}>
                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }>
                            <h3 className="under-title-text text-center" style={ { marginTop: 0} }>
                                <span style={ { marginRight: '0.3em'} } >Add Structor compatible boilerplate existing on GitHub:</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                             style={formColStyle}>
                            <Input
                                ref="ownerNameInput"
                                type="text"
                                disabled={isElementDisabled}
                                value={this.state.ownerName}
                                onChange={ () => { this.setState({ ownerName: this.refs.ownerNameInput.getValue() }); } }
                                placeholder="Owner name"></Input>
                        </Col>
                        <Col xs={ 12 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                             style={formColStyle}>
                            <Input
                                ref="repoNameInput"
                                type="text"
                                disabled={isElementDisabled}
                                value={this.state.repoName}
                                onChange={ () => { this.setState({ repoName: this.refs.repoNameInput.getValue() }); } }
                                onKeyDown={this.handleOnKeyDown}
                                placeholder="Repository name"></Input>
                        </Col>
                        <Col xs={ 12 }
                             md={ 2 }
                             sm={ 2 }
                             lg={ 2 }
                             style={formColStyle}>
                            <Button
                                bsStyle="primary"
                                disabled={isElementDisabled}
                                block={ true }
                                onClick={this.handleAddNewRepo}>
                                {addButtonContent}
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }
                             sm={ 12 }
                             md={ 12 }
                             lg={ 12 }
                             style={formColStyle}>
                            {messageContent}
                        </Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}


function mapStateToProps(state) {
    const { github: { addRepoForm } } = state;
    return {
        addRepoForm
    };
}
//function mapDispatchToProps(dispatch) {
//    return {
//        //onAction: () => dispatch(action())
//    };
//}

export default connect(mapStateToProps)(AddNewRepoForm);


