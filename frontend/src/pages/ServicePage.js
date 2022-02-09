import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="My Service" />
                <Services/>
                <ContactSection/>
                <Footer/>

            </Fragment>
        )
    }
}
