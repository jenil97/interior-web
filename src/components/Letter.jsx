import React from "react";

const Letter = () => {
  return (
    <div className="bg-black lg:h-[240px] h-[270px] mb-5">
      <div className="lg:flex justify-center">
        <p className="text-white lg:text-4xl text-3xl px-12 py-10">What to learn more?</p>
      </div>
      <div className="lg:flex justify-center">
        <p className="text-white -mt-5 px-9">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          nullam nunc justo <br />{" "}
          <span className="lg:ml-[220px] lg:px-1 px-14"> sagittis suscipit ultrices.</span>
        </p>
      </div>
      <div className="lg:flex justify-center mt-6 px-32">
        <button className="px-5 py-2 bg-fuchsia-300">Read More</button>
      </div>
    </div>
  );
};

export default Letter;
