import React from 'react';
import {Container,Card,Button,Row,Col} from 'react-bootstrap';
import experienceData from './ExperienceData';

const Experience =()=>
{
    return(
        <Container className=" pt-5 text-white " >
             <h1 className='mt-5' >Experience</h1>
          <Row id="Experience" className='mt-5 d-flex justify-content-center align-items-center mb-5'>
          {experienceData.map((exp)=>(
            <Col sm='10' md='10' key={exp.id} className='d-flex justify-content-center align-items-center mt-5 mb-5'>
             <Card className="text-light border border-warning" 
             style={{
              backgroundColor:"rgb(40,47,97)",
              boxShadow:"5px 5px 10px 10px rgb(101, 175, 10)"}}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
          <Card.Body className='text-center' style={{backgroundColor:"rgb(40,47,97)"}}>
          <Card.Title style={{backgroundColor:"rgb(40,47,97)",fontSize:"30px"}} className='mb-4'>{exp.title}</Card.Title>
          <Row><Col sm="2" className='p-0'>
          <Card.Img src={exp.src}
          style={{height:"100%"}}/>
          </Col>
          <Col sm="10" style={{backgroundColor:"rgb(40,47,97)"}}>
          <Card.Text style={{backgroundColor:"rgb(40,47,97)"}}>{exp.description}</Card.Text>
          <Card.Text style={{backgroundColor:"rgb(40,47,97)", color:"red"}}>{exp.duration}</Card.Text>
          </Col>
         </Row>
        </Card.Body>
      </Card>
      </Col>
    ))}
          </Row>
        </Container>
    )
}

export default Experience;