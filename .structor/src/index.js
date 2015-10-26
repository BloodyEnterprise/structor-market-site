require('../../src/assets/css/bootstrap.css');
require('../../src/assets/css/font-awesome.css');
require('../../src/assets/css/app.css');
require('../../src/assets/js/bootstrap.js');
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
        PanelGroup: require('../../src/components/ReactBootstrap').PanelGroup,
        Input: require('react-bootstrap').Input,
        Table: require('react-bootstrap').Table,
        Tabs: require('../../src/components/ReactBootstrap').Tabs,
        Tab: require('react-bootstrap').Tab,
        Carousel: require('react-bootstrap').Carousel,
        CarouselItem: require('react-bootstrap').CarouselItem,
        ProgressBar: require('react-bootstrap').ProgressBar,
        Navbar: require('react-bootstrap').Navbar,
        Nav: require('../../src/components/ReactBootstrap').Nav,
        NavItem: require('react-bootstrap').NavItem,
        ListGroup: require('react-bootstrap').ListGroup,
        ListGroupItem: require('react-bootstrap').ListGroupItem,
        Label: require('react-bootstrap').Label,
        Badge: require('react-bootstrap').Badge,
        Well: require('react-bootstrap').Well,
        Alert: require('react-bootstrap').Alert,
        Jumbotron: require('react-bootstrap').Jumbotron
    },
    Site: {
        LandingImg: require('../../src/components/Site/LandingImg.jsx'),
        StructorLogo: require('../../src/components/Site/StructorLogo.jsx'),
        ProjectThumbnailWrapper: require('../../src/components/Site/ProjectThumbnailWrapper.jsx'),
        ProjectList: require('../../src/components/Site/ProjectList.jsx'),
        ProjectThumbnailAir: require('../../src/components/Site/ProjectThumbnailAir.jsx'),
        ProjectOverview: require('../../src/components/Site/ProjectOverview.jsx')
    }
};