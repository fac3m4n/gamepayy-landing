import React from "react";
import {
  RiTrophyFill,
  RiFlashlightFill,
  RiGroupFill,
  RiCoinsFill,
} from "react-icons/ri";

const Features = () => {
  return (
    <section className="flex flex-col text-white mt-20 mb-20 text-center">
      <h2 className="mb-5">A revolutionary gaming platform</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center">
          <RiTrophyFill size={100} />
          <div className="text-3xl">Win Big</div>
          <div className="mt-4">
            Compete in seasonal ladders, tournaments, and head-to-head matches
            and earn your place as the top dog on our platform.
          </div>
        </div>
        <div className="p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center">
          <RiCoinsFill size={100} />
          <div className="text-3xl">Earn Big</div>
          <div className="mt-4">
            Wager against other gamers, complete challenges or stream to earn
            cash, crypto and NFT's with GamePayy.
          </div>
        </div>
        <div className="p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center">
          <RiGroupFill size={100} />
          <div className="text-3xl ">Become Big</div>
          <div className="mt-4 ">
            Establish yourself in a vibrant community of active gamers and build
            your brand
          </div>
        </div>
        <div className="p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center">
          <RiFlashlightFill size={100} />
          <div className="text-3xl ">Instant Payout</div>
          <div className="mt-4 ">
            Instant matchmaking as well as receive your rewards directly to your
            crypto wallet or to your checking account within minutes!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
