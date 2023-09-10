import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import logoOJK from "@/public/ojk.png";
import logoAFPI from "@/public/afpi.png";

import ListingCard from "@/components/listing-card";
import PartnerSlider from "@/components/partner-slider";
import { PartnerCardDesktop } from "@/components/partner-card.tsx";
import MediaSlider from "@/components/media-slider";
import { MediaCardDesktop } from "@/components/media-card";
import ReviewSlider from "@/components/review-slider";

import { LenderBenefitSection } from "@/components/s-lender-benefit";
import { DownloadAppCTA } from "@/components/cta/cta-download-app";
import { ReksaDanaSection } from "@/components/s-reksa-dana";
import { FinancialCalculatorSection } from "@/components/s-financial-calculator";
import { AutoLendingSection } from "@/components/s-auto-lending";
import { LoanStatisticSection } from "@/components/s-loan-statistic";

const HomePage = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* Ongoing Campaign */}
      <section id="ongoing-campaign" className="px-6 pb-16 pt-32">
        <div className="container">
          <div className="flex flex-col gap-12">
            {/* # */}
            <h2 className="h2 text-primary">
              Kampanye Pinjaman yang Sedang Berlangsung
            </h2>

            {/* # Listings */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {items.map((item) => (
                <ListingCard key={item} />
              ))}
            </div>

            {/* # */}
            <Button variant="outline" className="w-full md:mx-auto md:w-max">
              Lihat lebih banyak
            </Button>
          </div>
        </div>
      </section>
      {/* ./ Ongoing Campaign */}

      {/* Lender Benefit */}
      <LenderBenefitSection />
      {/* ./ Lender Benefit */}

      {/* Reksadana */}
      <ReksaDanaSection />
      {/* ./ Reksadana */}

      {/* Financial Calculator */}
      <FinancialCalculatorSection />
      {/* ./ Financial Calculator */}

      {/* Auto Lending */}
      <AutoLendingSection />
      {/* ./ Auto Lending */}

      {/* Download App */}
      <DownloadAppCTA />
      {/* ./ Download App */}

      {/* Stats */}
      <LoanStatisticSection />
      {/* ./ Stats */}

      {/* Reviews */}
      <section id="reviews" className="px-6 py-16">
        <div className="container">
          <div className="w-full">
            <ReviewSlider />
          </div>
        </div>
      </section>
      {/* ./ Reviews */}

      {/* Covered */}
      <section id="reviews" className="w-full bg-[#f7f7f7] px-6 py-10 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            <span className="flex text-lg">Diliput oleh:</span>

            {/* Cards Desktop */}
            <div className="hidden flex-wrap items-center justify-center md:flex">
              {/* Card */}
              <MediaCardDesktop />
            </div>

            {/* Cards Mobile */}
            <div className="flex w-full md:hidden">
              <MediaSlider />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Covered */}

      {/* Partners */}
      <section id="partners" className="px-6 pb-8 pt-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            <span className="flex text-lg">Partner Kami :</span>

            {/* Partner Desktop */}
            <div className="hidden flex-wrap items-center justify-center md:flex">
              {/* Card */}
              <PartnerCardDesktop />
            </div>

            {/* Partner Mobile */}
            <div className="flex w-full md:hidden">
              <PartnerSlider />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Partners */}

      {/* Legalitas */}
      <section id="legalitas" className="px-6 py-16">
        <div className="container">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-evenly">
            <div className="flex w-full flex-col items-center text-center sm:w-4/12">
              <span className="text-xs md:text-sm">
                Telah Berizin dan Diawasi oleh
              </span>
              <Link href="/">
                <Image
                  src={logoOJK}
                  alt="OJK"
                  width={400}
                  height={400}
                  className="mt-6 h-16 w-auto sm:h-20"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-center text-center sm:w-4/12">
              <span className="text-xs md:text-sm">Anggota Terdaftar dari</span>
              <Link href="/">
                <Image
                  src={logoAFPI}
                  alt="OJK"
                  width={400}
                  height={400}
                  className="mt-6 h-16 w-auto sm:h-20"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Legalitas */}
    </>
  );
};

export default HomePage;
