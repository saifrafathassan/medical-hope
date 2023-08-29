import React from 'react'
import Bgimage from '../../assets/photos/about-bg1.jpg'

const Aboutimg = () => {
  return (
    <div className='relative h-[400px] lg:h-[675px] w-full' style={{background: `url(${Bgimage})`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="text text-white absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col max-w-[800px] text-center" >
               <p className="leading-10 md:text-[18px]">HOPE MEDICAL CENTER</p>
               <h1 className="text-4xl lg:text-[80px] font-extrabold lg:leading-[95px] pb-6">About <span className="font-light">Hope</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Aboutimg
