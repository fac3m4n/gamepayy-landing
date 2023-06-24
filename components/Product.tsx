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
    <section className="flex flex-col sm:flex-row items-start text-white justify-around space-y-4 sm:space-y-0">
      <div className="w-full sm:w-1/3 space-y-5">
        <h2 className="leading-none">Tired of "playing games"?</h2>
        <p>
          Experience the thrill of competition and earn rewards on our new
          gaming platform
        </p>
        <button
          className="btn-primary"
          onClick={() => openInNewTab("https://forms.gle/5SNz7ZEy7NfYsscm9")}
        >
          Become an early adopter
        </button>
      </div>
      <div className="w-full sm:w-2/3">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Image src={main} alt="main" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={profile} alt="profile" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={cash} alt="cash" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Product;
