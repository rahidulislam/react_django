import React, { Component, Fragment } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react'

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  modalClose=()=> this.setState({show:false})
  modalOpen=()=> this.setState({show:true})
  
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col sm={12} md={12} lg={12} className="videoCard">
              <div>
                <h5 className="videoTitle">How I do</h5>
                <p className="videoDes">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here,
                </p>
                <p>
                  <FontAwesomeIcon
                    className="playBtn"
                    icon={faPlayCircle}
                    onClick={this.modalOpen}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
        
        <Modal.Body>
          <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <BigPlayButton position='center' />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.modalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </Fragment>
    );
  }
}
