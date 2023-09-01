import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Services from './routes/Services'
import Blog from './routes/Blog'
import About from './routes/About'
import Contact from './routes/Contact'
import Details from './routes/Details'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/services' element={<Services/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/blog' element={<Blog/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/about' element={<About/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/contact' element={<Contact/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/details' element={<Details/>} scroll={() => window.scrollTo(0, 0)}/>
      </Routes>
  );
}

export default App;
