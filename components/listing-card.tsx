"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

import { Star } from "lucide-react";

const ListingCard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border transition duration-100 ease-linear hover:shadow-lg">
      <div className="relative isolate flex items-center justify-center">
        <Image
          src="/campaigns/campaign-0.jpg"
          alt="campaign"
          width={400}
          height={300}
          className="h-full w-auto object-cover"
        />

        <div className="from absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-50% via-50% to-gray-900/80 to-100%"></div>

        <h4 className="absolute bottom-6 left-6 right-6 z-20 line-clamp-2 font-bold text-white">
          Pinjaman 16828/EL/345078-1/VII/2023 Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </h4>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex gap-2">
          <Badge variant="destructive" className="text-[10px]">
            28 hari lagi
          </Badge>
          <Badge variant="default" className="text-[10px]">
            <Star className="mr-1 h-[10px] w-[10px]" /> A+
          </Badge>
        </div>

        <p className="text-sm">
          Telah terkumpul <b>{progress}%</b> dari <b>6</b> lenders
        </p>

        <Progress value={progress} className="h-2 w-full" />

        <div className="grid grid-cols-2 gap-6 pt-4">
          <div className="space-y-4">
            <ListingInfo label="Jumlah pinjaman:" data="Rp 1.173.000.000" />
            <ListingInfo label="Bunga efektif:" data="10%" />
            <ListingInfo label="Frek. angsuran pokok:" data="Di akhir tenor" />
            <ListingInfo label="Frek. angsuran bunga:" data="Bulanan" />
          </div>
          <div className="space-y-4">
            <ListingInfo label="Tenor:" data="4 Bulan" />
            <ListingInfo label="Agunan:" data="Ada" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

// Listing Info
interface ListingInfoProps {
  label: string;
  data: string;
}
const ListingInfo: React.FC<ListingInfoProps> = ({ label, data }) => {
  return (
    <div>
      <span className="block text-[10px]">{label}</span>
      <span className="text-sm font-bold text-primary">{data}</span>
    </div>
  );
};
