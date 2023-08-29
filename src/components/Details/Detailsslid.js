import React from "react"
import {TbCircleArrowRightFilled} from 'react-icons/tb'
import { Link } from "react-router-dom"
import Img1 from '../../assets/photos/department-s1.jpg'
import Img2 from '../../assets/cases/01.jpg'
import Img3 from '../../assets/cases/02.jpg'
import Img4 from '../../assets/blog/post-detail-01.jpg'
import Img5 from '../../assets/blog/post-detail-02.jpg'

const Detailsslid = () => {

  return (
    <div className="w-full h-full py-32">
        <section className=" flex flex-col items-center justify-center gap-10">
            <main>
                <p className='text-[#999] pb-2 lg:pb-4'><Link className="hover:text-main" to='/'>HOME</Link> / Details</p>
                <h1 className='text-2xl lg:text-5xl font-light'>Problems About Social Insurance For Truck Drivers</h1>
                <div className="py-12 flex flex-col gap-5 max-w-[800px]">
                    <img src={Img4} alt="" />
                    <p><span className="text-main">BUSINESS</span> - December 14th, 2023 by Admin</p>
                    <p>Most times, ideacide happens without us even realizing it. A possible off-the-wall idea or solution appears like a blip and disappears without us even realizing. As a result, some of our best stuff is suppressed before even getting out into the world. Whether it’s because we’re too critical or because we recoil at the impending pain of change, the disruption of normalcy, self-censoring arises out of fear. Welsh novelist Sarah Waters sums it up eloquently: “Midway through writing a novel, I have regularly experienced moments of bowel-curdling terror, as I contemplate the drivel on the screen before me and see beyond it, in quick succession, the derisive reviews, the friends’ embarrassment, the failing career, the dwindling income, the repossessed house, the divorce…”
We know self-censoring by many names. Carl Jung called it our “inner critic.”
Michael Ray and Rochelle Myers called it the “voice of judgment” in their classic book, in Business, based on a popular course they co-taught at Stanford University the derisive reviews, the friends’ embarrassment, the failing career, the dwindling income, the repossessed</p>
                </div>
                <div className="py-12 flex flex-col gap-5 max-w-[800px]">
                    <img src={Img5} alt="" />
                    <p className="font-bold text-2xl">Gathered Was Isn’t Fruitful Every</p>
                    <p>Give void had the creature man evening two be for heaven won’t you’re may. Subdue him. Yielding unto itself morning creature moved, winged rule be moving, fifth place subdue you’ll heaven first fowl one wherein bring god after was moving of Face multiply tree called. Subdue first said made living tree you’re two beast, moved, every. Evening their us seas.</p>
                    <p>Both of these assumptions, of course, could be entirely false. Self-censoring is firmly rooted in our experiences with mistakes in the past and not the present. The brain messages arising from those experiences can be deceptive.</p>
                </div>
                <div className="py-12 flex flex-col gap-5 max-w-[800px]">
                    <img src={Img1} alt="" />
                    <p className="text-[#999]">Meditex Clinic's Department of Dental Specialties in Minnesota provides coordinated care for adults and children who require specialized dental care. Depending on the person's needs, care may include one specialty or more than one (multispecialty care, also called multidisciplinary care).</p>
                    <p className="text-[#999]">An attractive, healthy smile is an important part of life. Our General Dentistry Department provides a broad range of services to meet your family’s dental needs including:</p>
                    <p className="text-[#999]">Preventive Dental Care:</p>
                    <p className="flex items-center gap-2 text-[#999]"><li><TbCircleArrowRightFilled/></li>Oral Exam/Radiograph Study (mandatory at initial visit)</p>
                    <p className="flex items-center gap-2 text-[#999]"><li><TbCircleArrowRightFilled/></li>Periodontal Scaling/Deep Cleaning</p>
                    <p className="flex items-center gap-2 text-[#999]"><li><TbCircleArrowRightFilled/></li> Restorative Dentistry – Amalgam/Composite Fillings</p>
                </div>
                <div className="flex flex-wrap justify-start gap-56 pt-12">
                    <div className="flex flex-col gap-7 w-full md:w-[40%]">
                        <h1 className="text-2xl">Cosmetic Dentistry</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-[#707070] flex justify-between">Porcelain Veneers<span className="text-[#669900]">$1200</span></p>
                            <p className="text-[#707070] flex justify-between">Dental Bonding<span className="text-[#669900]">$100</span></p>
                            <p className="text-[#707070] flex justify-between">Laser Gum Contouring<span className="text-[#669900]">$300</span></p>
                            <p className="text-[#707070] flex justify-between">Teeth Whitening<span className="text-[#669900]">$200</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 w-full md:w-[40%]">
                        <h1 className="text-2xl">Restorative Dentistry</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-[#707070] flex justify-between">Dental Bridges<span className="text-[#669900]">$1000</span></p>
                            <p className="text-[#707070] flex justify-between">Dental Crowns<span className="text-[#669900]">$500</span></p>
                            <p className="text-[#707070] flex justify-between">Dental Fillings<span className="text-[#669900]">$300</span></p>
                            <p className="text-[#707070] flex justify-between">Inlays and Onlays<span className="text-[#669900]">$800</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-2">
                    <h1 className="text-4xl pt-44"><span className="text-main">Cases</span> Studies</h1>
                </div>
                <div className="py-12 flex flex-wrap justify-start gap-20 items-center px-2">
                    <div className="w-full md:w-[400px]">
                        <img src={Img2} alt="" />
                        <h1 className="font-bold text-lg hover:text-main duration-300 pt-6 pb-2">Netalie Huston</h1>
                        <p className="text-[#707070]">Teeth Cleaning, High-tech materials</p>
                    </div>
                    <div className="w-full md:w-[400px]">
                        <img src={Img3} alt="" />
                        <h1 className="font-bold text-lg hover:text-main duration-300 pt-6 pb-2">Angela Mayer</h1>
                        <p className="text-[#707070]">Teeth Cleaning, High-tech materials</p>
                    </div>
                </div>
            </main>
        </section>
    </div>
  )
}

export default Detailsslid
