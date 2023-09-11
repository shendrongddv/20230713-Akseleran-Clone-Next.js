import ReviewSlider from "@/components/review-slider";

import { LenderBenefitSection } from "@/components/s-lender-benefit";
import { DownloadAppCTA } from "@/components/cta/cta-download-app";
import { ReksaDanaSection } from "@/components/s-reksa-dana";
import { FinancialCalculatorSection } from "@/components/s-financial-calculator";
import { AutoLendingSection } from "@/components/s-auto-lending";
import { LoanStatisticSection } from "@/components/s-loan-statistic";
import { MediaPartnerSection } from "@/components/s-media-partner";
import { LegalitySection } from "@/components/s-legality";

import { CampaignOngoingSection } from "@/components/s-campaign-ongoing";

const HomePage = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* Ongoing Campaign */}
      <div className="mt-12"></div>
      <CampaignOngoingSection />
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

      {/* Media & Partner */}
      <MediaPartnerSection />
      {/* ./ Media & Partner */}

      {/* Legalitas */}
      <LegalitySection />
      {/* ./ Legalitas */}
    </>
  );
};

export default HomePage;
