import React, { Component,Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import course from '../../asset/images/course.jpg'
import { Link } from 'react-router-dom'
export default class AllCourses extends Component {
    render() {
        return (
            <Fragment>
        <Container className="text-center mt-5">
        
          <Row>
            <Col sm={12} md={12} lg={6} className="p-2">
              <Row>
                <Col sm={12} md={6} lg={6}>
                    <img className="courseImg" src={course} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h5 className="courseTitle">Web Development</h5>
                    <p className="courseDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/courseDetail" className="courseDetails float-start">Details</Link>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={6} className="p-2">
              <Row>
                <Col sm={12} md={6} lg={6}>
                    <img className="courseImg" src={course} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h5 className="courseTitle">Web Development</h5>
                    <p className="courseDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/courseDetail" className="courseDetails float-start">Details</Link>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={6} className="p-2">
              <Row>
                <Col sm={12} md={6} lg={6}>
                    <img className="courseImg" src={course} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h5 className="courseTitle">Web Development</h5>
                    <p className="courseDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/courseDetail" className="courseDetails float-start">Details</Link>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={6} className="p-2">
              <Row>
                <Col sm={12} md={6} lg={6}>
                    <img className="courseImg" src={course} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h5 className="courseTitle">Web Development</h5>
                    <p className="courseDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to="/courseDetail" className="courseDetails float-start">Details</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
        )
    }
}
