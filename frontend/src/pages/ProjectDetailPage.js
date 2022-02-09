import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import Footer from '../components/Footer/Footer';



export default class ProjectDetailPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        <Fragment>
            <TopNavigation title="Project Details"/>
            <PageTop pageTitle="Project Name"/>
            <ProjectDetail/>
            <Footer/>
        </Fragment>
    );
  }
}
