import React from "react";
import Modern from "../assets/modern.png";

const Places = () => {
  return (
    <div className="lg:flex justify-between items-center lg:h-screen h-[80vh] lg:px-[200px] px-10">
      <div className="mt-8 lg:px-8">
        <p className="text-black font-Playfair lg:text-3xl text-3xl lg:py-20 py-8 lg:px-5 px-5 font-semibold">
          Modern Interior Places
        </p>
        <p className="lg:px-5 px-5 lg:-mt-14 text-black">
          Phasellus scelerisque sed leo quis gravida. <br /> Fusce lobortis
          libero ut arcu blandit <br /> pharetra.
        </p>
      </div>

      <div className="relative lg:mt-14 lg:w-[330px] w-[280px] h-[290px] lg:h-[470px] bg-[#ac8e6f]">
        <div className="ml-6 lg:mt-14 mt-20 lg:-ml-14">
          <img
            className="lg:w-[400px] w-[230px] -mt-6 absolute"
            src={Modern}
            alt="swing"
          />
        </div>
      </div>
    </div>
  );
};

export default Places;
