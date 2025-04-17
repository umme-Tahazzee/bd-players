import React, { useState } from "react";
import banner from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";


const Hero = ({ handleAddMoney }) => {
  

  return (
    <section
      className="w-full max-w-[1320px] mx-auto h-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center
              bg-gradient-to-r from-indigo-500 via-black to-pink-500 rounded-3xl shadow-xl
              bg-blend-lighten md:bg-blend-darken bg-cover bg-center text-center"
    >
      <img
        src={banner}
        alt="Cricket Banner"
        className="w-[150px] md:w-[200px] lg:w-[250px] mb-6"
      />

      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <p className="text-gray-300 mt-4 text-sm md:text-base">
        Beyond Boundaries Beyond Limits
      </p>
      <button
        onClick={handleAddMoney}
        className="mt-6 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg
    hover:bg-lime-300 transition"
      >
        Claim Free Credit
      </button>
    
    </section>
  );
};

export default Hero;
