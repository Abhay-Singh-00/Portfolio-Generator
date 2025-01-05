import React from 'react';
import {Row,Col,Button,Container} from 'react-bootstrap';
import NavigationBar from './Navbar';
import './homeCustom.css';

const Home= ()=>
{
    return(
        <>
       <NavigationBar/>
     <Container className="d-flex justify-content-center align-items-center text-center vh-100">
        <Row>
            <Col>
            <h1>Welcome to Portfolio Generator</h1>
            <p>Build a stunning Portfolio effortlessly.</p>
            <Button variant="primary" href="/editor">Get Started</Button>
            </Col>
            </Row>
            </Container>
        </>
    );
};
export default Home;