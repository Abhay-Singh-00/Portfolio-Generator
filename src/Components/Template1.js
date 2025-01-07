import React, { useEffect } from 'react';
import Navbar1 from './Navbar1';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './CustomTemplate1.css';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Project';
import Contact from './Contact';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';


  
const Template1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in ms
      once: false, // Animation happens only once
      anchorPlacement: 'top-bottom', // Default anchor placement
    });
  }, []);
return(<div className='custom'>
   <Navbar1/>
   <Container>
    <Row id="Home" className='g-5 vh-100 d-flex justify-content-center align-items-center'>
      <Col sm='10'md='7' className='d-flex justify-content-center align-items-center mt-5 pt-5' data-aos="fade-down-right" >
      <Card className="text-light vw-100 border border-warning" 
          style={{ boxShadow:"5px 5px 10px 10px rgb(168, 159, 25)"}}>
        <Card.Body className='text-center' style={{backgroundColor:"rgb(40,47,97)"}}>
         <Typewriter options={{strings:['Hello, I am Abhay. Welcome to my portfolio.','I am a Full Stack Developer.','I am a MERN Stack Developer'],
                              autoStart:true,
                              loop:true,
                              delay:50,
         }}
         />
        <Button variant='warning' href='/resume.pdf' download="reusme.pdf" className='mt-4 fw-bolder'>Download Resume</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col md='5' className='d-flex justify-content-center align-items-center mt-5' data-aos="fade-up-left"> 
      <motion.div initial={{y:0,boxShadow:'10px 10px 100px 50px rgb(0,0,255)'}}  
                  animate={{y:[0,-20,0],
                    boxShadow:['10px 10px 100px 50px rgb(238, 244, 11)',
                                '10px 10px 100px 50px rgb(12, 12, 199)',
                                '10px 10px 100px 50px rgb(130, 217, 160)',
                                '10px 10px 100px 50px rgb(50, 55, 205)',
                    ]
                  }}
                  transition={{duration:2,repeat:Infinity,repeatType:'loop',}}
                  style={{
                    borderRadius:"50%",
                  }}
                  >
      <Card.Img src={require('Abhi03.jpg')}
      alt="profile Thumbnail"
      style={{backgroundColor:"yellow",height:'270px',width:'270px',borderRadius:'50%',border:'2px solid blue',}}/>
      </motion.div>
      </Col>
    </Row>
    </Container>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
};

export default Template1;
