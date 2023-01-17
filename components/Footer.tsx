import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="flex z-10 justify-around w-full items-start h-full">
      <div className="flex flex-col justify-between">
        <div>
          <Image src={logo} alt="logo" width={64} />
          <div className="flex">
            <Image src={logo} alt="logo" width={24} />
            <Image src={logo} alt="logo" width={24} />
            <Image src={logo} alt="logo" width={24} />
            <Image src={logo} alt="logo" width={24} />
          </div>
        </div>
        <p>Gamepayy, 2022</p>
      </div>

      <div>texts</div>
    </footer>
  );
};

export default Footer;
