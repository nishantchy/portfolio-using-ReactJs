import React from 'react'
import "./about.css"
import bootstrap from "../assets/images/bootstrap.svg"
import html from "../assets/images/file-type-html.svg"
import CSS from "../assets/images/file-type-css.svg"
import tailwind from "../assets/images/tailwind-css.svg"
import react from "../assets/images/react.svg"
import laravel from "../assets/images/laravel.svg"
import figma from "../assets/images/figma.svg"
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () => {
  const comp = useRef(null)
  
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#skills",
          end: "+=500", 
          snap: {
            snapTo: "labels", 
            duration: { min: 0.2, max: 3 }, 
            delay: 0.2, 
            ease: "power1.inOut", 
          },
        },
      });
      tl.from("#title",{
        y: "+=80",
        opacity: 0,
        duration: 1,
      })
      tl.from(".about-content",{
        y: "+=80",
        opacity: 0,
        duration: 1,
      })

      tl.from("#skills", { 
          y: "+=80",
          opacity: 0,
          duration: 1.5,
        })
  }, comp)

  return ()=>ctx.revert()
  },[])
  return (
    <>
      <div id='about' className="container" ref={comp}>
        <section>
            <div id='page-title' className="page-title font-spaceGrotesks bg-gray-50 flex justify-center">
                <h1 id='title' className='text-6xl font-bold text-gray-950 font-spaceGrotesk'>About Me</h1>
            </div>
            <div className="about-content">
                <p className="font-spaceGrotesks text-center text-gray-950 p-5">I'm Nishant Chaudhary, a web developer with a passion for crafting immersive digital experiences. From mastering HTML and CSS to diving into React and Laravel, I thrive on pushing the boundaries of web development. With a keen eye for design and a love for problem-solving, I'm dedicated to creating innovative solutions that captivate and inspire.</p>
            </div>
            <div id='skills' className="skills flex justify-center place-items-center">
                <img id='skill-img' src={html} alt="" />
                <img id='skill-img' src={CSS} alt="" />
                <img id='skill-img' src={bootstrap} alt="" />
                <img id='skill-img' src={tailwind} alt="" />
                <img id='skill-img' src={react} alt="" />
                <img id='skill-img' src={laravel} alt="" />
                <img id='skill-img' src={figma} alt="" />
            </div>
        </section>
      </div>
      
    </>
  )
}

export default About
