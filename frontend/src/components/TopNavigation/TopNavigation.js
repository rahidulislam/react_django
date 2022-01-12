import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/images/white.jpg';
import blueLogo from '../../asset/images/blue.png';
class TopNavigation extends Component {
    constructor(){
        super();
        this.state = {
            navBarTitle:"navBarTitle",
            navBarLogo: [whiteLogo],
            navBackground: 'navBackground',
            navBarItem: 'navItem'
        }
    }
    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({
                navBarTitle:'navTitleScroll', 
                navBarLogo:[blueLogo], 
                navBackground: 'navBackgroundScroll',
                navBarItem: 'navItemScroll'
            })
        }
        else if (window.scrollY<100){
            this.setState({
                navBarTitle: 'navBarTitle', 
                navBarLogo:[whiteLogo],
                navBackground: 'navBackground',
                navBarItem:'navItem'
            })
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground} variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.navBarTitle}><img className="navLogo" src={this.state.navBarLogo} alt='Rahidul Islam' /> Rahidul Islam</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;