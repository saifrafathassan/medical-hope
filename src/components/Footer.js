import React from 'react'
import { Link } from 'react-router-dom'
import { HiMail} from 'react-icons/hi'
import { FiRss} from 'react-icons/fi'
import { BiLogoFacebook, BiLogoPinterestAlt} from 'react-icons/bi'
import { MdLocationPin, MdKeyboardDoubleArrowRight, MdArrowRightAlt} from 'react-icons/md'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiOutlineDribbble} from 'react-icons/ai'
import { FaPhoneAlt} from 'react-icons/fa'
import Svg2 from '../assets/logo-dark.png'

const Footer = () => {
  return (
    <div className='py-12 w-full'>
        <footer className='my-10 pb-12 pt-32 border-b border-t lg:mx-auto w-full md:w-[800px] lg:w-[75%]'>
          <main className='flex flex-wrap justify-center gap-10'>
            <div className='firstcol px-2'>
              <div className='flex flex-col border-b md:w-[300px] pb-12 gap-10'>
                <div>
                  <img src={Svg2} alt="" />
                </div>
                <p className='text-[#707070]'>Sed elit quam, iaculis sed semper sit amet udin vitae nibh at magna akal semperFusce.</p>
              </div>
              <div className='py-4 flex-col flex gap-3'>
                <div className='flex items-center  gap-5 w-[300px] border-b pb-4 text-[#999] hover:text-main duration-300 cursor-pointer'>
                  <li><MdLocationPin size={25}/></li>
                  <li>69 Halsey St, New York, Ny 10002, United States.</li>
                </div>
                <div className='flex items-center gap-5 w-[300px] border-b pb-4 text-[#999] hover:text-main duration-300 cursor-pointer'>
                  <li><HiMail size={25}/></li>
                  <li>hello@yourdomain.com</li>
                </div>
                <div className='flex items-center gap-5 w-[300px] text-[#999] hover:text-main duration-300 cursor-pointer'>
                  <li><FaPhoneAlt size={25}/></li>
                  <li>(0091) 8547 632521</li>
                </div>
              </div>
            </div>
            <div className='seccol w-full md:w-[200px] px-2'>
              <div className='pb-12'>
                <h1 className='text-2xl font-bold'>POPULAR TAGS</h1>
              </div>
                <ul className='flex flex-wrap gap-2'>
                  <li className='text-[#999] bg-[#f3f3f3] py-2 px-3 hover:bg-main hover:text-white duration-300'>Medical</li>
                  <li className='text-[#999] bg-[#f3f3f3] py-2 px-3 hover:bg-main hover:text-white duration-300'>Health</li>
                  <li className='text-[#999] bg-[#f3f3f3] py-2 px-3 hover:bg-main hover:text-white duration-300'>Life</li>
                  <li className='text-[#999] bg-[#f3f3f3] py-2 px-3 hover:bg-main hover:text-white duration-300'>Clean</li>
                  <li className='text-[#999] bg-[#f3f3f3] py-2 px-3 hover:bg-main hover:text-white duration-300'>Twitter</li>
                </ul>
            </div>
            <div className='thrcol w-full md:w-[300px] px-2'>
              <div className='pb-12'><h1 className='text-2xl font-bold'>RECENT POSTS</h1></div>
              <ul>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><li className='border-b text-[#707070] py-3 flex items-center gap-2 duration-300 hover:text-black'><MdKeyboardDoubleArrowRight/>Lorem Ispum dolor sit amet putilor</li></Link>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><li className='border-b text-[#707070] py-3 flex items-center gap-2 duration-300 hover:text-black'><MdKeyboardDoubleArrowRight/>Medical is all about quality.</li></Link>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><li className='border-b text-[#707070] py-3 flex items-center gap-2 duration-300 hover:text-black'><MdKeyboardDoubleArrowRight/>Is your website user friendly ?</li></Link>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><li className='border-b text-[#707070] py-3 flex items-center gap-2 duration-300 hover:text-black'><MdKeyboardDoubleArrowRight/>Ai offer weekly updates & more.</li></Link>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><li className='border-b text-[#707070] py-3 flex items-center gap-2 duration-300 hover:text-black'><MdKeyboardDoubleArrowRight/>Customer should love your web.</li></Link>
                <Link onClick={() => window.scrollTo(0,0)} to='/details'><li className='border-b text-[#707070] py-3 flex items-center gap-2 duration-300 hover:text-black'><MdKeyboardDoubleArrowRight/>Your site smooth and stunning.</li></Link>
              </ul>
            </div>
            <div className="forcol w-full md:w-[300px] px-2">
              <div className='pb-12 flex flex-col gap-7'>
                <h1 className='text-2xl font-bold'>NEWSLETTER</h1>
                <p className='text-[#707070] pt-7'>Sign up for our mailing list to get latest updates and offers.</p>
                <form className='flex items-center text-center border-b pb-8'>
                  <input className='bg-[#f8f8f8] py-3 px-4' type="email" placeholder='Enter your email'/>
                  <button className='bg-main py-2 px-3 hover:bg-black duration-300'><MdArrowRightAlt size={25} color='white'/></button>
                </form>
                <div className="cons">
                    <ul className='flex gap-3 px-3'>
                      <li className='hover:text-main text-[#707070] duration-300'><AiOutlineTwitter size={25}/></li>
                      <li className='hover:text-main text-[#707070] duration-300'><AiOutlineGooglePlus size={25}/></li>
                      <li className='hover:text-main text-[#707070] duration-300'><BiLogoPinterestAlt size={25}/></li>
                      <li className='hover:text-main text-[#707070] duration-300'><FiRss size={25}/></li>
                      <li className='hover:text-main text-[#707070] duration-300'><BiLogoFacebook size={25}/></li>
                      <li className='hover:text-main text-[#707070] duration-300'><AiOutlineDribbble size={25}/></li>
                    </ul>
                </div>
              </div>
            </div>
          </main>
        </footer>
        <div className='text-center font-bold text-[#999]'>© 2023 <span className='text-main'>HOPE</span>. Made with Love by Saif Rafat</div>
    </div>
  )
}

export default Footer
