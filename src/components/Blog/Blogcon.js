import React from 'react'
import { Link } from 'react-router-dom'
import Blogimg from '../../assets/blog/m01.jpg'
import Blogimg2 from '../../assets/blog/m02.jpg'
import Blogimg3 from '../../assets/blog/m03.jpg'
import Blogimg4 from '../../assets/blog/m04.jpg'
import Blogimg5 from '../../assets/blog/m05.jpg'
import Blogimg6 from '../../assets/blog/s01.jpg'
import Blogimg7 from '../../assets/blog/s02.jpg'
import Blogimg8 from '../../assets/blog/s03.jpg'

const Blogcon = () => {
  return (
    <div className='h-full w-full py-32'>
      <main className='flex flex-wrap w-full justify-center items-start h-full gap-32'>
        <section className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
           <p className='text-[#999] pb-2 lg:pb-4'><Link className="hover:text-main" to='/'>HOME</Link> / BLOG</p>
           <h1 className='text-2xl lg:text-5xl font-light'><span className='text-main font-bold'>Latest From</span> Our Blog</h1>
            <div className='blog-container pt-32 px-2'>
                <div className='flex flex-col md:flex-row items-center gap-1 md:gap-5 py-8 border-b'>
                <div className='image-container'>
                  <img className='image' src={Blogimg} alt="" />
                </div>
                <div className='flex md:pb-12 flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-main'>BUSINESS</h1>
                    <h1 className='md:text-2xl md:w-[450px] hover:text-main duration-300'>Problems About Social Insurance For Truck Drivers</h1>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
                <div className='flex flex-col md:flex-row items-center gap-1 md:gap-5 py-8 border-b'>
                <div className='image-container'>
                  <img className='image' src={Blogimg2} alt="" />
                </div>
                <div className='flex md:pb-12 flex-col gap-4 text-center md:text-start items-center lg:items-start'>
                    <h1 className='text-main'>NEWS</h1>
                    <h1 className='md:text-2xl md:w-[450px] hover:text-main duration-300'>Payment Online -Things That You Know To Protect Your Money Before Perform A Checkout</h1>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
                <div className='flex flex-col md:flex-row items-center gap-1 md:gap-5 py-8 border-b'>
                <div className='image-container'>
                  <img className='image' src={Blogimg3} alt="" />
                </div>
                <div className='flex md:pb-12 flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-main'>BUSINESS</h1>
                    <h1 className='md:text-2xl md:w-[450px] hover:text-main duration-300'>5 Steps To Build Strategy Planning</h1>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
                <div className='flex flex-col md:flex-row items-center gap-1 md:gap-5 py-8 border-b'>
                <div className='image-container'>
                  <img className='image' src={Blogimg4} alt="" />
                </div>
                <div className='flex md:pb-12 flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-main'>TIPS & TRICKS</h1>
                    <h1 className='md:text-2xl md:w-[450px] hover:text-main duration-300'>5 Secrets To Coaching Your Employees To Greatness</h1>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
                <div className='flex flex-col md:flex-row items-center gap-1 md:gap-5 py-8'>
                <div className='image-container'>
                  <img className='image' src={Blogimg5} alt="" />
                </div>
                <div className='flex md:pb-12 flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-main'>NEWS</h1>
                    <h1 className='md:text-2xl md:w-[450px] hover:text-main duration-300'>Trend Of Consumer Market 2023</h1>
                    <p className='text-[#999]'>Sep 17th, 2023 by <span className='text-black'>Admin</span></p>
                </div>
              </div>
            </div>
        </section>
        <section className='flex flex-col pt-72 gap-32'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold text-lg'>SEARCH</h1>
                <input className='bg-[#f8f8f8] py-2 px-4' type="text" placeholder='Type'/>
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold text-lg'>CATEGORIES</h1>
                <p className='flex justify-between border-b py-1'>ALL <span>25</span></p>
                <p className='flex justify-between border-b py-1'>NEWS <span>12</span></p>
                <p className='flex justify-between border-b py-1'>BUSINESS <span>7</span></p>
                <p className='flex justify-between border-b py-1'>TIPS & TRICKS <span>4</span></p>
                <p className='flex justify-between border-b py-1'>OTHERS <span>2</span></p>
            </div>
            <div>
                <h1 className='font-bold text-lg'>RECENT POSTS</h1>
                <div className='flex items-center gap-5 py-8 border-b'>
                <div className='image-container'>
                  <img className='image' src={Blogimg6} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='w-[250px] hover:text-main duration-300'>5 Secrets To Coaching Your Employees To Greatness</h1>
                </div>
              </div>
                <div className='flex items-center gap-5 py-8 border-b'>
                <div className='image-container'>
                  <img className='image' src={Blogimg7} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='w-[250px] hover:text-main duration-300'>5 Secrets To Coaching Your Employees To Greatness</h1>
                </div>
              </div>
                <div className='flex items-center gap-5 py-8'>
                <div className='image-container'>
                  <img className='image' src={Blogimg8} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='w-[250px] hover:text-main duration-300'>5 Secrets To Coaching Your Employees To Greatness</h1>
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default Blogcon
