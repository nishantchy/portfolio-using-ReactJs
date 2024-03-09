import React from 'react'
import myImg from "../assets/images/introimg.png"
import "./intro.css"
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import resume from "../assets/Resume-Nishant.pdf"

const Intro = () => {
    const comp = useRef(null)

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            const t1 = gsap.timeline()
            t1.from(["#title-1", "#title-2", "#btn"], {
                opacity: 0,
                y: "+=30",
                delay: 3.9,
                stagger: 0.5,
            })
            .from("#image", {
                opacity: 0,
                x:"+=100",
                stagger: 0.5,
            })
        }, comp)

        return ()=>ctx.revert()
    },[])

    const openResume = () => {
      // Replace 'resume.pdf' with the path to your resume PDF file
      const resumeUrl = resume;
      window.open(resumeUrl, '_blank');
    };
  return (
    <>
      <div className="container-lg" ref={comp}>
      <div className="h-screen bg-gray-950 flex justify-center place-items-center">
        <div className="intro-message">
            <h2 id='title-1' className='text-2xl text-gray-50 font-spaceGrotesk'>Hi, I am Nishant Chaudhary</h2>
            <h1 id ='title-2' className='text-5xl py-5 text-gray-50 font-spaceGrotesk'>FrontEnd Developer</h1>
            
            <button id='btn' onClick={openResume} className='bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-2xl text-gray-50 font-spaceGrotesk'>
      Resume
    </button>

        </div>
        <div className="intro-img mt-0">
            <img id='image' src={myImg} alt="" />
        </div>
      </div>
      <div className="tilt">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
      </div>
      </div>
    </>
  )
}

export default Intro
