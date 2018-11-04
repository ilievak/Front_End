import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Kosara</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                   
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Login
      </NavItem>
                    <NavItem eventKey={2} href="#">
                        Register
      </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );


}

export default NavBar;