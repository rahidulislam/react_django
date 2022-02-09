import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className='serviceName'> Who I am</h1>
                            <hr/>
                            <p className='serviceDescription'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                            <h1 className='serviceName'> My Mission</h1>
                            <hr/>
                            <p className='serviceDescription'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                            <h1 className='serviceName'> My Vission</h1>
                            <hr/>
                            <p className='serviceDescription'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
