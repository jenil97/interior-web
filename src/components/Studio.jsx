import React from "react";
import Swing from "../assets/swing.png";

const Studio = () => {
  return (
    <div className="lg:flex justify-between lg:h-screen h-[80vh] lg:px-[200px] px-10">
      <div className="relative lg:-mt-12 lg:w-[455px] w-[300px] h-[340px] lg:h-[540px] bg-[#ac8e6f]">
        <div className="lg:mt-12 ml-6 lg:ml-16">
          <img
            className="lg:w-[600px] w-[250px] mt-6 absolute"
            src={Swing}
            alt="swing"
          />
        </div>
      </div>

      <div className="lg:mt-8 mt-8">
        <div className="bg-[#ac8e6f] lg:h-[295px] h-[220px] w-[300px] lg:w-[295px]">
          <p className="text-white lg:text-3xl text-3xl lg:py-20 py-8 lg:px-5 px-5 font-semibold">
            Creative Studio
          </p>
          <p className="lg:px-5 px-5 lg:-mt-14 text-white font-semibold">
            Nulla imperdiet odio sit amet est <br /> vehicula condimentum congue
            dui <br />
            nec ipsum ullamcorper tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studio;
