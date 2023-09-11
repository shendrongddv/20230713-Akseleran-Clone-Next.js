"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Progress } from "../ui/progress";

import Asset from "@/public/thumbnail.jpg";
import { CalendarCheck, InfoIcon, ShieldCheck, Star } from "lucide-react";

type CampaignCardProps = {
  campaign_name: string;
  campaign_time_remaining: string;
  loan_credit_rating: string;
  has_insurance: boolean;
  funded_percentage: number;
  total_investors: number;
  max_funding: number;
  installment_length: string;
  flat_interest: number;
  have_collateral: boolean;
};

export const CampaignCardB = ({
  campaign_name,
  campaign_time_remaining,
  loan_credit_rating,
  has_insurance,
  funded_percentage,
  total_investors,
  max_funding,
  installment_length,
  flat_interest,
  have_collateral,
}: CampaignCardProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(funded_percentage), 500);
    return () => clearTimeout(timer);
  }, [funded_percentage]);

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
            {campaign_name}
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
            {campaign_time_remaining}
          </div>
          {/* ### Badge */}
          <div className="flex items-center justify-center gap-1 rounded-full bg-[#A697C9] px-2 py-1 text-[10px] font-medium text-white">
            <Star className="h-3 w-3" />
            {loan_credit_rating}
          </div>
          {/* ### Badge */}
          {has_insurance ? (
            <div className="flex items-center justify-center gap-1 rounded-full bg-[#C5EDFF] px-2 py-1 text-[10px] font-medium text-primary-foreground">
              <ShieldCheck className="h-3 w-3" />
              Proteksi Asuransi
            </div>
          ) : null}
        </div>

        {/* ## Milestone */}
        <div className="space-y-2">
          <p>
            Telah terkumpul&nbsp;
            <span className="font-bold">{funded_percentage}%</span>
            &nbsp;dari&nbsp;
            <span className="font-bold">{total_investors}</span>
            &nbsp;lenders
          </p>
          <Progress value={progress} className="h-2 w-full" />
        </div>

        {/* ## Details */}
        <div className="grid grid-cols-2 gap-3">
          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Jumlah Pinjaman</small>
            <span className="font-bold">Rp&nbsp;{max_funding}</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Tenor</small>
            <span className="font-bold">{installment_length}&nbsp;Bulan</span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="flex items-center gap-1 text-xs">
              Bunga efektif
              <InfoIcon className="h-3 w-3" />
            </small>
            <span className="font-bold">
              {Math.floor(flat_interest * 100) / 100}&nbsp;%
            </span>
          </div>

          {/* ### Col */}
          <div className="flex flex-col">
            <small className="text-xs">Agunan</small>
            <span className="font-bold">
              {have_collateral ? "Ada" : "Tidak ada"}
            </span>
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
