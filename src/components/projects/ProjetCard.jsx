import React from "react";

function ProjetCard({image}) {
  //console.log(image)
  return (
    <>
      <div className="group h-full lg:w-1/2 w-full overflow-hidden object-cover hover:rounded-[50px] transition-all relative">
        <img
          src={image.img1}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 h-full transition-all w-full bg-black/40 absolute top-0 left-0 flex items-center justify-center">
          <div className="uppercase text-4xl font-[lausen1] border-2 pt-2 px-4 rounded-full w-fit">
            vior le projet
          </div>
        </div>
      </div>
      <div className="group h-full lg:w-1/2 w-full overflow-hidden object-cover hover:rounded-[50px] transition-all relative">
        <img
          src={image.img2}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 h-full transition-all w-full bg-black/40 absolute top-0 left-0 flex items-center justify-center">
          <div className="uppercase text-4xl font-[lausen1] border-2 pt-2 px-4 rounded-full w-fit">
            vior le projet
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjetCard;
