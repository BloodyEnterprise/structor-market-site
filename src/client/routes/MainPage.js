
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
import AddNewRepoForm from '../containers/Site/AddNewRepoForm.jsx';
import ProjectThumbnailGrid from '../containers/Site/ProjectThumbnailGrid.jsx';
import ModalScreenShotWrapper from '../containers/Site/ModalScreenShotWrapper.jsx';


class MainPage extends Component {

    render() {
        return (
            <div>
                <Navbar inverse={ true }
                        staticTop={ true }
                        toggleNavKey={ 0 }
                        fixedTop={ false }
                        style={ {    marginBottom: '0px'} }
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
                <Grid fluid={ true } params={ this.props.params }>
                    <Row style={ {    backgroundColor: '#2185D0'} } params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }
                             style={ {    position: 'relative'} }
                             params={ this.props.params }>
                            <h1 className="title-text text-center"
                                style={ {    marginBottom: '1em',    marginTop: '1em',    color: '#fff'} }
                                params={ this.props.params }><span params={ this.props.params }>Boilerplates for Web applications with React UI</span></h1>
                        </Col>
                    </Row>
                    <Row style={ {    borderTop: '1px solid #fff',    borderBottom: '1px solid #fff'} } params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }
                             params={ this.props.params }>
                            <div style={ {    margin: '2em 20% 2em 20%'} } params={ this.props.params }>
                                <AddNewRepoForm params={ this.props.params }></AddNewRepoForm>
                                <div params={ this.props.params }></div>
                                <h3 className="under-title-text text-center"
                                    style={ {    marginBottom: '1em',    marginTop: '0.5em'} }
                                    params={ this.props.params }><Link to="/learn-more"
                                                                                                                                            style={ {    marginLeft: '0.5em'} }
                                                                                                                                            params={ this.props.params }> <span params={ this.props.params }>Learn more about Structor...</span> </Link></h3>
                            </div>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }
                             params={ this.props.params }>
                            <ProjectThumbnailGrid params={ this.props.params }></ProjectThumbnailGrid>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }
                             params={ this.props.params }>
                            <Grid fluid={ true }
                                  style={ {    marginTop: '2em'} }
                                  params={ this.props.params }></Grid>
                        </Col>
                    </Row>
                </Grid>
                <div style={ {    margin: '100px 0 0 0',    fontSize: '16px',    height: '50px',    paddingTop: '1em',    borderTop: '1px solid #fff'} } params={ this.props.params }>
                    <Grid fluid={ true } params={ this.props.params }>
                        <Row params={ this.props.params }>
                            <Col xs={ 12 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 lgOffset={ 3 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <span params={ this.props.params }>Thank you for sharing</span>
                                </p>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://twitter.com/intent/tweet?text=Structor: UI builder for React&url=http://helmetrex.com"
                                       target="blank"
                                       params={ this.props.params }><span className="fa fa-twitter"
                                                                                                                                                                                               style={ {    width: '1.5em',    fontSize: '32px'} }
                                                                                                                                                                                               params={ this.props.params }></span></a>
                                </p>
                            </Col>
                            <Col xs={ 12 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <div style={ {    display: 'table',    width: '100%'} } params={ this.props.params }>
                                    <div style={ {    display: 'table-row'} } params={ this.props.params }>
                                        <div style={ {    display: 'table-cell',    verticalAlign: 'middle',    width: '100%',    height: '5em'} } params={ this.props.params }>
                                            <p className="text-center" params={ this.props.params }>
                                                <span params={ this.props.params }>HelmetRex © 2015</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={ 12 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <span params={ this.props.params }>Write to us</span>
                                </p>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="mailto: support@helmetrex.com" params={ this.props.params }><span params={ this.props.params }>support@helmetrex.com</span></a>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <ModalScreenShotWrapper params={ this.props.params }></ModalScreenShotWrapper>
            </div>
            );
    }
}

export default MainPage;

