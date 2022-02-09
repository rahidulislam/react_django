import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={12} lg={12}>
              <ul>
                <li>
                  Your item must be unused and in the same condition that you
                  received it.
                </li>
                <li>The item must be in the original packaging.</li>
                <li>
                  To complete your return, we require a receipt or proof of
                  purchase.
                </li>
                <li>
                  Only regular priced items may be refunded, sale items cannot
                  be refunded.
                </li>
                <li>
                  If the item in question was marked as a gift when purchased
                  and shipped directly to you, you will receive a gift credit
                  for the value of your return.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
