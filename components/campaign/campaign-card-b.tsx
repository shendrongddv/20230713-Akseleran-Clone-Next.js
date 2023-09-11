"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Progress } from "../ui/progress";

import Asset from "@/public/thumbnail.jpg";
import { CalendarCheck, InfoIcon, ShieldCheck, Star } from "lucide-react";

export const CampaignCardB = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="group overflow-hidden rounded-xl border bg-background transition duration-300 hover:shadow-lg">
      {/* # Image & Title */}
      <div className="relative overflow-hidden">
        <Image
          src={Asset}
          alt="Image"
          width={400}
          height={300}
          className="z-0 h-auto w-full scale-100 object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-b from-transparent from-50% to-black to-100% p-4">
          <h3 className="line-clamp-2 text-lg font-bold text-white">
            Pinjaman 17961/DF/329072-2/VIII/2023 Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </h3>
        </div>
      </div>

      {/* # Content */}
      <div className="grid gap-4 p-4 ">
        {/* ## Badges */}
        <div className="flex items-center justify-start gap-2">
          {/* ### Badge */}
          <div className="flex items-center justify-center gap-1 rounded-full bg-[#A3CA6E] px-2 py-1 text-[10px] font-medium text-white">
            <CalendarCheck className="h-3 w-3" />
            27 Hari lagi
          </div>
          {/* ### Badge */}
          <div className="flex items-center justify-center gap-1 rounded-full bg-[#A697C9] px-2 py-1 text-[10px] font-medium text-white">
            <Star className="h-3 w-3" />
            A+
          </div>
          {/* ### Badge */}
          <div className="flex items-center justify-center gap-1 rounded-full bg-[#C5EDFF] px-2 py-1 text-[10px] font-medium text-primary-foreground">
            <ShieldCheck className="h-3 w-3" />
            Proteksi Asuransi
          </div>
        </div>

        {/* ## Milestone */}
        <div className="space-y-2">
          <p>
            Telah terkumpul&nbsp;
            <span className="font-bold">48.6%</span>
            &nbsp;dari&nbsp;
            <span className="font-bold">63</span>
            &nbsp;lenders
          </p>
          <Progress value={progress} className="h-2 w-full" />
        </div>

        {/* ## Details */}
        <div className="grid grid-cols-2 gap-3">
          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Jumlah Pinjaman</small>
            <span className="font-bold">Rp 170.000.000</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Tenor</small>
            <span className="font-bold">3 Bulan</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="flex items-center gap-1 text-xs">
              Bunga efektif
              <InfoIcon className="h-3 w-3" />
            </small>
            <span className="font-bold">10.00 %</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Agunan</small>
            <span className="font-bold">Tidak ada</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Frek. angsuran pokok</small>
            <span className="font-bold">Diakhir tenor</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Frek. angsuran bunga</small>
            <span className="font-bold">Bulanan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
