import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const NavigationBar = () =>
{
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
            <Navbar.Brand  href="/">Portfolio Generator</Navbar.Brand>
                <Navbar.Toggle area-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/editor">Build Portfolio</Nav.Link>
                    <Nav.Link href="/preview">Preview</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>  
                 
    );
};
export default NavigationBar;