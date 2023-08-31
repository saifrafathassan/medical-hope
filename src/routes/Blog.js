import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blogcon from '../components/Blog/Blogcon'
import LoadingComponent from './LoadingComponent';

const Blog = () => {
  return (
    <div>
      <LoadingComponent>
        <Navbar/>
        <Blogcon/>
        <Footer/>
      </LoadingComponent>
    </div>
  )
}

export default Blog
