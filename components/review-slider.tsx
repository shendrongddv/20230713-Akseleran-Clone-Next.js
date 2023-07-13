"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import ReviewCard from "./review-card";

// Dummy Data
const reviews = [
  {
    id: "839315ff-41be-5591-8498-affc1ac85a09",
    name: "Stanley Brewer",
    job: "Pekerjaan",
    city: "Cambodia",
    img: "51",
    text: "up useful figure low education lungs alive raise living knife calm they mad yard pan wrapped paint drive surrounded that suggest bell she ten stronger with mud tin due farther honor tight yourself larger manner water numeral see entirely during red battle particular college rope team writing mother.",
  },
  {
    id: "2bb6178b-2018-53ea-8de0-a8a23401ddc2",
    name: "Allie Ward",
    job: "Pekerjaan",
    city: "St. Barthélemy",
    img: "26",
    text: "shoot specific to captured mountain pitch sunlight stairs military rough colony studying city beat pair skill window glad business unusual dust written golden movement calm loud dirt additional perhaps therefore arrangement gift trip chapter getting stock made cool my stand setting discovery orbit mirror policeman could highest breathing.",
  },
  {
    id: "7144bfa7-d4a0-56bc-a7e3-891f52a06a33",
    name: "Clyde Long",
    job: "Pekerjaan",
    city: "Somalia",
    img: "40",
    text: "huge term traffic joined shot graph difference pack toward worry quick underline nice daughter began cream shout work race boy visitor copy shake brain replied remember such school temperature grain sleep office someone heading slight religious uncle loud making skin feed apartment planet type tree attempt direction brass.",
  },
  {
    id: "846b261a-b904-5257-aadb-d26a37f8964b",
    name: "Lawrence Huff",
    job: "Pekerjaan",
    city: "Mauritius",
    img: "35",
    text: "yard mysterious combination soft begun syllable rapidly greatly later birthday piece running underline protection plenty supply angry lie when particular behavior problem little map saddle its size stop cake pale structure quietly common rising across nine somebody ruler solution forward pot lower effort company orange over guard exact.",
  },
  {
    id: "ace717fa-f36f-5afd-b410-1165327807db",
    name: "Dylan Coleman",
    job: "Pekerjaan",
    city: "American Samoa",
    img: "10",
    text: "root command stood hay mysterious watch buy rest slept movie officer group silly scene behavior raise planning share art free dig military action plastic notice silver none flight valley sheet should each exciting window cave compass entire butter remove cap harbor canal blow were affect rock exclaimed work.",
  },
  {
    id: "ec359aa1-5b04-5332-9aa4-995d3c126cb1",
    name: "Charlie Hughes",
    job: "Pekerjaan",
    city: "Seychelles",
    img: "34",
    text: "sand best atomic pie conversation hollow especially leg smooth bank funny settle opinion good already tape some loud brick feature sky opportunity sudden do stop energy doctor positive policeman symbol tales room floating valuable stay street deep would sheep right spirit iron especially affect enemy throat sit moon.",
  },
  {
    id: "cbba40f5-7705-567d-8359-ef0f29df15c4",
    name: "Bessie Blair",
    job: "Pekerjaan",
    city: "South Africa",
    img: "11",
    text: "finish flies liquid make spirit snake seems small rather allow pick scientific increase making taste motor beside method cheese outline dinner conversation closely among official am total may drove elephant quietly certain flies tune answer last border mouth black minerals sister draw goes follow evidence remove throw one.",
  },
  {
    id: "5280a3ea-ec04-57f5-9ed8-70c49d1b2451",
    name: "Jessie Curtis",
    job: "Pekerjaan",
    city: "Dominica",
    img: "1",
    text: "too use smell finally angry is share saved notice tie respect lying mountain drink took fed shorter bring changing firm flower which method care path spend thee straw leave girl wrapped noun place anyway rush mainly border balance eager steam noise watch nest duty hungry firm party slept.",
  },
  {
    id: "b2edab7c-6728-5756-8c1e-eb12d2085ed2",
    name: "Victor Blair",
    job: "Pekerjaan",
    city: "Slovakia",
    img: "45",
    text: "simply out by successful sea spell noise rocket myself age however rich white being success lower tell farm silence human coach book fight friend understanding low sound children square active circle bell mysterious curious piece television natural from anywhere burn exchange flight last occasionally twenty corn however parts.",
  },
  {
    id: "374386f4-c357-56ef-95f1-9dde151fca3b",
    name: "Minerva Stephens",
    job: "Pekerjaan",
    city: "Greenland",
    img: "59",
    text: "plural enemy got notice tank poem bear shown range shake effect manufacturing choose stop knew eleven wrapped thrown no different room pink seeing shade massage foot wear sail disappear held count morning experience fact depth has built lay science seed sink suit telephone extra bright hidden tongue evidence.",
  },
];

const ReviewSlider = () => {
  const items = reviews;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // navigation
      pagination={{ dynamicBullets: true, clickable: true }}
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
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id}>
          <ReviewCard
            id={item.id}
            name={item.name}
            job={item.job}
            city={item.city}
            img={item.img}
            text={item.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
