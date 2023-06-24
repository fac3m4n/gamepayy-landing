import React from "react";
import hero from "../public/images/hero.png";
import Image from "next/image";
import arrow from "../public/images/arrow.png";

const Hero = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="text-white flex flex-col items-start sm:items-center md:flex-row-reverse md:justify-around z-10 h-screen">
      <Image src={hero} alt="hero" className="sm:w-[300px] md:w-[500px]" />

      <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <h1 className="leading-none text-[32px] md:text-[48px]">
          Social Matchmaking Platform for Competitive Gamers
        </h1>
        <div className="flex justify-center items-start">
          <Image src={arrow} alt="arrow" width={48} />
          <p className="md:text-[20px]">
            Experience the thrill of competition and earn rewards on our new
            gaming platform
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={() => openInNewTab("https://forms.gle/5SNz7ZEy7NfYsscm9")}
        >
          Become an early adopter
        </button>
      </div>
    </div>
  );
};

export default Hero;
