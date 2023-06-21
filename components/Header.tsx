import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import twitter from "../public/images/twitter.png";
import discord from "../public/images/discord.png";
import Link from "next/link";

const Header = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-full flex justify-between text-white items-center z-10 py-6 px-6">
      <Link className="flex items-center space-x-6" href={"/"}>
        <Image src={logo} alt="logo" width={64} />

        {/* <ul className="style">
          <li>
            <a href="default.asp">About</a>
          </li>
          <li>
            <a href="news.asp"></a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul> */}
      </Link>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-3">
          <a href="https://twitter.com/Gamepayy" target={"_blank"}>
            <Image src={twitter} alt="twitter" width={32} />
          </a>
          <a href="https://discord.gg/RykEns2hnw" target={"_blank"}>
            <Image src={discord} alt="discord" width={32} />
          </a>
        </div>
        <button
          className="btn-secondary"
          onClick={() => openInNewTab("https://app.gamepayy.com/")}
        >
          Launch App
        </button>
      </div>
    </div>
  );
};

export default Header;
