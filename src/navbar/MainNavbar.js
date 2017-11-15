import React, { Component } from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import '../style/navbar.css';

class MainNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Link</NavItem>
                        <NavItem eventKey={2} href="/">Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/">Login</NavItem>
                        <NavItem eventKey={2} href="/">Register</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MainNavbar;
