import { AutoLendingSection } from "@/components/s-auto-lending";
import { CampaignCompletedSection } from "@/components/s-campaign-completed";
import { CampaignOngoingSection } from "@/components/s-campaign-ongoing";
import { LoanLenderSection } from "@/components/s-loan-lender";

const BeriPinjamanPage = () => {
  return (
    <>
      {/* Page Header */}
      <LoanLenderSection />

      {/* Campaign Ongoing */}
      <CampaignOngoingSection />

      {/* Campaign Completed */}
      <CampaignCompletedSection />

      {/* Auto Lending */}
      <AutoLendingSection />
      {/* ./ Auto Lending */}
    </>
  );
};

export default BeriPinjamanPage;
