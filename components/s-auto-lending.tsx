import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import Asset from "@/public/auto-lending.svg";

export const AutoLendingSection = () => {
  return (
    <section className="bg-secondary-foreground px-4 py-16">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="md:w-5/12">
          <Image
            src={Asset}
            alt="Auto Lending"
            width={400}
            height={300}
            className="h-auto w-full"
          />
        </div>

        {/* Col */}
        <div className="flex flex-col gap-2 text-white md:w-6/12">
          <span className="large text-accent-foreground">Auto Lending</span>
          <h2 className="h2">Hemat Waktu. Hasil Optimal</h2>
          <p>
            Auto Lending merupakan fitur untuk memberikan pinjaman secara
            otomatis yang bertujuan untuk memudahkan lender tanpa harus
            menghabiskan waktu dalam mencari peluang pemberian pinjaman yang
            sesuai dengan preferensi.
          </p>
          <Link
            href="/"
            aria-label="Setup Auto Lending"
            className={cn(
              buttonVariants({
                variant: "accent",
                size: "default",
                className: "mt-6 sm:w-max",
              })
            )}
          >
            Setup Auto Lending
          </Link>
        </div>
      </div>
    </section>
  );
};
