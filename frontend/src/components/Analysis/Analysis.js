import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Bar, BarChart, ResponsiveContainer, XAxis, Tooltip} from 'recharts';

export default class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {Technology: 'Java', Projects: 100},
                {Technology: 'Kotlin', Projects: 40},
                {Technology: 'Sql', Projects: 90},
                {Technology: 'Bootstra', Projects: 95},
                {Technology: 'Jquery', Projects: 60},
                {Technology: 'React', Projects: 90},
                {Technology: 'Php', Projects: 100},
                {Technology: 'Angular', Projects: 65}
            ]
        }
    }
    
    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} >
                            <ResponsiveContainer width="100%" height="100%">
                            
                                <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify des'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
