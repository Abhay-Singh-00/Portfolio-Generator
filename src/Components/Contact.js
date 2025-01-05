import React from 'react';
import {Container} from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact=()=>
{
    return(
        <>
        <Container>
        <h1 className='text-white mb-5'id="Contact">Contact Me</h1>
        <div className='d-flex justify-content-center align-items-center mb-5'
        data-aos="fade-up"
        data-aos-duration="1000">
        <FaInstagram  className='custom-icon me-5 mb-5'/>
        <FaFacebook className='custom-icon me-5 mb-5'/>
        <FaLinkedin className='custom-icon me-5 mb-5'/>
        <FaGithub className='custom-icon me-5 mb-5'/>
        <FaTwitter className='custom-icon me-5 mb-5'/>
        <SiGmail className='custom-icon me-5 mb-5'/>
        </div>
        </Container>
        <div className='mt-5 text-white bg-dark text-center'>
            This portfolio is designed by Abhay Singh.<br/>
            @copyright 2025-2028
        </div>
        </>
    )
};

export default Contact;