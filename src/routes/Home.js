import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Content from '../components/Content';
import Testimonial from '../components/Testimonial';
import Fqs from '../components/Fqs';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import LoadingComponent from './LoadingComponent';

const Home = () => {
  return (
    <div>
      <LoadingComponent>
        <Navbar/>
        <Hero/>
        <Content/>
        <Testimonial/>
        <Pricing/>
        <Fqs/>
        <Footer/>
      </LoadingComponent>
    </div>
  )
}

export default Home
