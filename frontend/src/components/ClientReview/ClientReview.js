import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container,Row } from 'react-bootstrap';
import rahidulImg from '../../asset/images/rahidul.jpg';

export default class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container className='text-center'>
                <h1 className="serviceMainTitle">Client Says</h1>
                <Slider {...settings}>
                    <div>
                        <Row className='justify-content-center'>
                            <Col sm={12} md={6} lg={6}>
                                <img className='circleImg' src={rahidulImg} />
                                <h5 className='serviceName'>Web Development</h5>
                                <p className='serviceDescription'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='justify-content-center'>
                            <Col sm={12} md={6} lg={6}>
                                <img className='circleImg' src={rahidulImg} />
                                <h5 className='serviceName'>Web Development</h5>
                                <p className='serviceDescription'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='justify-content-center'>
                            <Col sm={12} md={6} lg={6}>
                                <img className='circleImg' src={rahidulImg} />
                                <h5 className='serviceName'>Web Development</h5>
                                <p className='serviceDescription'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                            </Col>
                        </Row>
                    </div>
                    
                </Slider>
                </Container>
            </Fragment>
        )
    }
}
