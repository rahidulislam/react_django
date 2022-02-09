import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CourseDetail from '../components/CourseDetail/CourseDetail'
import Footer from '../components/Footer/Footer'
export default class CourseDetailPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
            <TopNavigation title="Course Detail"/>

            <CourseDetail/>
            <Footer/>
            </Fragment>
        );
    }
}