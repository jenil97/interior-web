import React from "react";
import Woo from "../assets/woo.png";
import O from "../assets/o.png";
import Noom from "../assets/noom.png";
import mzpa from "../assets/Mazepa.png";
import Fild from "../assets/fild.png";
import Odesd from "../assets/ODESD2.png";

const Company = () => {
  return (
    <div>
      <div className="lg:flex justify-center gap-x-20 px-20">
        <img src={Woo} alt="woo" />
        <img className="w-[150px] h-[150px] lg:mt-8 ml-8" src={O} alt="o" />
        <img src={Noom} alt="noom" />
      </div>
      <div className="lg:flex justify-center gap-x-20 -mt-4 px-24">
        <img className="w-[190px] h-[190px]" src={mzpa} alt="mzpa" />
        <img className="w-[150px] h-[150px]" src={Fild} alt="fild" />
        <img className="w-[150px] h-[150px]" src={Odesd} alt="od" />
      </div>
    </div>
  );
};

export default Company;
