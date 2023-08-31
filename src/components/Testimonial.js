import React, {  useRef, useEffect,useState  } from "react";
import Slider from "react-slick";
import TesImg from '../assets/photos/testimonial-bg1.jpg'
import TesImg1 from '../assets/testimonial/01.jpg'
import TesImg2 from '../assets/testimonial/02.jpg'
import Bimg from '../assets/brand-logo/01.png'
import Bimg2 from '../assets/brand-logo/02.png'
import Bimg3 from '../assets/brand-logo/03.png'
import Bimg4 from '../assets/brand-logo/04.png'
import Bimg5 from '../assets/brand-logo/05.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

const TesImages = [
  { image: TesImg1, name: 'Steven Gerrard' },
  { image: TesImg2, name: 'Kristina Castle' }
];

const Testimonial = () => {
  const sliderRef = useRef();
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

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

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    arrows: true,
}

  return (
    <div className='w-full overflow-hidden h-screen relative top-[-40px] md:px-0 px-3' style={{background: `url(${TesImg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div  ref={sectionRef} style={{opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(60px)', transition: 'opacity 2s, transform 2s'}}>
            <div className='flex flex-col text-center items-center py-32'>
                <p className='text-[#999] pb-6'>TESTIMONIAL</p>
                <h1 className='text-5xl font-light'><span className='text-main font-bold'>Trusted</span> From Clients</h1>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {TesImages.map((img, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center">
                        <img className='rounded-full' src={img.image} alt="" />
                    </div>
                    <div className="flex justify-around gap-10 items-center text-center pt-12">
                        <p className="w-[300px] md:w-[450px] lg:w-[900px] text-[15px] lg:text-3xl">
                            “It’s been an absolute pleasure to work with hope,
                            <br/>their response to our brief exceeded
                            expectations and the execution was efficient,
                            professional and very reassuring. I’d fully recommend
                            theme.”
                        </p>
                    </div>
                    <div className="flex gap-5 flex-col items-center py-12">
                        <h2 className="text-2xl font-bold text-main">{img.name}</h2>
                        <p className="text-[#707070]">Golden Lotus Apartment, Brooklyn, USA</p>
                    </div>
                    <div className="border-t hidden flex-row justify-center gap-10 lg:gap-32 md:flex">
                        <div className="opacity-50 hover:opacity-100 duration-300 pt-12 cursor-pointer">
                            <img src={Bimg} alt="" />
                        </div>
                        <div className="opacity-50 hover:opacity-100 duration-300 pt-12 cursor-pointer">
                            <img src={Bimg2} alt="" />
                        </div>
                        <div className="opacity-50 hover:opacity-100 duration-300 pt-12 cursor-pointer">
                            <img src={Bimg3} alt="" />
                        </div>
                        <div className="opacity-50 hidden lg:block hover:opacity-100 duration-300 pt-12 cursor-pointer">
                            <img src={Bimg4} alt="" />
                        </div>
                        <div className="opacity-50 hidden lg:block hover:opacity-100 duration-300 pt-12 cursor-pointer">
                            <img src={Bimg5} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
            <div className="h-full top-[-250px] md:top-[-350px] relative z-[200] w-full flex md:px-12 justify-between">
                <div className="cursor-pointer hover:text-main duration-300" onClick={() => sliderRef.current.slickPrev()}><IoIosArrowBack size={30}/></div>
                <div className="cursor-pointer hover:text-main duration-300" onClick={() => sliderRef.current.slickNext()}><IoIosArrowForward size={30}/></div>
            </div>
         </div>
    </div>
  )
}

export default Testimonial
