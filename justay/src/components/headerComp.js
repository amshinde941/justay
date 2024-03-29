import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './headerComp.css';
import {baseUrl} from './shared/baseUrl';
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <i className="fa fa-sliders fa-lg " style={{ padding: "1em" }} onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/home">
                            <img src={baseUrl + "images/justay.png"} height="50" width="110" alt='justay' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem style={{ padding: "1em" }}>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> <h6>Home</h6></NavLink>
                                </NavItem>
                                <NavItem style={{ padding: "1em" }}>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span><h6>About Us</h6></NavLink>
                                </NavItem>
                                <NavItem style={{ padding: "1em" }}>
                                    <NavLink className="nav-link" to='/hostel'><span className="fa fa-list fa-lg"></span><h6>Hostels</h6></NavLink>
                                </NavItem>
                                <NavItem style={{ padding: "1em" }}>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span><h6>Contact Us</h6></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;