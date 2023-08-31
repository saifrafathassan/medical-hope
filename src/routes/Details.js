import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Detailscon from '../components/Details/Detailscon'
import LoadingComponent from './LoadingComponent';

const Details = () => {
  return (
    <div>
      <LoadingComponent>
        <Navbar/>
        <Detailscon/>
        <Footer/>
      </LoadingComponent>
    </div>
  )
}

export default Details
