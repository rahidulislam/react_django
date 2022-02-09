import React, { Component, Fragment } from "react";
import { Col, Container, Card, Button, Row } from "react-bootstrap";
import image1 from '../../asset/images/image1.jpg';
import {Link} from 'react-router-dom';
export default class AllProjects extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link to="/projectDetail" className="projectBtn">Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link to="/projectDetail" className="projectBtn">Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Card Title
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link to="/projectDetail" className="projectBtn">Details</Link></Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
