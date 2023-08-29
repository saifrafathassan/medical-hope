import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import Servicesimg from '../components/Services/Servicesimg'
import Servicescon from '../components/Services/Servicescon'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Servicesimg/>
      <Servicescon/>
      <Testimonial/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Services
