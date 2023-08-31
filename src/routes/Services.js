import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import Servicesimg from '../components/Services/Servicesimg'
import Servicescon from '../components/Services/Servicescon'
import LoadingComponent from './LoadingComponent';

const Services = () => {
  return (
    <div>
      <LoadingComponent>
        <Navbar/>
        <Servicesimg/>
        <Servicescon/>
        <Testimonial/>
        <Pricing/>
        <Footer/>
      </LoadingComponent>
    </div>
  )
}

export default Services
