import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";


function Agence() {
  gsap.registerPlugin(ScrollTrigger)
  const imgDivRef = useRef(null)
  const imgRef = useRef(null)

  const imgArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ]

  useGSAP(function(){
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        markers: false,
        start: 'top 24%',
        end: 'top -120%',
        pin: true,
        scrub: 2,
        onUpdate: (elem) => {
          let idx
          if(elem.progress == 1) idx = imgArray.length - 1
          else idx = Math.floor(elem.progress * imgArray.length);
          imgRef.current.src = imgArray[idx]
        }
      }
    })
  })
  
  return (
    <div className="bg-white">
      <div className="scetion1">

        <div ref={imgDivRef} className="img-div lg:h-68 h-28 lg:w-52 w-20 lg:rounded-3xl rounded-2xl absolute lg:top-[24%] -top-96 left-[30%] overflow-hidden">
          <img
            ref={imgRef}
            className="w-full h-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>

        <div className="texts relative font-[lausen2] py-1">
          <div className="lg:mt-[55vh] mt-[32vh]">
            <h1 className="lg:text-[20vw] text-[18vw] text-center leading-[0.8] text-black uppercase">Soixan7e<br />Douze</h1>
          </div>
          <div className="lg:pl-[40%] mt-10 px-5">
            <p className="lg:text-5xl text-xl text-black lg:tracking-normal tracking-tighter">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une
              <br /> personnalité, une histoire. Si on oublie ça, on peut faire
              de bons chiffres à court terme, mais on la tue à long terme. C'est
              pour ça qu'on s'engage à donner de la perspective, pour bâtir des
              marques influentes.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 mt-20 h-[60vh] w-full lg:px-25 px-5  py-15 text-black text-lg font-bold leading-[1.1] font-[lausen2]">
          <div className="flex h-[50%] lg:w-[41%] w-full lg:justify-between gap-20">
            <div className="px-5"><h2>Expertise</h2></div>
            <div>
              <ul>
                <li class="">Stratégie</li>
                <li class="">Publicité</li>
                <li class="">Branding</li>
                <li class="">Design </li>
                <li class="">Contenu</li>
              </ul>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col h-[50%] w-full justify-between lg:gap-0 gap-5">
            <div className="lg:w-20% w-[90vw] lg:p-7"><p>Nos projets_ naissent dans l'humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p></div>
            <div className="lg:w-20% w-[90vw] lg:p-7"><p>Notre création_ bouillonne dans un environnement où le talent a le goût d'exploser. Où on se sent libre d'être la meilleure version de soi-même.</p></div>
            <div className="lg:w-20% w-[90vw] lg:p-7 "><p>Notre culture_ c'est l'ouverture aux autres. Point. Tout l'équipage participe à bâtir une agence dont on est fiers.</p></div>
          </div>
        </div>

      </div>
      <div className="scetion2 h-screen bg-black"></div>
    </div>
  );
}

export default Agence;
