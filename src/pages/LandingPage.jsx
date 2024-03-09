import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import "./landing.css"
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Footer from '../components/Footer'





const LandingPage = () => {
    const comp = useRef(null)

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            const t1 = gsap.timeline()
            t1.to("#intro-slider", {
                xPercent: "-100",
                duration: 3,
                opacity: 1,
                delay: 0.5,
            })
        }, comp)

        return ()=>ctx.revert()
    },[])
  return (
    <>
      <div id='home' className="relative" ref={comp}>
        <div  id='intro-slider' className='h-screen p-10 bg-gray-100  justify-center place-items-center font-spaceGrotesk absolute z-10 w-full flex flex-col gap-10 tracking-tight'>
        <h1 id='welcome' className='text-7xl font-bold text-gray-950 font-spaceGrotesk'>Welcome</h1>
        </div>
        <Navbar/>
        <Intro/>
      </div>
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default LandingPage
