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
import { MediaCardMobile } from "./media-card";

// Dummy Data
const media = [
  {
    id: 1,
    name: "e27",
    img: "e27.png",
    href: "/",
  },
  {
    id: 2,
    name: "Daily Social",
    img: "daily-social.svg",
    href: "/",
  },
  {
    id: 3,
    name: "Tech In Asia",
    img: "tech-in-asia.png",
    href: "/",
  },
  {
    id: 4,
    name: "Deal Street Asia",
    img: "deal-street-asia.png",
    href: "/",
  },
  {
    id: 5,
    name: "Republika",
    img: "republika.png",
    href: "/",
  },
  {
    id: 6,
    name: "Kontan",
    img: "kontan.png",
    href: "/",
  },
  {
    id: 7,
    name: "Koran Tempo",
    img: "koran-tempo.png",
    href: "/",
  },
  {
    id: 8,
    name: "Sindo",
    img: "sindo.png",
    href: "/",
  },
  {
    id: 9,
    name: "Berita Satu",
    img: "berita-satu.png",
    href: "/",
  },
  {
    id: 10,
    name: "Jawa Pos",
    img: "jawa-pos.png",
    href: "/",
  },
  {
    id: 11,
    name: "Swasembada",
    img: "swasembada.png",
    href: "/",
  },
  {
    id: 12,
    name: "Warta Ekonomi",
    img: "warta-ekonomi.png",
    href: "/",
  },
  {
    id: 13,
    name: "Gatra",
    img: "gatra.png",
    href: "/",
  },
  {
    id: 14,
    name: "Bisnis Indonesia",
    img: "bisnis-indonesia.svg",
    href: "/",
  },
  {
    id: 15,
    name: "Industry",
    img: "industry.png",
    href: "/",
  },
  {
    id: 16,
    name: "Katadata",
    img: "katadata.png",
    href: "/",
  },
  {
    id: 17,
    name: "Kompas",
    img: "kompas.png",
    href: "/",
  },
  {
    id: 18,
    name: "Kumparan",
    img: "kumparan.png",
    href: "/",
  },
  {
    id: 19,
    name: "Koran Jakarta",
    img: "koran-jakarta.png",
    href: "/",
  },
  {
    id: 20,
    name: "Media Indonesia",
    img: "media-indonesia.png",
    href: "/",
  },
  {
    id: 21,
    name: "Bad Credit",
    img: "bad-credit.png",
    href: "/",
  },
  {
    id: 22,
    name: "Card Rates",
    img: "card-rates.png",
    href: "/",
  },
];

// Media Slider *
const MediaSlider = () => {
  const items = media;

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
        <SwiperSlide key={item.id} className="h-full w-full bg-[#f7f7f7]">
          <MediaCardMobile
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

export default MediaSlider;
