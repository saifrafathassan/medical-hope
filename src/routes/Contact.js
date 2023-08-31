import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactcon from '../components/Contact/Contactcon'
import LoadingComponent from './LoadingComponent';

const Contact = () => {
  return (
    <div>
      <LoadingComponent>
        <Navbar/>
        <Contactcon/>
        <Footer/>
      </LoadingComponent>
    </div>
  )
}

export default Contact
