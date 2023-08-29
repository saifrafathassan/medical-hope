import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Pricing = () => {
  return (
    <div className='max-w-full h-full pt-20'>
        <div className='flex flex-col justify-center items-center'>
           <p className='text-[#999] pb-2 lg:pb-4'>PRICING LIST</p>
           <h1 className='text-2xl lg:text-5xl font-light'><span className='text-main font-bold'>Protect</span> With Health Care Card</h1>
        </div>
        <div className='py-20 flex flex-wrap justify-center gap-5 '>
          <div className='flex flex-col gap-10 border w-[300px] p-[40px] tickt'>
              <div className='flex flex-col gap-5'>
                  <p className='text-[#999] text-1xl'>TRIAL</p>main
                  <h1 className='text-2xl pb-3'><span className='text-[#669900] text-3xl font-bold'>$5</span> / month</h1>
                  <p className='text-[#999] text-1xl'>Free with 14 days trial, then you can choose plan</p>
              </div>
              <div className='justify-between gap-8 flex flex-col border-t pt-6 h-full'> 
              <div className='flex flex-col gap-3'>
                  <h2 className='flex items-center gap-5 text-[18px]'><AiOutlineCheckCircle color='#669900'/> 1 Cleaner</h2>
                  <h2 className='flex items-center gap-5 text-[18px]'><AiOutlineCheckCircle color='#669900'/> Floor Cleaning</h2>
                  <h2 className='flex items-center gap-5 text-[18px]'><AiOutlineCheckCircle color='#669900'/> 2 Rooms</h2>
              </div>
                  <div>
                    <button className='text-main font-bold hover:bg-main duration-300 hover:text-white py-[11px] px-[30px] border border-main'>GET STARTED NOW</button>
                  </div>
              </div>
          </div>
          <div className='flex flex-col gap-10 border w-[300px] p-[40px]'>
              <div className='flex flex-col gap-5'>
                  <p className='text-[#999] text-1xl'>STANDARD</p>
                  <h1 className='text-2xl pb-3'><span className='text-[#669900] text-3xl font-bold'>$29</span> / month</h1>
                  <p className='text-[#999] text-1xl'>Free with 14 days trial, then you can choose plan</p>
              </div>
              <div className='justify-between gap-8 flex flex-col border-t pt-6 h-full'> 
              <div className='flex flex-col gap-3'>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>3 Cleaner</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>All House Cleaning</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>All Rooms</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>Equipment Cleaning</h2>
              </div>
                  <div>
                    <button className='text-main font-bold hover:bg-main duration-300 hover:text-white py-[11px] px-[30px] border border-main'>GET STARTED NOW</button>
                  </div>
              </div>
          </div>
          <div className='flex flex-col gap-10 border w-[300px] p-[40px] '>
              <div className='flex flex-col gap-5'>
                  <p className='text-[#999] text-1xl'>PREMIUM</p>
                  <h1 className='text-2xl pb-3'><span className='text-[#669900] text-3xl font-bold'>$59</span> / month</h1>
                  <p className='text-[#999] text-1xl'>Free with 14 days trial, then you can choose plan</p>
              </div>
              <div className='justify-between gap-8 flex flex-col border-t pt-6 h-full'> 
                <div className='flex flex-col gap-3'>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>2 Cleaner</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>Normal Clean</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>3 Rooms</h2>
                </div>
                  <div>
                    <button className='text-main font-bold hover:bg-main duration-300 hover:text-white py-[11px] px-[30px] border border-main'>GET STARTED NOW</button>
                  </div>
              </div>
          </div>
          <div className='flex flex-col gap-10 border w-[300px] p-[40px] '>
              <div className='flex flex-col gap-5'>
                  <p className='text-[#999] text-1xl'>TRIAL</p>
                  <h1 className='text-2xl pb-3'><span className='text-[#669900] text-3xl font-bold'>$5</span> / month</h1>
                  <p className='text-[#999] text-1xl'>Free with 14 days trial, then you can choose plan</p>
              </div>
              <div className='justify-between gap-8 flex flex-col border-t pt-6 h-full'> 
              <div className='flex flex-col gap-3'>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>5 Cleaner</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>All Office Cleaning</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>All Rooms</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>Equipments Cleaning</h2>
                  <h2 className='flex items-center gap-3 text-[18px]'><AiOutlineCheckCircle color='#669900'/>Exterior Glasses</h2>
              </div>
                  <div>
                    <button className='text-main font-bold hover:bg-main duration-300 hover:text-white py-[11px] px-[30px] border border-main'>GET STARTED NOW</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Pricing
