import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutimg from '../components/About/Aboutimg'
import Aboutcon from '../components/About/Aboutcon'
import LoadingComponent from './LoadingComponent';

const About = () => {
  return (
    <div>
      <LoadingComponent>
        <Navbar/>
        <Aboutimg/>
        <Aboutcon/>
        <Footer/>
      </LoadingComponent>
    </div>
  )
}

export default About
