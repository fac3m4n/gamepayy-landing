import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import bg from "../public/images/bg-gradient.png";
import hero from "../public/images/hero.png";

import arrow from "../public/images/arrow.png";
const Home: NextPage = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex h-screen w-full flex-col bg-[url('../public/images/bg-gradient1.png')] px-6">
      <Head>
        <title>GamePayy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image
        src={bg}
        alt="background"
        className="absolute -z-1"
        fill
        style={{ objectFit: "cover" }}
      /> */}
      <Header />
      <div className="text-white h-screen flex flex-col items-start sm:items-center md:flex-row-reverse md:justify-around z-10">
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
            onClick={() => openInNewTab("https://gamepayy.com")}
          >
            Become an early adopter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
