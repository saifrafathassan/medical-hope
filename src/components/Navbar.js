import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import _ from 'lodash';
import Svg from '../assets/svg.png'
import { LuClock9} from 'react-icons/lu'
import { FaPhoneAlt, FaBars, FaTimes} from 'react-icons/fa'
import { HiMail} from 'react-icons/hi'
import { IoIosArrowUp} from 'react-icons/io'

const Navbar = () => {
const location = useLocation()
const [click, setClick] = useState(false)
const [activePath, setActivePath] = useState(location.pathname)
const [showButton, setShowButton] = useState(false);
const [isSticky, setIsSticky] = useState(false);
const handleClick = ()=> setClick(!click)

useEffect(() => {
  setActivePath(location.pathname)
}, [location])

useEffect(() => {
    const showThreshold = 500; 
    const hideThreshold = 400;

    const handleScroll = _.throttle(() => {
      if (window.scrollY > showThreshold) {
        setShowButton(true);
        setIsSticky(true);
      } else if (window.scrollY < hideThreshold) {
        setIsSticky(false);
        setShowButton(false);
      }
    }, 1000);
  
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-main pt-5 relative w-full overflow-hidden'>
      <nav className='nav'>
        <div className='sm:flex flex-row justify-between px-6 lg:px-12 lg:justify-center lg:gap-32 items-center'>
          <div className="icon">
                <li>
                  <img src={Svg} alt="/" />
                </li>
            </div>
          <ul className='text-white flex lg:gap-10 menu'>
            <li className='flex items-center gap-4'>
              <div className="icon">
                <LuClock9 size={25}/>
              </div>
              <div className="text flex flex-col">
                <span className='text-[#ccc] text-xs'>WORKING HOURS</span>
                <span className='text-[17px]'>MON - FRI: 9.00 - 21.00</span>
              </div>
            </li>
            <li className='flex items-center gap-4'>
              <div className="icon">
                <FaPhoneAlt size={25}/>
              </div>
              <div className="text flex flex-col">
                <span className='text-[#ccc] text-xs'>HOTLINE 24/7</span>
                <span className='text-[17px]'>+0962-58-58-258</span>
              </div>
            </li>
            <li className='flex items-center gap-4'>
              <div className="icon">
                <HiMail size={25}/>
              </div>
              <div className="text flex flex-col">
                <span className='text-[#ccc] text-xs'>EMAIL US</span>
                <span className='text-[17px]'>SUPPORT@CLENORA.COM.UK</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
        <div className={isSticky ? 'shadow-lg snav navbar sm:flex w-full bg-white justify-around lg:px-44 py-5 items-center' : 'snav z-30 sm:flex scrol justify-around lg:px-44 pt-6 items-center'}>
          <ul className={isSticky ? 'flex gap-6 text-black' : 'flex gap-6 text-white'}>
            {isSticky ? (<li><div className={activePath === '/' ? 'link text-main' : 'hover:text-main link'}><Link onClick={() => window.scrollTo(0,0)} to='/'>HOME</Link></div></li>) : (<li><div className={activePath === '/' ? 'link active' : 'link'}><Link to='/'>HOME</Link></div></li>)}
            {isSticky ? (<li><div className={activePath === '/services' ? 'link text-main' : 'hover:text-main link'}><Link onClick={() => window.scrollTo(0,0)} to='/services'>SERVICES </Link> </div></li>) : (<li><div className={activePath === '/services' ? 'link active' : 'link'}><Link to='/services'>SERVICES</Link></div></li>)}
            {isSticky ? (<li><div className={activePath === '/blog' ? 'link text-main' : 'hover:text-main link'}><Link onClick={() => window.scrollTo(0,0)} to='/blog'>BLOG</Link></div></li>) : (<li><div className={activePath === '/blog' ? 'link active' : 'link'}><Link to='/blog'>BLOG</Link></div></li>)}
            {isSticky ? (<li><div className={activePath === '/about' ? 'link text-main' : 'hover:text-main link'}><Link onClick={() => window.scrollTo(0,0)} to='/about'>ABOUT</Link></div></li>) : (<li><div className={activePath === '/about' ? 'link active' : 'link'}><Link to='/about'>ABOUT</Link></div></li>)}
            {isSticky ? (<li><div className={activePath === '/details' ? 'link text-main' : 'hover:text-main link'}><Link onClick={() => window.scrollTo(0,0)} to='/details'>DETAILS</Link></div></li>) : (<li><div className={activePath === '/details' ? 'link active' : 'link'}><Link to='/details'>DETAILS</Link></div></li>)}
            {isSticky ? (<li><div className={activePath === '/contact' ? 'link text-main' : 'hover:text-main link'}><Link onClick={() => window.scrollTo(0,0)} to='/contact'>CONTACT</Link></div></li>) : (<li><div className={activePath === '/contact' ? 'link active' : 'link'}><Link to='/contact'>CONTACT</Link></div></li>)}
          </ul>
            <div className="btn">
              <Link to='/' ><button className='py-[15px] px-[30px] bg-primary text-white hover:bg-black duration-300 font-bold'>BOOK AN APPOINTMENT</button></Link>
            </div>
        </div> 
        {/* moblie menu */}
        <div className='h-full w-full py-3 px-8 sm:hidden flex items-center justify-between'>
            <div className="icon pb-2">
                <li>
                  <img src={Svg} alt="/" />
                </li>
            </div>
            <div className='px-2'>
              <div onClick={handleClick} className='md:hidden z-50 relative'>
                {click ? (<FaTimes className='text-black' size={25}/>) : (<FaBars className='text-white' size={25}/>)}
              </div>
              <div onClick={handleClick}>
              <ul className={click ? 'moblie' : 'hidden moblie absolute left-[-100]'}>
                <li className={activePath === '/' ? 'text-2xl text-main' : 'text-[18px]'}><Link to='/'>HOME</Link></li>
                <li className={activePath === '/services' ? 'text-2xl text-main' : 'text-[18px]'}><Link to='/services'>SERVICES</Link></li>
                <li className={activePath === '/blog' ? 'text-2xl text-main' : 'text-[18px]'}><Link to='/blog'>BLOG</Link></li>
                <li className={activePath === '/about' ? 'text-2xl text-main' : 'text-[18px]'}><Link to='/about'>ABOUT</Link></li>
                <li className={activePath === '/details' ? 'text-2xl text-main' : 'text-[18px]'}><Link to='/details'>DETAILS</Link></li>
                <li className={activePath === '/contact' ? 'text-2xl text-main' : 'text-[18px]'}><Link to='/contact'>CONTACT</Link></li>
                <div className="btn">
                   <button className='py-[15px] px-[30px] bg-primary text-white hover:bg-black duration-300'>BOOK AN APPOINTMENT</button>
                </div>
              </ul>
              </div>
            </div>
        </div>
        {showButton && (
        <button className='bg-primary flex justify-center items-center h-[60px] w-[60px] fixed right-0 bottom-0 mb-[40px] mr-[40px] z-[1299] hover:bg-black duration-300' onClick={scrollToTop}>
          <IoIosArrowUp color='white' size={25}/>
        </button>
      )}
    </div>
  )
}

export default Navbar
