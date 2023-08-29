import { GiMicroscope } from 'react-icons/gi';
import { FaWheelchair, FaUserMd, FaAmbulance, FaBrain } from 'react-icons/fa';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md'; 
import { RiStethoscopeFill } from 'react-icons/ri'; 
import React, {  useRef, useState, useEffect} from "react";
import Img from '../assets/photos/doctor-01.jpg'
import TeamImg from '../assets/team/01.jpg'
import TeamImg2 from '../assets/team/02.jpg'
import TeamImg3 from '../assets/team/03.jpg'

const Content = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsCardVisible(true);
        window.removeEventListener('scroll', handleScroll); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
        <div className="content h-full w-full items-center flex flex-col md:flex-row justify-center gap-10 py-32 px-3">
            <div className="flex justify-between w-full items-center border-b lg:w-[400px] ">
              <div className="pb-6">
                <h1 className="text-2xl font-bold">DIAGNOSE</h1>
                <p className="text-[#666]">Examination & Diagnosis</p>
              </div>
              <div className="pb-6 text-main"><RiStethoscopeFill size={60}/></div>
            </div>
            <div className="flex justify-between w-full items-center border-b lg:w-[400px]">
              <div className="pb-6">
                <h1 className="text-2xl font-bold">TREATMENT</h1>
                <p className="text-[#666]">Treatment of the disease</p>
              </div>
              <div className="pb-6 text-main"><FaBrain size={60}/></div>
            </div>
            <div className="flex justify-between w-full items-center border-b lg:w-[400px]">
              <div className="pb-6">
                <h1 className="text-2xl font-bold">CARE HEALTHY</h1>
                <p className="text-[#666]">Care and recuperation</p>
              </div>
              <div className="pb-6 text-main"><FaWheelchair size={60}/></div>
            </div>
        </div>
        <div ref={sectionRef} className='my-12 md:my-0 hero items-start flex flex-col h-screen justify-start ml-[315px]' style={{background: `url(${Img})`, backgroundPosition: 'center right', backgroundRepeat: 'no-repeat', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(60px)', transition: 'opacity 2s, transform 2s'}}>
            <div className='pl-2 lg:pl-6'>
                <p className='text-[#999] pb-4 lg:pb-6'>WHY CHOOSE HOPE MEDICAL</p>
                <h1 className='text-3xl lg:text-5xl font-light'><span className='text-main font-bold'>The Best</span> For Your Health</h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 py-6 md:py-20 lg:pl-4 w-full lg:w-[900px]'>
                <div className='flex items-center gap-5'>
                    <div className='text-main'><BsFillClipboard2CheckFill size={70}/></div>
                    <div className='pt-6'>
                        <h1 className='font-bold text-[17px] pb-4'>MEDICAL COUNSELING</h1>
                        <p className='w-full md:w-[250px] text-[#707070]'>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='text-main'><FaUserMd size={70}/></div>
                    <div className='pt-6'>
                        <h1 className='font-bold text-[17px] pb-4'>MEDICAL COUNSELING</h1>
                        <p className='w-full md:w-[250px] text-[#707070]'>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='text-main'><GiMicroscope size={70}/></div>
                    <div className='pt-6'>
                        <h1 className='font-bold text-[17px] pb-4'>MEDICAL COUNSELING</h1>
                        <p className='w-full md:w-[250px] text-[#707070]'>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='text-main'><FaAmbulance size={70}/></div>
                    <div className='pt-6'>
                        <h1 className='font-bold text-[17px] pb-4'>MEDICAL COUNSELING</h1>
                        <p className='w-full md:w-[250px] text-[#707070]'>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='text-main'><MdBloodtype size={70}/></div>
                    <div className='pt-6'>
                        <h1 className='font-bold text-[17px] pb-4'>MEDICAL COUNSELING</h1>
                        <p className='w-full md:w-[250px] text-[#707070]'>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='text-main'><FaWheelchair size={70}/></div>
                    <div className='pt-6'>
                        <h1 className='font-bold text-[17px] pb-4'>MEDICAL COUNSELING</h1>
                        <p className='w-full md:w-[250px] text-[#707070]'>Lorem ipsum dolor sit amet, consect adipisicing elit vero. Donec ultri sollicitudin lacus</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-full gap-20 md:top-[-30px] py-12 md:py-0 book flex flex-col items-center justify-center'>
            <div className='relative md:top-[-120px] border border-primary '>
                <div className='book-container bg-white w-[350px] md:w-[700px] sm:w-[500px] lg:w-[1300px] '>
                    <div className='flex items-center text-center flex-col py-12'>
                        <p className='text-[#707070] pb-4'>WE ALWAY READY HELPS YOU</p>
                        <h1 className='text-3xl md:text-5xl font-light'><span className='text-main font-bold'>Book An</span> Appointment</h1>
                    </div>
                    <div className='flex gap-20 flex-col items-center justify-center py-12'>
                        <form className='flex flex-col lg:flex-row gap-20'>
                            <input className='border-b pb-4 w-full focus:border-black' type="text" placeholder='Enter your name'/>
                            <input className='border-b pb-4 w-full focus:border-black' type="email" placeholder='sample@gmail.com'/>
                            <input className='border-b pb-4 w-full focus:border-black' type="tel" placeholder='Phone'/>
                            <input className='border-b pb-4 w-full focus:border-black' type="text" placeholder='Date'/>
                        </form>
                        <div className='lg:w-[1030px] max-w-full'>
                            <textarea className='border-b w-full focus:border-black' name="message" placeholder='Your message here...' cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-12'>
                        <button className='px-[45px] py-[15px] bg-primary text-white font-bold hover:bg-black duration-300'>MAKE AN APPOINTMENT</button>
                    </div>
                </div>
            </div>
            <div ref={cardRef} style={{opacity: isCardVisible ? 1 : 0, transform: isCardVisible ? 'translateY(0)' : 'translateY(60px)', transition: 'opacity 2s, transform 2s'}} className='text-center h-full mb-14'>
                <div className='py-12'>
                    <p className='text-[#999] pb-5'>MEET OUR DOCOTS</p>
                    <h1 className='text-3xl md:text-5xl font-light'><span className='font-bold text-main'>Professional &</span> Enthusiastic</h1>
                </div>
                <div className='card-con gap-10 flex flex-col lg:flex-row justify-center items-center mx-auto'>
                    <div className='flex flex-col gap-5 card p-8 border bg-white w-[370px]'>
                        <div className='image-container'>
                            <img className='image' src={TeamImg} alt="" />
                        </div>
                        <h1 className='text-2xl hover:text-main duration-300'>Dr. Helen Willmore</h1>
                        <p>Lorem ipsum dolor sit, molestiae facilis deserunt! Dolores architecto nesciunt deserunt consequuntur magnam reprehenderit quam.</p>
                        <button className='hover:text-main duration-300'>READ MORE</button>
                    </div>
                    <div className='flex flex-col gap-5 card p-8 border bg-white w-[370px]'>
                        <div className='image-container'>
                            <img className='image' src={TeamImg2} alt="" />
                        </div>
                        <h1 className='text-2xl hover:text-main duration-300'>Dr. Robert David</h1>
                        <p>Lorem ipsum dolor sit, molestiae facilis deserunt! Dolores architecto nesciunt deserunt consequuntur magnam reprehenderit quam.</p>
                        <button className='hover:text-main duration-300'>READ MORE</button>
                    </div>
                    <div className='flex flex-col gap-5 card p-8 border bg-white w-[370px]'>
                        <div className='image-container'>
                            <img className='image' src={TeamImg3} alt="" />
                        </div>
                        <h1 className='text-2xl hover:text-main duration-300'>Dr. Kristina Castle</h1>
                        <p>Lorem ipsum dolor sit, molestiae facilis deserunt! Dolores architecto nesciunt deserunt consequuntur magnam reprehenderit quam.</p>
                        <button className='hover:text-main duration-300'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content
