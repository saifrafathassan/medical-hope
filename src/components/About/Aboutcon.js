import React, { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'
import Modal from 'react-modal';
import Aimg from '../../assets/about/01.jpg'
import Aimg2 from '../../assets/about/02.jpg'
import Aimg3 from '../../assets/about/03.jpg'

const images = [Aimg, Aimg2, Aimg3];

const Aboutcon = () => {

const [modalIsOpen, setModalIsOpen] = useState(false);
const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const nextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  }

  const prevImage = () => {
    setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length);
  }

  return (
    <div className='w-full h-full py-32 md:px-0 px-2'>
      <main>
        <section className='about-content flex flex-col justify-center items-center'>
            <div className='w-full lg:w-[900px] px-2'>
                <h1 className='text-3xl md:text-4xl font-light w-full lg:w-[800px]'>We make digital products and help organistation big and small connect with their audience.</h1>
                <div className='flex flex-col gap-10 py-32 w-full'>
                    <h2 className='font-bold text-2xl'>SERVICES</h2>
                    <p className='text-[17px]'>It was a big, round room with a high arched roof, and the walls and ceiling and floor were covered with large emeralds set closely together.</p>
                    <p className='text-[#999] leading-7 text-md'>In a word, the whale was seized and sold, and his Grace the Duke of Wellington received the money. Thinking that viewed in some particular lights, the case might by a bare possibility in some small degree be deemed, under the circumstances, a rather hard one, an honest clergyman of the town addressed a note to his Grace.</p>
                </div>
                <div className='text-cols flex justify-between pb-20 w-full'>
                    <ul className='md:text-lg text-[13px] flex flex-col gap-2 md:gap-4'>
                        <li className='hover:text-main duration-300'>PSYCHIARTRY</li>
                        <li className='hover:text-main duration-300'>OPTHALMOLOGY</li>
                        <li className='hover:text-main duration-300'>CARDIOLOGY</li>
                        <li className='hover:text-main duration-300'>IMMUNOLOGY</li>
                    </ul>
                    <ul className='md:text-lg text-[13px] flex flex-col gap-2 md:gap-4'>
                        <li className='hover:text-main duration-300'>GASTROENTEROLOGY</li>
                        <li className='hover:text-main duration-300'>HEMATOLOGY</li>
                        <li className='hover:text-main duration-300'>ORTHOPEDICS</li>
                        <li className='hover:text-main duration-300'>PULMONARY</li>
                    </ul>
                    <ul className='md:text-lg text-[13px] flex flex-col gap-2 md:gap-4'>
                        <li className='hover:text-main duration-300'>ONCOLOGY</li>
                        <li className='hover:text-main duration-300'>PHYSIOTHERAPY</li>
                        <li className='hover:text-main duration-300'>DENTAL</li>
                        <li className='hover:text-main duration-300'>RHEUMATOLOGY</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <h2 className='font-bold text-2xl pb-12'>OUR CENTER</h2>
                    <p className='text-[#999] leading-7 text-md'>It was shaped like a chair and sparkled with gems, as did everything else. In the center of the chair was an enormous Head, without a body to support it or any arms or legs whatever.</p>
                </div>
            </div>
            <div className='about-images py-12'>
                <div className="first-row flex flex-wrap items-center justify-center gap-5 py-6" >
                    <img className='cursor-pointer about-img duration-300' src={Aimg} onClick={() => openModal(0)} alt="" />
                    <img className='cursor-pointer about-img duration-300' src={Aimg2} onClick={() => openModal(1)} alt="" />
                </div>
                <div>
                    <img className='cursor-pointer about-img duration-300' src={Aimg3} onClick={() => openModal(2)} alt="" />
                </div>
                <div className='pt-32 text-center md:text-start flex-wrap flex justify-center gap-10'>
                    <div className='w-[400px]'>
                        <h1 className='font-bold text-lg pb-8'>MELBOURNE</h1>
                         <p className='text-[#999] pb-2 text-[17px]'>258 New Design St, VIC 10000, Austria</p>
                         <p className='text-[#999] pb-2 text-[17px]'>+0900 8618 3725 69</p>
                         <p className='text-[#999] text-[17px]'>hello@hope.com</p>
                    </div>
                    <div className='w-[400px]'>
                        <h1 className='font-bold text-lg pb-8'>NEWYORK</h1>
                         <p className='text-[#999] pb-2 text-[17px]'>3rd Floor, 692 Orchard St, NY 10000, Newyork</p>
                         <p className='text-[#999] pb-2 text-[17px]'>+04200 4739 6899 6880</p>
                         <p className='text-[#999] text-[17px]'>office@hope.com</p>
                    </div>
                </div>
            </div>
            <Modal
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
            content: {
            display: 'flex',  
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            boxShadow: 'none',
            border: 'none',
            },
            overlay: {
            position: 'fixed',
            top: 0,
            left: 0, 
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1500'
            },
        }}
        >
  <button className='bg-black rounded-md py-2 px-3 text-gray-400 z-40' style={{position: 'absolute', top: '20px', left: '20px'}} onClick={closeModal}>
    <FaTimes size={30}/>
  </button>
  <div 
    style={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <button className='bg-black rounded-md py-1 px-1 text-gray-400' onClick={prevImage}>
      <IoMdArrowDropleft size={30}/>
    </button>
    <img className='w-[300px] md:w-[550px]' src={images[selectedImageIndex]} alt='/'/>
    <button className='bg-black rounded-md py-1 px-1 text-gray-400' onClick={nextImage}>
      <IoMdArrowDropright size={30}/>
    </button>
  </div>
            </Modal>
        </section>
      </main>
    </div>
  )
}

export default Aboutcon
