import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from 'react-bootstrap';


export default class TermsDescription extends Component {
  render() {
    return (
        <Fragment>
            <Container className="mt-5">
          <Row>
            <Col sm={12} md={12} lg={12}>
              <p className='serviceDescription'>
              If users can post content on your website or mobile app (create content and share it on your platform), you can remove any content they created if it infringes copyright. Your Terms and Conditions will inform users that they can only create and/or share content they own rights to. Similarly, if users can register for an account and choose a username, you can inform users that they are not allowed to choose usernames that may infringe trademarks, i.e. usernames like Google, Facebook, and so on.
              </p>
            </Col>
          </Row>
        </Container>
        </Fragment>
    );
  }
}
