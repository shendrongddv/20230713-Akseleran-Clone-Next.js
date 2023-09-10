import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import Asset from "@/public/reksa-dana.svg";

export const ReksaDanaSection = () => {
  return (
    <section className="bg-secondary-foreground px-4 py-16">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="md:w-5/12">
          <Image
            src={Asset}
            alt="Reksa Dana"
            width={400}
            height={300}
            className="h-auto w-full"
          />
        </div>

        {/* Col */}
        <div className="flex flex-col gap-2 text-white md:w-6/12">
          <span className="large text-accent-foreground">Reksa Dana</span>
          <h2 className="h2">Bebas Nganggur. Aktif Berkembang.</h2>
          <p>
            Tetap aktif kembangkan dana saat menanti peluang pendanaan
            Akseleran. Dengan membuka akun reksa dana hasil kerjasama Akseleran
            dengan Tanamduit, danamu jadi bebas nganggur dan dapat manfaat
            maksimal.
          </p>
          <Link
            href="/"
            aria-label="Buat Akun Reksa Dana"
            className={cn(
              buttonVariants({
                variant: "accent",
                size: "default",
                className: "mt-6 sm:w-max",
              })
            )}
          >
            Buat Akun Reksa Dana
          </Link>
        </div>
      </div>
    </section>
  );
};
