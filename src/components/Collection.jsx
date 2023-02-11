import React from "react";
import Arm from "../assets/armchair.png";
import Blue from "../assets/chair-blue.png";
import Flow from "../assets/flow-chair.png";

const Collection = () => {
  return (
    <div className="lg:ml-44 h-screen">
      <div className="lg:flex lg:h-[450px] lg:w-[1350px] lg:-ml-44 bg-gray-100">
        <div className="flex items-center lg:px-36">
          <p className="lg:text-3xl lg:-ml-5 px-4 lg:-mt-20 font-Playfair font-semibold underline">
            New <br /> Collection
          </p>
          <p className="text-[11px] lg:text-lg px-10 py-4 lg:mt-32 lg:-ml-48">
            Lorem ipsum dolor sit amet, consectetur <br />
            Accusantium in magnam excepturi est <br />
            laudantium asperiores recusandae <br /> sit explicabo maiores
            commodi.
          </p>
        </div>
        <div className="absolute lg:mt-24 lg:px-[500px] px-20 mt-4 lg:flex lg:gap-x-6">
          <img
            className="lg:w-[220px] lg:h-[250px] w-[220px]"
            src={Arm}
            alt="arm"
          />
          <img
            className="lg:w-[220px] lg:h-[250px] w-[220px]"
            src={Blue}
            alt="blue"
          />
          <img
            className="lg:w-[220px] lg:h-[250px] w-[240px]"
            src={Flow}
            alt="flow"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
