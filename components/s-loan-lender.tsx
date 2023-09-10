import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import Asset from "@/public/loan-lender.png";

export const LoanLenderSection = () => {
  return (
    <section className="bg-primary-foreground px-4 pb-16 pt-28">
      <div className="container flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col gap-2 text-white md:w-6/12">
          {/* # */}
          <h2 className="h2">
            Kembangkan dana lebih cepat, mulai dari Rp100 ribu
          </h2>

          {/* # */}
          <p>
            Berikan pinjaman ke kampanye UKM yang sedang berlangsung di bawah
            ini dan dapatkan imbal hasil rata-rata 9.5% s.d 10.5% per tahun.
            Hemat waktumu dengan pendanaan otomatis lewat fitur Auto Lending.
          </p>

          {/* # */}
          <div className="mt-6 flex flex-col gap-2 sm:w-max sm:flex-row md:items-center md:justify-center">
            {/* ## */}
            <Link
              href="/"
              aria-label="Setup Auto Lending"
              className={cn(
                buttonVariants({
                  variant: "accent",
                  size: "default",
                  className: "sm:w-max",
                })
              )}
            >
              Setup Auto Lending
            </Link>

            {/* ## */}
            <Link
              href="/"
              aria-label="Lihat Cara Memberikan Pinjaman"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "sm:w-max",
                })
              )}
            >
              Lihat Cara Memberikan Pinjaman
            </Link>
          </div>
        </div>

        {/* Col */}
        <div className="md:w-4/12">
          <Image
            src={Asset}
            alt="Beri Pinjaman"
            width={400}
            height={300}
            className="h-auto w-3/5 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};
