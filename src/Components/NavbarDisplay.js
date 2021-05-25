import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavbarDisplay () {

    //visible on every page
    const [color, changeColor] = useState('#D3B786')
    return (
        <Navbar fixed="top" style={{background:"#F9EEC9"}} variant="light" expand="lg">
            <LinkContainer to="/" onClick={() => changeColor('#D3B786')}>  
                <Navbar.Brand href="#home">Foodie Assistant</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{ background: color}} id='main'>
                    <LinkContainer to="/" onClick={() => changeColor('#D3B786')}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/meals" onClick={() => changeColor('#E4B455')}>
                        <Nav.Link>Meals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/journal" onClick={() => changeColor('#886839')}>
                        <Nav.Link>Journal</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

