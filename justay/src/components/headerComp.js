import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './headerComp.css';
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
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/home">
                            <img src="images/justay.jpg" height="50" width="110" alt='justay' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem style={{padding:"1em"}}>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> <h6>Home</h6></NavLink>
                            </NavItem>
                            <NavItem style={{padding:"1em"}}>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem style={{padding:"1em"}}>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Hostels</NavLink>
                            </NavItem>
                            <NavItem style={{padding:"1em"}}>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
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