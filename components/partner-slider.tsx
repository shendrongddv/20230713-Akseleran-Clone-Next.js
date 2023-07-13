"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { PartnerCardMobile } from "./partner-card.tsx";

// Dummy Data
const partner = [
  {
    id: 1,
    name: "Midtrans",
    img: "midtrans.png",
    href: "/",
  },
  {
    id: 21,
    name: "Pefindo",
    img: "pefindo.svg",
    href: "/",
  },
  {
    id: 3,
    name: "Tokopedia",
    img: "tokopedia.svg",
    href: "/",
  },
  {
    id: 4,
    name: "Bukalapak",
    img: "bukalapak.svg",
    href: "/",
  },
  {
    id: 5,
    name: "Qasir",
    img: "qasir.svg",
    href: "/",
  },
  {
    id: 6,
    name: "Hipmi",
    img: "hipmi.png",
    href: "/",
  },
  {
    id: 7,
    name: "Hippi",
    img: "hippi.png",
    href: "/",
  },
  {
    id: 8,
    name: "Ralali",
    img: "ralali.png",
    href: "/",
  },
  {
    id: 9,
    name: "Bhinneka",
    img: "bhinneka.svg",
    href: "/",
  },
  {
    id: 10,
    name: "Jojonomic",
    img: "jojonomic.png",
    href: "/",
  },
];
// Partner Slider
const PartnerSlider = () => {
  const items = partner;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="fade"
      // navigation
      centeredSlides={true}
      spaceBetween={0}
      // pagination={{ dynamicBullets: true, clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
      }}
      className="h-full"
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id} className="h-full bg-white">
          <PartnerCardMobile
            id={item.id}
            name={item.name}
            img={item.img}
            href={item.href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnerSlider;
