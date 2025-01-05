import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import skillData from './SkillsData';
const Skills=()=>
{
    return(
        <>
        <Container className='text-white'>
         <h1 className=' mb-5'>Skills</h1>
         <Row id='Skills' className='p-5 g-5 d-flex justify-content-center align-items-center'>
            {skillData.map((skill)=>(
             <Col sm="6" md='3' className='mt-5 mb-5 mx-lg-5' id={skill.id}
             data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
             data-aos-duration="2000">
                <Card style={{
              border:"2px 2px 2px 2px solid rgb(213, 216, 15)",
              boxShadow:"5px 5px 10px 10px rgb(117, 196, 44)"}}>
                    <Card.Img src={skill.src}/>
                </Card>
             </Col>
            ))}
         </Row>
        </Container>
        </>
    )
};

export default Skills;
