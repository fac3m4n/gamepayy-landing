import Image from "next/image";
import React, { useRef } from "react";
import fortnite from "../public/images/games/fortnite.png";
import cod from "../public/images/games/cod.png";
import lol from "../public/images/games/lol.png";
import halo from "../public/images/games/halo.png";
import apex from "../public/images/games/apex.png";
import fifa from "../public/images/games/fifa.png";
import nba from "../public/images/games/nba.png";
import madden from "../public/images/games/madden.png";
import rocket from "../public/images/games/rocket.png";
import ssmash from "../public/images/games/ssmash.png";

import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Games = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-row items-start justify-between space-x-5 text-white select-none">
      {/* left */}
      <div className="w-1/3 flex flex-col text-white space-y-6">
        <h2 className="leading-none">
          Earn rewards playing your favorite games
        </h2>
        <div className="flex space-x-2">
          <div
            className="bg-slate-500/50 p-2 rounded-sm"
            ref={navigationPrevRef}
          >
            <MdOutlineNavigateBefore color="white" size={24} />
          </div>
          <div
            className="bg-slate-500/50 p-2 rounded-sm"
            ref={navigationNextRef}
          >
            <MdOutlineNavigateNext color="white" size={24} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-row w-full overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current
              ? navigationPrevRef.current
              : undefined,
            nextEl: navigationNextRef.current
              ? navigationNextRef.current
              : undefined,
          }}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[A11y, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={cod} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={halo} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={lol} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={fortnite} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={apex} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={fifa} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nba} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={ssmash} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rocket} alt="cod" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={madden} alt="cod" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Games;
