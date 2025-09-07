import React from "react";
import Video from "./Video";

function HomeHeroText() {
  return (
    <div className="uppercase lg:text-[20vh] text-[7vh] font-[lausen2] text-center leading-[0.9] lg:pt-3 pt-10">
      <div className="">L'étincelle</div>
      <div className="flex items-start">
        qui
        <div className="lg:h-[15vh] h-[4vh] lg:w-[16vw] w-[8vh] rounded-full overflow-hidden"><Video /></div>
        génère
      </div>
      <div className="">la créativité</div>
    </div>
  );
}

export default HomeHeroText;
