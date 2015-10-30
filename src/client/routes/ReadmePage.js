
import React, { Component, PropTypes } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.css';
import '../assets/css/app.css';
import '../assets/js/bootstrap.js';

import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavBrand } from 'react-bootstrap';
import { Nav } from '../components/ReactBootstrap';
import { NavItem } from 'react-bootstrap';
import StructorLogo from '../components/Site/StructorLogo.jsx';
import GithubProjectReadmePane from '../containers/Site/GithubProjectReadmePane.jsx';


class ReadmePage extends Component {

    render() {
        return (
            <div>
                <Navbar inverse={ true }
                        staticTop={ true }
                        toggleNavKey={ 0 }
                        fixedTop={ true }
                        style={ {    borderBottom: '1px solid #fff'} }
                        params={ this.props.params }>
                    <NavBrand style={ {    padding: 0} } params={ this.props.params }>
                        <div style={ {    display: 'table',    padding: '7px'} } params={ this.props.params }>
                            <div style={ {    display: 'table-row'} } params={ this.props.params }>
                                <div style={ {    display: 'table-cell',    verticalAlign: 'middle'} } params={ this.props.params }>
                                    <StructorLogo style={ {    width: '2em',    display: 'block',    marginBottom: 0,    borderRadius: '5px'} } params={ this.props.params }></StructorLogo>
                                </div>
                                <div style={ {    display: 'table-cell',    verticalAlign: 'middle'} } params={ this.props.params }>
                                    <Link to="/home"
                                          style={ {    color: '#fff',    display: 'block'} }
                                          params={ this.props.params }>
                                    <span style={ {    marginLeft: '0.5em'} } params={ this.props.params }>Structor</span><span params={ this.props.params }>Market</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </NavBrand>
                    <Nav right={ true }
                         eventKey={ 0 }
                         params={ this.props.params }>
                        <NavItem href="https://github.com/ipselon/structor"
                                 target="blank"
                                 eventKey={ 1 }
                                 params={ this.props.params }>
                            <span params={ this.props.params }>Structor on GitHub</span>
                        </NavItem>
                        <NavItem href="https://twitter.com/helmetrex"
                                 target="blank"
                                 eventKey={ 2 }
                                 params={ this.props.params }>
                            <span params={ this.props.params }>Twitter</span>
                        </NavItem>
                        <NavItem href="https://www.facebook.com/groups/1668757740011916/"
                                 target="blank"
                                 eventKey={ 2 }
                                 params={ this.props.params }>
                            <span params={ this.props.params }>Facebook</span>
                        </NavItem>
                        <NavItem href="https://www.youtube.com/playlist?list=PLAcaUOtEwjoR_U6eE2HQEXwkefeVESix1"
                                 target="blank"
                                 eventKey={ 2 }
                                 params={ this.props.params }>
                            <span params={ this.props.params }>Youtube</span>
                        </NavItem>
                        <NavItem href="https://groups.google.com/forum/#!forum/structor-forum"
                                 target="blank"
                                 eventKey={ 2 }
                                 params={ this.props.params }>
                            <span params={ this.props.params }>Forum</span>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Grid fluid={ true }
                      style={ {    marginTop: '70px'} }
                      params={ this.props.params }>
                    <Row params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }
                             params={ this.props.params }>
                            <GithubProjectReadmePane params={ this.props.params }></GithubProjectReadmePane>
                        </Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}

export default ReadmePage;

