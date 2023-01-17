import React from "react";
import hero from "../public/images/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full h-screen text-white justify-around items-center z-10">
      <div className="px-10 space-y-10 w-1/2">
        <h1 className="leading-none">
          Best Gaming <br />
          platform ever
        </h1>
        <div className="flex flex-col space-y-[47px] items-start justify-start">
          <p>
            Game Payy is an amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Game Payy is an amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <button className="btn-primary">Become an early adopter</button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={hero} alt="hero" width={450} />
      </div>
    </div>
  );
};

export default Hero;
