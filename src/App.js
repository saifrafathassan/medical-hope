import React, { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom'
const Home = React.lazy(() => import('./routes/Home'));
const Services = React.lazy(() => import('./routes/Services'));
const Blog = React.lazy(() => import('./routes/Blog'));
const About = React.lazy(() => import('./routes/About'));
const Contact = React.lazy(() => import('./routes/Contact'));
const Details = React.lazy(() => import('./routes/Details'));



function App() {
  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/services' element={<Services/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/blog' element={<Blog/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/about' element={<About/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/contact' element={<Contact/>} scroll={() => window.scrollTo(0, 0)}/>
        <Route path='/details' element={<Details/>} scroll={() => window.scrollTo(0, 0)}/>
      </Routes>
    </Suspense>
  );
}

export default App;
