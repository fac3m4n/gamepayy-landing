import Image from "next/image";
import React from "react";
import fortnite from "../public/images/fortnite.png";
import cod from "../public/images/cod.png";
import lol from "../public/images/lol.png";
import halo from "../public/images/halo.png";

const Games = () => {
  return (
    <div className="flex flex-row w-full h-screen z-10 px-6 justify-between items-start text-white z-10">
      <div className="flex flex-col">
        <h2 className="leading-none h-1/2">
          Games we support <br /> in Gamepayy
        </h2>
        <div className="flex h-1/2 items-end">
          <p>icon1</p>
          <p>icon2</p>
        </div>
      </div>
      <div className="flex space-x-6">
        <Image src={fortnite} alt="fortnite" />
        <Image src={cod} alt="cod" />
        <Image src={lol} alt="lol" />
        <Image src={halo} alt="halo" />
      </div>
    </div>
  );
};

export default Games;
