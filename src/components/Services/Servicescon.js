import React from 'react'
import { Link } from 'react-router-dom'
import { GiMicroscope } from 'react-icons/gi'; 
import { FaBrain,FaTooth } from 'react-icons/fa';
import { ImEye,ImLab } from 'react-icons/im';
import { BsFillHeartPulseFill,BsCapsulePill } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md'; 

const Servicescon = () => {
  return (
    <div className='h-full py-20 w-full'>
       <div className="h-full w-full pb-12">
        <div className='flex flex-col justify-center items-center py-12'>
           <p className='text-[#999] pb-2 lg:pb-4'>OUR SERVICES</p>
           <h1 className='text-2xl lg:text-5xl font-light'><span className='text-main font-bold'>Best Solution</span> For Your Health</h1>
        </div>
        <div className='flex flex-row flex-wrap mx-auto max-w-[1700px] services-content items-center justify-center'>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><FaBrain size={50}/></li>
                <h1 className='font-bold text-[20px]'>Psychiatry</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><ImEye size={50}/></li>
                <h1 className='font-bold text-[20px]'>Opthalmology</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><BsFillHeartPulseFill size={50}/></li>
                <h1 className='font-bold text-[20px]'>Cardiology</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><GiMicroscope size={50}/></li>
                <h1 className='font-bold text-[20px]'>Immumnology</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><MdBloodtype size={50}/></li>
                <h1 className='font-bold text-[20px]'>Hematology</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><ImLab size={50}/></li>
                <h1 className='font-bold text-[20px]'>Laboratory</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><BsCapsulePill size={50}/></li>
                <h1 className='font-bold text-[20px]'>Oncology</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
            <div className='flex flex-col gap-5 hover:border-t-main duration-300 hover:bg-[#e7e4c4de] items-start p-10 w-[350px] border'>
                <li className='pb-6 text-main'><FaTooth size={50}/></li>
                <h1 className='font-bold text-[20px]'>Dental</h1>
                <p className='text-[#999]'>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><button className='hover:text-main duration-300 text-black'>MORE</button></Link>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Servicescon
