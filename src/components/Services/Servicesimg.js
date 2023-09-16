import React from 'react'
import Bgimage from '../../assets/Untitled-2.jpg'

const Servicesimg = () => {
  return (
    <div className='relative h-[400px] lg:h-[818px] w-full overlay' style={{background: `url(${Bgimage})`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="text text-white absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col max-w-[800px] text-center" >
               <p className="leading-10 md:text-[18px]">BEST SOLUTION FOR YOUR HEATLH</p>
               <h1 className="text-4xl lg:text-[80px] font-extrabold lg:leading-[95px] pb-6">Services <span className="font-light">That<br/>We Provide</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Servicesimg
