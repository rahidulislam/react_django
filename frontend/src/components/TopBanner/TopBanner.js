import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class TopBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subTitle: ''
        }
    }
    
    componentDidMount(){
        RestClient.getRequest(AppUrl.Home).then(result=>{
            this.setState({title: result[0]['title'], subTitle: result[0]['subtitle']})
        }).catch(error=>{
            this.setState({title:'???', subTitle:'???'})
        })
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTile">{this.state.subTitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;