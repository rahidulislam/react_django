import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../asset/images/code-svgrepo-com.svg';
import mobileLogo from '../../asset/images/mobile-svgrepo-com.svg';
import graphicLogo from '../../asset/images/graphic-design-svgrepo-com.svg';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laboriosam laborum
                                    molestiae non omnis quam repellendus, ullam vel! Accusamus assumenda debitis
                                    distinctio, earum et eveniet harum illum maiores sunt voluptate?</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobileLogo}/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, dolorem esse est hic
                                    iusto labore   libero nemo officiis optio placeat quae velit vero voluptas
                                    voluptates, voluptatibus. Minima, quia.</p>
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard text-center">
                                <img src={graphicLogo}/>
                                <h2 className="serviceName">Graphic Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolorem ipsum
                                    iste, maiores molestias nihil omnis ratione totam! Atque consequuntur dolorem iure,
                                    molestias perspiciatis quasi ratione reprehenderit sed ullam.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;