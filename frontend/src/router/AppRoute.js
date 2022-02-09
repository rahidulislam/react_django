import React, { Component, Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CoursesPage from '../pages/CoursesPage'
import HomePage from '../pages/HomePage'
import PrivacyPage from '../pages/PrivacyPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import ProjectsPage from '../pages/ProjectsPage'
import RefundPage from '../pages/RefundPage'
import ServicePage from '../pages/ServicePage'
import TermsPage from '../pages/TermsPage'
import CourseDetailPage from '../pages/CourseDetailPage'

export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route end path="/" element={<HomePage/>} />
                    <Route end path="/service" element={<ServicePage/>} />
                    <Route end path="/course" element={<CoursesPage/>} />
                    <Route end path="/portfolio" element={<ProjectsPage/>} />
                    <Route end path="/contact" element={<ContactPage/>} />
                    <Route end path="/about" element={<AboutPage/>} />
                    <Route end path="/refund" element={<RefundPage/>} />
                    <Route end path="/terms" element={<TermsPage/>} />
                    <Route end path="/privacy" element={<PrivacyPage/>} />
                    <Route end path="/projectDetail" element={<ProjectDetailPage/>} />
                    <Route end path="/courseDetail" element={<CourseDetailPage/>} />
                </Routes>
            </Fragment>
        )
    }
}
