import React from "react";
import Almost from "../assets/almost.png";
import Belt from "../assets/belt.png";
import Bowl from "../assets/bowl.png";
import Mamylen from "../assets/mamuleng-ochair.png";
import Nest from "../assets/nestchair.png";
import Rocking from "../assets/rocking.png";

const Nature = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-[#a07953] lg:-mt-10 font-Playfair text-3xl font-semibold">
          Nature Collections
        </p>
        <p className="lg:text-base py-2">
          Celebrating nature’s formations. Taking inspiration from the organic
          shapes, <br /> movements and sequential patterns that surround us
        </p>
      </div>

      <div className="lg:ml-20 lg:px-44 px-24 py-6 lg:grid lg:grid-cols-3">
        <div className="lg:w-[200px] ">
          <img src={Belt} alt="belt" />
        </div>
        <div className="lg:ml-[-50px] mt-4 lg:w-[300px] lg:h-[325px]">
          <img src={Bowl} alt="bowl" />
        </div>
        <div className="lg:w-[225px]">
          <img src={Nest} alt="nest" />
        </div>
      </div>

      <div className="lg:ml-20 lg:px-44 px-24 lg:grid lg:grid-cols-3">
        <div className="w-[200px]">
          <img src={Almost} alt="alt" />
        </div>
        <div className=" w-[200px]">
          <img src={Rocking} alt="rock" />
        </div>
        <div className="w-[160px]">
          <img src={Mamylen} alt="mam" />
        </div>
      </div>
    </div>
  );
};

export default Nature;
