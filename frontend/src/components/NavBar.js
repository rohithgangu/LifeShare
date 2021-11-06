import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav,Container, NavDropdown,} from 'react-bootstrap';


  function NavBar() {
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">LifeShare</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/">logout</Nav.Link>
        <NavDropdown title="login" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/Login">Login</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/Signup">Register</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }
  
  export default NavBar