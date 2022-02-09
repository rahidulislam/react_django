import React, { Component, Fragment } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h5 className="serviceName">Quick Connect</h5>
              <Form>
                <Form.Group>
                  <Form.Label className="serviceDescription">Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">Message</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col sm={12} md={6} lg={6} >
              <h5 className="serviceName">Discussion</h5>
              <p className="serviceDescription">
                House-2, Line-7, Mirpur11, Dhaka
              </p>
              <p className="serviceDescription">
                <FontAwesomeIcon icon={faEnvelope} /> rahiseli@outlook.com
              </p>
              <p className="serviceDescription">
                <FontAwesomeIcon icon={faPhoneAlt} /> 01612061077
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
