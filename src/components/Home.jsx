import React from "react";
import Chair from "../assets/chair.png";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="lg:flex">
        <div className="lg:flex-col lg:mt-[150px] lg:px-20 px-10">
          <div className="lg:text-7xl  text-4xl py-5 font-Playfair font-semibold">
            Create a new <br /> concepts
          </div>
          <div className="lg:text-xl text-base lg:mt-3 font-Playfair">
            Our aim is to make people who work in open-plan offices <br /> to be
            happier and more effective accordingly.
          </div>
          <div className="flex justify-between lg:mt-8 mt-5">
            <button className="bg-black text-white lg:px-7 px-3 py-2 lg:py-3">
              View collection
            </button>
            <button className="bg-gray-200 text-black lg:px-8 px-3 py-2 lg:py-3 mr-4 border border-black lg:-mr-[-50px]">
              Shop now
            </button>
          </div>
        </div>

        <div className="lg:py-24 px-24 py-32">
          <img className="lg:w-[450px] lg:h-[400px] w-[250px] h-[220px]" src={Chair} alt="chair" />
        </div>
      </div>
    </div>
  );
};

export default Home;
