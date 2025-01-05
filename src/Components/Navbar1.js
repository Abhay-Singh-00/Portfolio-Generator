import React from 'react';
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap';

const Navbar1=()=>{
    return(
     <Navbar variant="dark" expand="lg" className="px-4 sticky-top fw-bolder" data-aos="fade-down"
     data-aos-duration="1000">
      <Container>
     <Navbar.Brand className='fs-5 fw-bolder'>Abhay Singh</Navbar.Brand>
     <Navbar.Toggle aria-controls="nav"/>
     <Navbar.Collapse id="nav">
      <Nav className="ms-auto fw-bolder fs-5">
        <Nav.Link href="#Home" className='ms-4'>Home</Nav.Link>
        <Nav.Link href="#Experience" className='ms-4'>Experience</Nav.Link>
        <Nav.Link href="#Skills" className='ms-4'>Skills</Nav.Link>
        <Nav.Link href='#Projects' className='ms-4'>Projects</Nav.Link>
        <Nav.Link href='#Contact' className='ms-4'>Contact</Nav.Link>
      </Nav>
     </Navbar.Collapse>
     </Container>
     </Navbar>
    );
};
export default Navbar1;