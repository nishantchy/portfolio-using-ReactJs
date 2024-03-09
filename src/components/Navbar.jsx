import React from 'react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-router-dom';






const Navbar = () => {
    const comp = useRef(null)
    const [isActive, setIsActive] = useState(false);
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            const t1 = gsap.timeline()
            t1.from(["#list-1"], {
                opacity: 0,
                y: "+=30",
                // delay: 3.3,
                stagger: 0.5,
            })
        }, comp)

        return ()=>ctx.revert()
    },[])
    const handleClick = ()=>{
      setIsActive(!isActive);
    }
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <>
     <div className='bg-gray-950 header' ref={comp}>
        <nav className='navbar fixed top-0 z-50 w-full'>
        <ul id='list-1' className={`nav-menu top-0 z-50 w-full flex justify-center place-items-center gap-10 pt-5 pb-5 font-spaceGrotesk uppercase ${isActive ? 'active' : ''}`}>
                <li className='nav-item text-2ssxl text-gray-50'><Link  onClick={() => scrollToSection('home')}>Home</Link></li>
                <li className='nav-item text-2ssxl text-gray-50'><Link onClick={() => scrollToSection('about')}>About Me</Link></li>
                <li className='nav-item text-2ssxl text-gray-50'><Link onClick={() => scrollToSection('works')}>Works</Link></li>
                <li className='nav-item text-2ssxl text-gray-50'><Link onClick={() => scrollToSection('contact')}>Contact Me</Link></li>
            </ul>
            <div className={`hamburger bg-gray-50 z-20 pt-5 pb-5 ${isActive ? 'hidden' : ''}`} onClick={handleClick}>
               <RxHamburgerMenu style={{ width: '30px', height: '30px' }}/>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
