import React from 'react'

const Contactcon = () => {
  return (
    <div className='h-full w-full pt-32 bg-[#e9edee]'>
        <main className='flex flex-col items-center justify-center px-6'>
            <div className='bg-main items-start flex flex-wrap justify-between w-full lg:w-[1100px] h-full py-32 px-20'>
                <div className="frist-col text-white text-[15px]">
                    <h1 className='text-3xl md:text-5xl pb-8'><span className='font-bold'>Brooklyn,</span> New York</h1>
                    <p>849 Diamond Str, 07th Floor, NY 10012, New York,</p>
                    <p className='pb-6'>United State America</p>
                    <p><span className='text-[#99cccc]'>Email:</span> infor@hope.com</p>
                </div>
                <div className="frist-col text-white">
                        <h1 className='font-bold'>CALL DIRECTLY</h1>
                        <p className='text-2xl md:text-5xl pb-8 pt-3'>+1 212-226-3126</p>
                        <p className='text-[#99cccc]'>Brand Offices:</p>
                        <p>Allentown PA | Allanta, GA | Chicago, lL | Dallas, TX</p>
                        <p>Edison, NJ | Houstion, TX</p>
                    <div className='pt-6'>
                        <p className='text-[#99cccc]'>Work Hours:</p>
                        <p>Mon - Sat: 8.00 - 17.00, Sunday closed</p>                        
                    </div>
                </div>
            </div>
            <div className='py-32 flex flex-col gap-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-[#999] pb-2 lg:pb-4'>CONTACT</p>
                    <h1 className='text-2xl lg:text-5xl font-light'><span className='text-main font-bold'>We Alway Ready</span> To Help You</h1>
                </div>
                <div className='bg-white md:w-[600px] lg:w-[1100px] h-full py-20 px-20'>
                    <form className='flex flex-col lg:flex-row gap-5 h-full w-full'>
                        <input type="text" placeholder='Your Name' className='border py-3 px-14'/>
                        <input type="text" placeholder='Email Address' className='border py-3 px-14'/>
                        <input type="text" placeholder='Subject (optional)' className='border py-3 px-14'/>
                    </form>
                    <div className='pt-12'>
                        <textarea className='border w-full h-[200px] p-4' type="messege" placeholder='Wirte your message here' />
                    </div>
                    <div className='items-center text-center pt-5'>
                        <button type='submit' className='bg-main py-5 px-10 font-bold text-white duration-300 hover:bg-black'>SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Contactcon
