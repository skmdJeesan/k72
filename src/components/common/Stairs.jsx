import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

function Stairs(props) {
  const currentPath = useLocation().pathname
  const stairParentRef = useRef(null)
  const appRef = useRef(null)
  useGSAP(function () {
    let tl = gsap.timeline()
    tl.to(stairParentRef.current, {display: 'block',})
    tl.from(".stair", { height: 0, stagger: {amount: -0.2,}});
    tl.to('.stair', {y: '100%', stagger: {amount: -0.2,}})
    tl.to(stairParentRef.current, {display: 'none',})
    tl.to('.stair', {y: '0%'})
    gsap.from(appRef.current, {opacity: 0, delay: 1})
  },[currentPath]);

  return (
    <div className="">
      <div ref={stairParentRef} className="h-screen w-full fixed z-10">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={appRef} className="">{props.children}</div>
    </div>
  );
}

export default Stairs;
