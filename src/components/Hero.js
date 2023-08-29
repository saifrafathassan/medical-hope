import React, {  useRef, useState, useEffect} from "react";
import Slider from "react-slick";
import Slide1 from '../assets/slider/doctor-patient.jpg';
import Slide2 from '../assets/slider/slide2.jpg';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { image: Slide1 },
  { image: Slide2 }
];

const Hero = () => {
  const sliderRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
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
  }, [slides]);
  
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    beforeChange: (current, next) => setCurrentSlide(next),
}

  return (
    <div className="overflow-hidden">
     <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
          <div onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)} className={`slider z-[777] relative h-[400px] lg:h-[818px] w-full ${index === 0 ? 'overlay' : ''}`} style={{background: `url(${slide.image})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
            <div className="icons z-50 relative">
              <div onClick={() => sliderRef.current.slickPrev()} className={`bg-white left-arrow rounded-full p-2 duration-600 cursor-pointer hover:bg-black hover:text-white ${isHovered ? 'show-arrow-left' : ''}`}>
                <BsArrowLeftShort size={40} />
              </div>
              <div onClick={() => sliderRef.current.slickNext()} className={`bg-white right-arrow rounded-full p-2 duration-600 cursor-pointer hover:bg-black hover:text-white ${isHovered ? 'show-arrow-right' : ''}`}>
                <BsArrowRightShort size={40} />
              </div>
            </div>
            <div  className="text z-50 text-white absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div ref={sectionRef} className="flex flex-col max-w-[800px] text-center" style={{opacity: isVisible && currentSlide === index ? 1 : 0,transform: isVisible && currentSlide === index ? 'translateX(0)' : 'translateX(60px)',transition: 'opacity 2s, transform 2s',}} >
                <p className="leading-10 md:text-[18px]">FEEL THE DIFFERENCE WITH US</p>
                <h1 className="text-4xl lg:text-[80px] font-extrabold lg:leading-[95px] pb-6">Your Health <span className="font-light">is<br/> Our Priority</span></h1>
                <div className="flex gap-6 justify-center pt-6">
                  <button className="px-[30px] py-[15px] rounded-[5px] bg-primary hover:bg-black duration-300 font-bold">GET A QUOTE</button>
                  <button className="px-[30px] py-[15px] rounded-[5px] text-[#fff] border border-white hover:bg-black duration-300 hover:border-black font-bold">OUR SERVICES</button>
                </div>
              </div>
            </div>
          </div>
      </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
