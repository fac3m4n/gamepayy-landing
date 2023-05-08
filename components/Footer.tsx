import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";

import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full text-white body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
            <Image src={logo} alt="logo" width={96} />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Compete, Connect and Earn!
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link
                className="text-gray-500 cursor-pointer hover:text-white"
                href={"https://discord.com/invite/RykEns2hnw"}
                target="_blank"
              >
                <FaDiscord size={24} />
              </Link>
              <Link
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
                href={"https://twitter.com/gamepayy/"}
                target="_blank"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
                href={"https://www.linkedin.com/company/game-payy/"}
                target="_blank"
              >
                <AiFillLinkedin size={24} />
              </Link>
              <Link
                className="ml-3 text-gray-500 cursor-pointer hover:text-white"
                href={"https://www.instagram.com/gamepayy_/"}
                target="_blank"
              >
                <AiFillInstagram size={24} />
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Contact Support
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Help Resources
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Release Updates
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Platform
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Terms &amp; Privacy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Pricing
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  FAQ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  1750 N Bayshore Dr
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  Miami, Florida 33132
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-white">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-white capitalize xl:text-center">
            © 2023 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
