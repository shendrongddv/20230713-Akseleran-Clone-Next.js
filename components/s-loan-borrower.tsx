import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import Asset from "@/public/load-borrower.svg";

export const LoanBorrowerSection = () => {
  return (
    <section className="bg-primary-foreground px-4 pb-16 pt-28">
      <div className="container flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col gap-2 text-white md:w-6/12">
          {/* # */}
          <h2 className="h2">
            Berbagai Fasilitas Pinjaman yang Mengerti Kebutuhanmu
          </h2>

          {/* # */}
          <p>
            Dapatkan fasilitas pinjaman dengan syarat yang mudah dan bunga
            bersahabat, untuk mempercepat pertumbuhan usaha maupun bagi individu
            yang membutuhkan dana mendesak.
          </p>

          {/* # */}
          <div className="mt-6 flex flex-col gap-2 sm:w-max sm:flex-row md:items-center md:justify-center">
            {/* ## */}
            <Link
              href="/"
              aria-label="Ajukan Fasilitas"
              className={cn(
                buttonVariants({
                  variant: "accent",
                  size: "default",
                  className: "sm:w-max",
                })
              )}
            >
              Ajukan Fasilitas
            </Link>

            {/* ## */}
            <Link
              href="/"
              aria-label="Lihat Cara Pengajuan Pinjaman"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "sm:w-max",
                })
              )}
            >
              Lihat Cara Pengajuan Pinjaman
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
