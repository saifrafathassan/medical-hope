import React, { useState } from 'react'
import {FaAngleLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Fimg from '../assets/blog/01.jpg'
import Fimg2 from '../assets/blog/02.jpg'
import Fimg3 from '../assets/blog/03.jpg'


const Fqs = () => {
  const [activeText, setActiveText] = useState(null)

  const handleClick = (textNumber) => {
    if (activeText === textNumber) {
      setActiveText(null); // if the clicked text is already active, deactivate it
    } else {
      setActiveText(textNumber); // otherwise, activate the clicked text
    }
  }

  return (
    <div className='w-full h-full py-20 md:px-0 px-2'>
        <div className='fqs border-t mt-32 flex flex-wrap justify-center w-full lg:mx-auto lg:max-w-[75%]'>
          <div className='pt-32 w-full md:w-auto px-2'>
            <div>
              <h1 className='text-5xl pb-12'><span className='font-bold text-main'>Tips &</span> Tricks</h1>
                <div className='flex items-center gap-5 p-4 border-b'>
                <div className='image-container'>
                  <img className='image' src={Fimg} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <Link onClick={() => window.scrollTo(0,0)} to='/details'><h1 className='md:text-2xl w-[200px] md:w-[300px] hover:text-main duration-300'>How to cleaning exterior glasses secure & bright</h1></Link>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
                <div className='flex items-center gap-5 p-4 border-b'>
                <div className='image-container'>
                  <img className='image' src={Fimg2} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <Link onClick={() => window.scrollTo(0,0)} to='/details'><h1 className='md:text-2xl w-[200px] md:w-[400px] hover:text-main duration-300'>Your building look alway modern and shiny more with Clenora</h1></Link>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
                <div className='flex items-center gap-5 p-4'>
                <div className='image-container'>
                  <img className='image' src={Fimg3} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <Link onClick={() => window.scrollTo(0,0)} to='/details'><h1 className='md:text-2xl w-[200px] md:w-[300px] hover:text-main duration-300'>Notes When vacuuming in the house</h1></Link>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-32 w-full md:w-[750px] px-2'>
            <h1 className='text-5xl pb-12 font-bold text-main'>FAQs</h1>
            <div className='max-w-full'>
              <div className='flex flex-col mx-auto py-3'>
              <h1 onClick={() => handleClick(1)} className={activeText === 1 ? 'text-main duration-300 flex justify-between items-center lg:text-[18px] font-bold cursor-pointer' : 'flex justify-between items-center lg:text-[18px] font-bold cursor-pointer'}>Can I Get A Divorce Without A Consultant{activeText === 1 ? <FaAngleLeft size={25} className='-rotate-90 duration-300'/> : <FaAngleLeft size={25} className='duration-300'/>}</h1>
              <div className={`div ${activeText === 1 ? 'show' : 'div'}`}>
                  <p className='leading-6 text-center text-[15px] text-[#999] py-5 w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur elit lacinia ornare. In volutpat rutrum molestie. Vivamus efficitur orci, ac gravida eros bibendum non. Nullam auctor varius fer vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
              </div>
              </div>
              <div className='flex flex-col mx-auto py-3'>
              <h1 onClick={() => handleClick(2)} className={activeText === 2 ? 'text-main duration-300 flex justify-between items-center lg:text-[18px] font-bold cursor-pointer' : 'flex justify-between items-center lg:text-[18px] font-bold cursor-pointer'}>I Have A Technical Problem Or Support Issue I Need Resolved, Who Do I Email?{activeText === 2 ? <FaAngleLeft size={25} className='-rotate-90 duration-300'/> : <FaAngleLeft size={25} className='duration-300'/>}</h1>
              <div className={`div ${activeText === 2 ? 'show' : 'div'}`}>
                  <p className='leading-6 text-center text-[15px] text-[#999] py-5 w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur elit lacinia ornare. In volutpat rutrum molestie. Vivamus efficitur orci, ac gravida eros bibendum non. Nullam auctor varius fer vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
              </div>
              </div>
              <div className='flex flex-col mx-auto py-3'>
              <h1 onClick={() => handleClick(3)} className={activeText === 3 ? 'text-main duration-300 flex justify-between items-center lg:text-[18px] font-bold cursor-pointer' : 'flex justify-between items-center lg:text-[18px] font-bold cursor-pointer'}>What Other Services Are You Compatible With?{activeText === 3 ? <FaAngleLeft size={25} className='-rotate-90 duration-300'/> : <FaAngleLeft size={25} className='duration-300'/>}</h1>
              <div className={`div ${activeText === 3 ? 'show' : 'div'}`}>
                  <p className='leading-6 text-center text-[15px] text-[#999] py-5 w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur elit lacinia ornare. In volutpat rutrum molestie. Vivamus efficitur orci, ac gravida eros bibendum non. Nullam auctor varius fer vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
              </div>
              </div>
              <div className='flex flex-col mx-auto py-3'>
              <h1 onClick={() => handleClick(4)} className={activeText === 4 ? 'text-main duration-300 flex justify-between items-center lg:text-[18px] font-bold cursor-pointer' : 'flex justify-between items-center lg:text-[18px] font-bold cursor-pointer'}>Are You Hiring?{activeText === 4 ? <FaAngleLeft size={25} className='-rotate-90 duration-300'/> : <FaAngleLeft size={25} className='duration-300'/>}</h1>
              <div className={`div ${activeText === 4 ? 'show' : 'div'}`}>
                  <p className='leading-6 text-center text-[15px] text-[#999] py-5 w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur elit lacinia ornare. In volutpat rutrum molestie. Vivamus efficitur orci, ac gravida eros bibendum non. Nullam auctor varius fer vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Fqs

