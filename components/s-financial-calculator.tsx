import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import Asset from "@/public/calculator.png";

export const FinancialCalculatorSection = () => {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="container flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between">
        {/* Col */}
        <div className="md:w-5/12">
          <Image
            src={Asset}
            alt="Kalkulator Finansial"
            width={400}
            height={300}
            className="h-auto w-full"
          />
        </div>

        {/* Col */}
        <div className="flex flex-col gap-2 md:w-6/12">
          <span className="large text-primary-foreground">
            Kalkulator Finansial
          </span>
          <h2 className="h2">Rencanakan Masa Depanmu Hari Ini!</h2>
          <p>
            Hitung rencana pendanaanmu untuk mendapatkan kondisi keuangan yang
            lebih terencana di masa depan.
          </p>
          <Link
            href="/"
            aria-label="Kalkulator Finansial"
            className={cn(
              buttonVariants({
                variant: "accent",
                size: "default",
                className: "mt-6 sm:w-max",
              })
            )}
          >
            Kalkulator Finansial
          </Link>
        </div>
      </div>
    </section>
  );
};
