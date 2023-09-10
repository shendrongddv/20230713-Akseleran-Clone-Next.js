import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const CampaignOngoingSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <h2 className="h2">Kampanye Pinjaman yang Sedang Berlangsung</h2>

        {/* # */}

        {/* # */}
        <Link
          href="/"
          aria-label="Lihat Lebih Banyak"
          className={cn(
            buttonVariants({
              variant: "accent",
              size: "default",
              className: "mx-auto sm:w-max",
            })
          )}
        >
          Lihat Lebih Banyak
        </Link>
      </div>
    </section>
  );
};
