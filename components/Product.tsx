import React from "react";
import Image from "next/image";

import cash from "../public/images/cash.png";
import main from "../public/images/main.png";
import profile from "../public/images/profile.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const Product = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="flex flex-row items-start text-white justify-around">
      <div className="w-1/3 space-y-5">
        <h2 className="leading-none">Tired of "playing games"?</h2>
        <p>
          Experience the thrill of competition and earn rewards on our new
          gaming platform
        </p>
        <button
          className="btn-primary"
          onClick={() => openInNewTab("https://gamepayy.com")}
        >
          Become an early adopter
        </button>
      </div>
      <div className="w-2/3">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Image src={main} alt="main" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={profile} alt="profile" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={cash} alt="cash" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Product;
