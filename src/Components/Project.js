import React from 'react';
import {Container,Row,Card, Col,Button} from 'react-bootstrap';
import ProjectData from './ProjectData';

const Projects=()=>{
    return(
        <>
        <Container className="text-white">
        <h1>Projects</h1>
        <Row className='mt-5 d-flex justify-content-center align-items-center g-5 mb-5' id="Projects">
            {ProjectData.map((Pro)=>(
            <Col sm='5' md="3" id={Pro.id} className="mb-5 me-lg-5" data-aos="zoom-out-down">
              <Card style={{
                border:"2px solid yellow",
                backgroundColor:"rgb(43, 46, 42)",
                boxShadow:"5px 5px 10px 10px rgb(117, 196, 44)"
              }}> 
                <Card.Header>
                    <Card.Img 
                    src={Pro.src}
                    alt="Project Logo"
                    className='p-0'
                    style={{height:"100%", border:"2px solid rgb(168,159,25)"}}/>
                </Card.Header>          
               <Card.Body>
                <Card.Title className='text-white text-center'>{Pro.title}</Card.Title>
                <div className='d-flex justify-content-between'>
                <Button variant='warning mt-2'>Run</Button>
                <Button variant='success mt-2'>Code</Button>
                </div>
                </Card.Body>
                </Card> 
            </Col>
            ))}
        </Row>
        </Container>
        </>
    )
};

export default Projects;