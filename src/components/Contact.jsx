import React from 'react'
import "./contact.css"
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const comp = useRef(null)
  
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#header",
          end: "+=500", 
          snap: {
            snapTo: "labels", 
            duration: { min: 0.2, max: 3 }, 
            delay: 0.2, 
            ease: "power1.inOut", 
          },
        },
      });
      tl.from("#header",{
        y: "+=80",
        opacity: 0,
        duration: 1,
      })
      tl.from("#msg", { 
          y: "+=80",
          opacity: 0,
          duration: 1,
        })
      tl.from("#input-one", { 
          y: "+=80",
          opacity: 0,
          duration: 1,
        })
      tl.from("#input-two", { 
          y: "+=80",
          opacity: 0,
          duration: 1,
        })
      tl.from("#send", { 
          y: "+=80",
          opacity: 0,
          duration: 1,
        })
  }, comp)

  return ()=>ctx.revert()
  },[])
  return (
    <>
      <section id='contact' className="text-gray-700 body-font relative" ref={comp}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 id="header" className="font-bold font-spaceGrotesk text-6xl  title-font mb-4 text-gray-950">
              Contact Me
            </h1>
            <p id="msg" className="font-spaceGrotesk lg:w-2/3 mx-auto leading-relaxed text-base">
              Anything I can help you with, fill up the form to send me a message. 
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div id='input-one' className="relative">
                  <label for="name" className="font-spaceGrotesk leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="font-spaceGrotesk w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div id='input-one' className="relative">
                  <label
                    for="email"
                    className="font-spaceGrotesk leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="font-spaceGrotesk w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div id='input-two' className="relative">
                  <label
                    for="message"
                    className="font-spaceGrotesk leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="font-spaceGrotesk w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button id='send' className="font-spaceGrotesk flex mx-auto text-white bg-gray-950 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  SEND
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-gray-950 font-spaceGrotesk">nishantchy1234@gmail.com</a>
                <p className="leading-normal my-5 font-spaceGrotesk">
                  Kathmandu, Nepal
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-top-1709842588">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
      </section>
    </>
  )
}

export default Contact
