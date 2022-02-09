import React, { Component, Fragment } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import {Player, BigPlayButton} from 'video-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
export default class CourseDetail extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="pageContentCourse">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h2 className="courseFullTitle">Course Name</h2>
                                    <h5 className="courseSubTitle">Total Students:30</h5>
                                    <h5 className="courseSubTitle">Total Lesson:20</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="courseDes text-white">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h4 className="serviceName text-primary"> Skill you Get</h4>
                            
                            <ul className="CourseSkill">
                                <li><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'></FontAwesomeIcon> It is a long established fact</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'></FontAwesomeIcon> It is a long established fact</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'></FontAwesomeIcon> It is a long established fact</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'></FontAwesomeIcon> It is a long established fact</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'></FontAwesomeIcon> It is a long established fact</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'></FontAwesomeIcon> It is a long established fact</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <Player>
                          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                          <BigPlayButton position='center' />
                         </Player>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    );
  }
}
