import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription';

export default class PrivacyPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        <Fragment>
            <TopNavigation title="Privacy Policy" />
            <PageTop pageTitle="Privacy Policy" />
            <PrivacyDescription/>
            <Footer/>
        </Fragment>
    );
  }
}
