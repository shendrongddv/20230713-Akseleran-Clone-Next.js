import { LoanStatisticCard } from "./c-loan-statistic";

export const LoanStatisticSection = () => {
  return (
    <section className="bg-secondary-foreground px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <div className="flex flex-col gap-2 text-white md:w-3/5">
          <h2 className="h2">Akseleran dalam Angka</h2>
          <p>
            Ikuti perjalanan Akseleran dalam mengakselerasikan kemajuan UKM di
            Indonesia dan pengembangan dana masyarakat yang mendukungnya.
          </p>
        </div>

        {/* # */}
        <LoanStatisticCard />
      </div>
    </section>
  );
};
