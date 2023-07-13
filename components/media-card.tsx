import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MediaCardMobileProps {
  id: number;
  name: string;
  img: string;
  href: string;
}

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

// Media Card Desktop
export const MediaCardDesktop = () => {
  const items = media;

  return (
    <>
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center px-8 py-6 md:w-1/5"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={`/media/${item.img}`}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="max-h-12 w-auto opacity-75 mix-blend-multiply grayscale transition duration-500 ease-linear hover:opacity-100 hover:grayscale-0"
                />
              </TooltipTrigger>
              <TooltipContent>
                <span className="text-xs">{item.name}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </>
  );
};

// Media Card Mobile
export const MediaCardMobile: React.FC<MediaCardMobileProps> = ({
  id,
  name,
  img,
  href,
}) => {
  const items = media;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src={`/media/${img}`}
        alt={name}
        width={200}
        height={200}
        className="h-11 max-h-20 w-auto opacity-75 mix-blend-multiply  grayscale transition duration-500 ease-linear hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
};
