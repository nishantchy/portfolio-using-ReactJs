import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "./works.css"
import workImg1 from "../assets/images/work1.png"
import workImg2 from "../assets/images/work2.png"
import workImg3 from "../assets/images/work3.png"
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

const Works = () => {
  const comp = useRef(null)
  
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#works",
          end: "+=500", 
          snap: {
            snapTo: "labels", 
            duration: { min: 0.2, max: 3 }, 
            delay: 0.2, 
            ease: "power1.inOut", 
          },
        },
      });
      tl.from("#works",{
        y: "+=80",
        opacity: 0,
        duration: 1,
      })
      tl.from("#swiper", { 
          y: "+=80",
          opacity: 0,
          duration: 1.5,
        })
  }, comp)

  return ()=>ctx.revert()
  },[])
  return (
    <>
    <div id='works' className="h-screen works relative bg-gray-950" ref={comp}>
        <div className="page-title font-spaceGrotesks flex justify-center">
            <h1 id='works' className='text-6xl font-bold text-gray-50 font-spaceGrotesk'>My Works</h1>
        </div>
       <div id='swiper' className="myworks">
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Link to="https://sewanepal.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={workImg1} alt=''/>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="https://shreemkdmadhyemik.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={workImg2} alt=''/>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="https://nishantchaudhary.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={workImg3} alt=''/>
        </Link>
        </SwiperSlide>
      </Swiper>
       </div>
      <div class="custom-shape-divider-top-1709841156">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>
      </div>
      
    </>
  )
}

export default Works
