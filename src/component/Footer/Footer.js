
import { faAward, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row >
                       <Col lg={6} md={6} xs={12} >
                          <p className="pb-0 align-content-center mb-0">© 2021 Design & Developed By <a className="text-decoration-none" target="_blank" rel="noreferrer" href="https://facebook.com/hasanulsakir">Hasanul Karim</a></p>
                    </Col>
                   <Col lg={6} md={6} xs={12} >
                        <div>
                            <a className='text-decoration-none fs-3' rel='social' href="#">
                                <FontAwesomeIcon className="mx-2" icon={faAward} ></FontAwesomeIcon>
                            </a>
                           
                            <a className='text-decoration-none fs-3' rel='social' href="#">
                                <FontAwesomeIcon className="mx-2" icon={faSignInAlt}></FontAwesomeIcon>
                            </a>
                          
                           </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Footer;