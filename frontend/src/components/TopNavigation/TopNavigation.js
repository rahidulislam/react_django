import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whiteLogo from '../../asset/images/white.jpg';
import blueLogo from '../../asset/images/blue.png';
import {NavLink} from 'react-router-dom';
class TopNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            navTitle:"navTitle",
            navBarLogo: [whiteLogo],
            navBackground: 'navBackground',
            navBarItem: 'navItem',
            navVariant: "dark",
            mainTitle: props.title
        }
    }
    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({
                navTitle:'navTitleScroll', 
                navBarLogo:[blueLogo], 
                navBackground: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant: "light",
            })
        }
        else if (window.scrollY<100){
            this.setState({
                navTitle: 'navTitle', 
                navBarLogo:[whiteLogo],
                navBackground: 'navBackground',
                navBarItem:'navItem',
                navVariant: "dark",
            })
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.mainTitle}</title>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground} variant={this.state.navVariant}>
                    <Container>
                        <Navbar.Brand ><NavLink className={this.state.navTitle} to="/"><img className="navLogo" src={this.state.navBarLogo} alt='Rahidul Islam' /> RAHIDUL ISLAM</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink end style={({isActive}) => ({color: isActive ? '#00a8ee' : '#ffffff'})} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                                <Nav.Link><NavLink end style={({isActive}) => ({color: isActive ? '#00a8ee' : '#ffffff'})} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                                <Nav.Link><NavLink end style={({isActive}) => ({color: isActive ? '#00a8ee' : '#ffffff'})} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                                <Nav.Link><NavLink end style={({isActive}) => ({color: isActive ? '#00a8ee' : '#ffffff'})} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                                <Nav.Link><NavLink end style={({isActive}) => ({color: isActive ? '#00a8ee' : '#ffffff'})} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                                <Nav.Link><NavLink end style={({isActive}) => ({color: isActive ? '#00a8ee' : '#ffffff'})} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;