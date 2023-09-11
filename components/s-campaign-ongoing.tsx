import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Campaigncard } from "./campaign/campaign-card";
import { CampaignCardB } from "./campaign/campaign-card-b";

export const CampaignOngoingSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <h2 className="h2">Kampanye Pinjaman yang Sedang Berlangsung</h2>

        {/* # */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <Campaigncard />
          <CampaignCardB />
        </div>

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
