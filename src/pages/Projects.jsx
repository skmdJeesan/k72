import React from 'react'
import ProjetCard from '../components/projects/ProjetCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Projects() {

  const projetImg = [
    {
      img1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      img2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      img1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      img2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
    },
    {
      img1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
      img2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    },
    {
      img1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
      img2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.hero', {
      height: '50px',
      stagger: {amount: 0.2},
      scrollTrigger: {
        trigger: '.projetCards',
        markers: false,
        start: 'top 100%',
        end: 'top -200%',
        scrub: 0.25,
      }
    })
  })

  return (
    <div className='text-black p-2'>

      <div className="hero-text pt-64 relative">
        <h1 className="font-[lausen2] lg:text-[12vw] text-[18vw] uppercase">projets</h1>
        {/* <sup className='lg:text-4xl text-xl h-fit absolute lg:top-[60%] top-[77%] lg:left-[54%] left-[83%]'>16</sup> */}
      </div>

      <div className="projetCards flex flex-col lg:gap-4 gap-3 lg:-mt-12 -mt-4 absolute z-9 w-full">
        {projetImg.map((elem,idx) => {
          return <div key={idx} className="hero flex lg:flex-row flex-col justify-between lg:gap-4 gap-3 lg:h-[500px] h-[50px] w-full">
            <ProjetCard image={elem}/>
          </div>
        })}
      </div>

    </div>
  )
}

export default Projects
