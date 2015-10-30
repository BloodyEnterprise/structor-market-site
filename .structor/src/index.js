require('../../src/client/assets/css/bootstrap.css');
require('../../src/client/assets/css/font-awesome.css');
require('../../src/client/assets/css/app.css');
require('../../src/client/assets/js/bootstrap.js');
module.exports = {
    ReactRouter: {
        Link: require('react-router').Link
    },
    ReactBootstrap: {
        Grid: require('react-bootstrap').Grid,
        Row: require('react-bootstrap').Row,
        Col: require('react-bootstrap').Col,
        ButtonToolbar: require('react-bootstrap').ButtonToolbar,
        ButtonGroup: require('react-bootstrap').ButtonGroup,
        Button: require('react-bootstrap').Button,
        DropdownButton: require('react-bootstrap').DropdownButton,
        SplitButton: require('react-bootstrap').SplitButton,
        MenuItem: require('react-bootstrap').MenuItem,
        Panel: require('react-bootstrap').Panel,
        PanelGroup: require('../../src/client/components/ReactBootstrap').PanelGroup,
        Input: require('react-bootstrap').Input,
        Table: require('react-bootstrap').Table,
        Tabs: require('../../src/client/components/ReactBootstrap').Tabs,
        Tab: require('react-bootstrap').Tab,
        Carousel: require('react-bootstrap').Carousel,
        CarouselItem: require('react-bootstrap').CarouselItem,
        ProgressBar: require('react-bootstrap').ProgressBar,
        Navbar: require('react-bootstrap').Navbar,
        NavBrand: require('react-bootstrap').NavBrand,
        Nav: require('../../src/client/components/ReactBootstrap').Nav,
        NavItem: require('react-bootstrap').NavItem,
        NavDropdown: require('react-bootstrap').NavDropdown,
        ListGroup: require('react-bootstrap').ListGroup,
        ListGroupItem: require('react-bootstrap').ListGroupItem,
        Label: require('react-bootstrap').Label,
        Badge: require('react-bootstrap').Badge,
        Well: require('react-bootstrap').Well,
        Alert: require('react-bootstrap').Alert,
        Jumbotron: require('react-bootstrap').Jumbotron,
        AlertDismissable: require('../../src/client/components/ReactBootstrap').AlertDismissable
    },
    ReactBootstrapModal: {
        ModalSubmitCancel: require('../../src/client/components/ReactBootstrap').ModalSubmitCancel,
        ModalClose: require('../../src/client/components/ReactBootstrap').ModalClose
    },
    Site: {
        LandingImg: require('../../src/client/components/Site/LandingImg.jsx'),
        StructorLogo: require('../../src/client/components/Site/StructorLogo.jsx'),
        StructorLogoFinal: require('../../src/client/components/Site/StructorLogoFinal.jsx'),
        IFrameFrame: require('../../src/client/components/Site/IFrameFrame.jsx'),
        AddNewRepoForm: require('../../src/client/containers/Site/AddNewRepoForm.jsx'),
        ProjectThumbnail: require('../../src/client/components/Site/ProjectThumbnail.jsx'),
        ProjectThumbnailGrid: require('../../src/client/containers/Site/ProjectThumbnailGrid.jsx'),
        ScreenShot: require('../../src/client/components/Site/ScreenShot.jsx'),
        GithubProjectInfoPane: require('../../src/client/components/Site/GithubProjectInfoPane.jsx'),
        ModalScreenShotWrapper: require('../../src/client/containers/Site/ModalScreenShotWrapper.jsx'),
        GithubProjectReadmePane: require('../../src/client/containers/Site/GithubProjectReadmePane.jsx')
    }
};