import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef } from 'react'
import { navContext } from '../../context/NavContext';
import { TfiWorld } from "react-icons/tfi";

function FullScreenNav() {

  const [isNavOpen, setIsNavOpen] = useContext(navContext)
  console.log(isNavOpen);
  
  const fullScreenRef = useRef(null)
  const fullscreenNavRef = useRef(null)

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(fullScreenRef.current, {display: 'block'})
    tl.to('.stairing', {height: '100%', stagger: { amount: -0.2},})
    tl.to('.link', {opacity: 1, rotateX: 0, stagger: {amount: 0.1}})
    tl.to('.navFooter', {opacity: 1})
    tl.to('.Nav2', {opacity: 1})
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to('.link', {opacity: 0, rotateX: 90, stagger: {amount: 0.1}})
    tl.to('.navFooter', {opacity: 0})
    tl.to('.Nav2', {opacity: 0})
    tl.to('.stairing', {height: 0, stagger: { amount: -0.2},})
    tl.to(fullScreenRef.current, {display: 'none'})
  }

  useGSAP(function () {
    if(isNavOpen){
      //gsap.to(fullScreenRef.current, {display: 'block'})
      gsapAnimation()
    } else {
      //gsap.to(fullScreenRef.current, {display: 'none', ease: 'power2.out'})
      gsapAnimationReverse()
    }
  },[isNavOpen]);

  return (
    <div ref={fullScreenRef} className='hidden h-screen w-full absolute overflow-hidden z-50'>

      <div className="stairParent fixed h-screen w-full">
        <div className="stairs h-full w-full flex">
          <div className="stairing origin-top h-full w-1/5 bg-black"></div>
          <div className="stairing origin-top h-full w-1/5 bg-black"></div>
          <div className="stairing origin-top h-full w-1/5 bg-black"></div>
          <div className="stairing origin-top h-full w-1/5 bg-black"></div>
          <div className="stairing origin-top h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullscreenNavRef} className='relative p-1'>
        <div className="Nav2 w-full flex items-start justify-between p-1">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div onClick={() => setIsNavOpen(false)} className="cross w-20 h-20 relative cursor-pointer">
              <div className="crossLine h-28 w-[2px] bg-white -rotate-45 origin-top absolute"></div>
              <div className="crossLine h-28 w-[2px] bg-white rotate-45 origin-top absolute right-0"></div>
          </div>
        </div>
        <div className="links w-full lg:mt-[10vh] mt-[18vh]">

          <div className="link border-t-1 border-white relative">
            <h1 className='uppercase font-[lausen2] lg:text-8xl text-4xl text-center lg:pt-2 pt-[1px]'>Projets</h1>
            <div className="moveLink absolute flex gap-2 bg-[#c9fc31] lg:pt-3 pt-[1px] top-[0%] text-black">
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="link border-t-1 border-white relative">
            <h1 className='uppercase font-[lausen2] lg:text-8xl text-4xl text-center lg:pt-2 pt-[1px]'>agence</h1>
            <div className="moveLink absolute flex gap-2 bg-[#c9fc31] lg:pt-3 pt-[1px] top-[0%] text-black">
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="link border-t-1 border-white relative">
            <h1 className='uppercase font-[lausen2] lg:text-8xl text-4xl text-center lg:pt-2 pt-[1px]'>contact</h1>
            <div className="moveLink absolute flex gap-2 bg-[#c9fc31] lg:pt-3 pt-[1px] top-[0%] text-black">
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="link border-y-1 border-white relative">
            <h1 className='uppercase font-[lausen2] lg:text-8xl text-4xl text-center lg:pt-2 pt-[1px]'>blogue</h1>
            <div className="moveLink absolute flex gap-2 bg-[#c9fc31] lg:pt-3 pt-[1px] top-[0%] text-black">
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
              <div className="moveX flex gap-4 items-start">
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                <h2 className="uppercase font-[lausen2] lg:text-8xl text-4xl text-center whitespace-nowrap">pour tout voir</h2>
                <img className="lg:h-20 h-9 lg:w-60 w-32 rounded-full object-cover shrink-0" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

        </div>

        <div className="navFooter lg:flex flex-wrap  mt-19 justify-between items-center w-full lg:gap-1 gap-5">
          <div className="lg:block hidden">
            <div className="flex items-center">
              <div className="h-9 w-10 p-2 text-xl"><TfiWorld /></div>
              <h2 className="uppercase text-xl font-semibold">montreal_</h2>
            </div>
          </div>
          <div className="lg:flex flex-wrap lg:px-1 px-19 gap-3">
            <h4 className="uppercase lg:text-xs text-[9px] font-semibold font-[lausen1]">Politique de confidentialité</h4>
            <h4 className="uppercase lg:text-xs text-[9px] font-semibold font-[lausen1]">Avis de confidentialité</h4>
            <h4 className="uppercase lg:text-xs text-[9px] font-semibold font-[lausen1]">Rapport éthique</h4>
            <h4 className="uppercase lg:text-xs text-[9px] font-semibold font-[lausen1]">options de consentement</h4>
          </div>
          <div className="flex gap-2 lg:px-1 px-12">
            <div className="uppercase font-[lausen2] lg:text-2xl text-xl border-2 px-2 rounded-full -py-1">fb</div>
            <div className="uppercase font-[lausen2] lg:text-2xl text-xl border-2 px-2 rounded-full -py-1">ig</div>
            <div className="uppercase font-[lausen2] lg:text-2xl text-xl border-2 px-2 rounded-full -py-1">in</div>
            <div className="uppercase font-[lausen2] lg:text-2xl text-xl border-2 px-2 rounded-full -py-1">be</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FullScreenNav
