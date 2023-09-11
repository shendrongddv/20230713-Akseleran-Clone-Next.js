import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { CampaignCardB } from "./campaign/campaign-card-b";

import { dummyCampaignCompleted } from "@/config/dummy";

export const CampaignCompletedSection = () => {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <h2 className="h2">
          Kampanye Pinjaman yang Sudah Berhasil Menggalang Dana
        </h2>

        {/* # */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {dummyCampaignCompleted?.map((item) => (
            <CampaignCardB
              key={item.id}
              campaign_name={item.campaign_name}
              campaign_time_remaining={item.campaign_time_remaining}
              cover={item.cover}
              loan_credit_rating={item.loan_credit_rating}
              has_insurance={item.has_insurance}
              funded_percentage={item.funded_percentage}
              total_investors={item.total_investors}
              max_funding={item.max_funding}
              installment_length={item.installment_length}
              flat_interest={item.flat_interest}
              have_collateral={item.have_collateral}
              installment_payment_freq={item.installment_payment_freq}
              interest_payment_freq={item.interest_payment_freq}
            />
          ))}
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
