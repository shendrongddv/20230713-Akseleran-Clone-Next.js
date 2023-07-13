import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PartnerCardMobileProps {
  id: number;
  name: string;
  img: string;
  href: string;
}

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

// Partner Card Desktop
export const PartnerCardDesktop = () => {
  const items = partner;

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
                  src={`/partner/${item.img}`}
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

// Partner Card Mobile
export const PartnerCardMobile: React.FC<PartnerCardMobileProps> = ({
  id,
  name,
  img,
  href,
}) => {
  const items = partner;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src={`/partner/${img}`}
        alt={name}
        width={200}
        height={200}
        className="h-11 max-h-20 w-auto opacity-75 mix-blend-multiply  grayscale transition duration-500 ease-linear hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
};
