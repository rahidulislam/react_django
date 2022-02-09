import React, { Component, Fragment } from "react";
import { Col, Container, Row , Card,Button} from "react-bootstrap";
import image1 from '../../asset/images/image1.jpg'
import image2 from '../../asset/images/image2.jpg'
import image3 from '../../asset/images/image3.jpg'
import {Link} from 'react-router-dom';
export default class RecentProjects extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
        <h1 className="serviceMainTitle">Recent Projects</h1>
          <Row>
            <Col sm={12} md={6} lg={4} className="p-2">
              <Card className="projectCard">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">Card Title</Card.Title>
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
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">Card Title</Card.Title>
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
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">Card Title</Card.Title>
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
