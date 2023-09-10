import { AutoLendingSection } from "@/components/s-auto-lending";
import { BorrowerBenefitSection } from "@/components/s-borrower-benefit";
import { LoanBorrowerSection } from "@/components/s-loan-borrower";

const BeriPinjamanPage = () => {
  return (
    <>
      {/* Page Header */}
      <LoanBorrowerSection />

      {/* Benefit for Borrower */}
      <BorrowerBenefitSection />
    </>
  );
};

export default BeriPinjamanPage;
