import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='text-center footerSection'>
                    <Row>
                        <Col sm={12} md={6} lg={3} className="p-5 text-start">
                        <h5 className='serviceName'>Follow Me</h5>
                        <a className='socialLink' href='#'><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                        <a className='socialLink' href='#'><FontAwesomeIcon icon={faYoutube}/> Youtube</a>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="p-5 text-start">
                        <h5 className='serviceName'>Address</h5>
                        <p className='serviceDescription'>House-2, Line-7, Mirpur11, Dhaka</p>
                        <p className='serviceDescription'><FontAwesomeIcon icon={faEnvelope}/> rahiseli@outlook.com</p>
                        <p className='serviceDescription'><FontAwesomeIcon icon={faPhoneAlt}/> 01612061077</p>

                        </Col>
                        <Col sm={12} md={6} lg={3} className="p-5 text-start">
                        <h5 className='serviceName'>Information</h5>
                        <Link className="footerLink" to="/about">About Me</Link><br/>
                        <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="p-5 text-start">
                        <h5 className='serviceName'>Legal</h5>
                        <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                        <Link className="footerLink" to="/terms">Terms & Condition</Link><br/>
                        <Link className="footerLink" to="/privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center copyrightSection'>
                    <a href='#' className='copyrightLink'>Rahidul.com &copy; 2022</a>
                </Container>
            </Fragment>
        )
    }
}
