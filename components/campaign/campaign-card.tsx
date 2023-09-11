"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

import { CalendarClock, CheckCircle, ShieldCheck, Star } from "lucide-react";
import Asset from "@/public/thumbnail.jpg";

export const Campaigncard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-xl border bg-background p-2 transition duration-300 hover:shadow-lg">
      {/* # */}
      <div className="aspect-video overflow-hidden rounded-lg">
        <Image
          src={Asset}
          alt="Campaign Name"
          width={400}
          height={300}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* # */}
      <div className="flex items-center gap-2">
        <Badge
          variant="default"
          className="flex items-center justify-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium leading-none text-white"
        >
          <CalendarClock className="h-3 w-3" />
          26 hari lagi
        </Badge>
        <Badge
          variant="destructive"
          className="flex items-center justify-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium leading-none text-white"
        >
          <Star className="h-3 w-3" />
          A+
        </Badge>
        <Badge
          variant="default"
          className="flex items-center justify-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium leading-none text-white"
        >
          <ShieldCheck className="h-3 w-3" />
          Proteksi Asuransi
        </Badge>
      </div>

      {/* # */}
      <div>
        <h3 className="h4 line-clamp-2">
          Pinjaman 17961/DF/329072-2/VIII/2023
        </h3>
      </div>

      {/* # */}
      <div className="flex flex-col gap-1 border-t pt-4">
        <span className="text-xs text-muted-foreground">Jumlah pinjaman:</span>
        <span className="h3">Rp 1.000.000</span>

        <p className="text-sm text-muted-foreground">
          Telah terkumpul&nbsp;
          <span className="font-bold">94,58%</span>&nbsp;dari&nbsp;
          <span className="font-bold">564</span>&nbsp;lenders.
        </p>
        <Progress value={progress} className="h-2 w-full" />
      </div>

      {/* # */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center gap-1 rounded-lg bg-slate-100 p-2 text-center">
          <small className="text-[10px] text-muted-foreground">Tenor</small>
          <span className="text-xl font-bold leading-none">2</span>
          <small className="text-[10px] text-muted-foreground">Bulan</small>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg bg-slate-100 p-2 text-center">
          <small className="text-[10px] text-muted-foreground">Bunga</small>
          <span className="text-xl font-bold leading-none">10.00%</span>
          <small className="text-[10px] text-muted-foreground">Bulanan</small>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg bg-slate-100 p-2 text-center">
          <small className="text-[10px] text-muted-foreground">Agunan</small>
          <CheckCircle className="h-5 w-5" />
          <small className="text-[10px] text-muted-foreground">Verified</small>
        </div>
      </div>

      {/* # */}
      <Link
        href="/"
        aria-label="Detail Kampanye"
        className={cn(
          buttonVariants({
            variant: "accent",
            size: "default",
            className: "w-full rounded-lg",
          })
        )}
      >
        Detail Kampanye
      </Link>
    </div>
  );
};
