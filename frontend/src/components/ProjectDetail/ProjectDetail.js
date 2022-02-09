import React, { Component, Fragment } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import image1 from '../../asset/images/image1.jpg'
export default class ProjectDetail extends Component {
  render() {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className='w-100' src={image1} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h2 className='serviceName'>Fall Bazzar</h2>
                        <p className='serviceDescription'>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <ul>
                            <li className='serviceDescription'>There are many variations of passages of Lorem Ipsum</li>
                            <li className='serviceDescription'>There are many variations of passages of Lorem Ipsum</li>
                            <li className='serviceDescription'>There are many variations of passages of Lorem Ipsum</li>
                            <li className='serviceDescription'>There are many variations of passages of Lorem Ipsum</li>
                            <li className='serviceDescription'>There are many variations of passages of Lorem Ipsum</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
  }
}
