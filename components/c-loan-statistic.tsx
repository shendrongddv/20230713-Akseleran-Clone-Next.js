import Image from "next/image";

export const LoanStatisticCard = () => {
  return (
    <div className="w-full">
      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 1 */}
            <StatCard icon="chart">
              <StatText title="TKB90" amount="99.6%" />
            </StatCard>
          </div>
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 4 */}
            <StatCard icon="giving-money">
              <StatText
                title="Total pinjaman tersalurkan"
                amount="Rp8.138.299.606.849"
              />
            </StatCard>
          </div>
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 2 */}
            <StatCard icon="moneybag">
              <StatText
                title="Total pinjaman tersalurkan 2023"
                amount="Rp1.544.003.229.365"
              />
            </StatCard>
          </div>
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 5 */}
            <StatCard icon="moneybag-check">
              <StatText
                title="Total outstanding pinjaman"
                amount="Rp633.165.212.007"
              />
            </StatCard>
          </div>
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 3 */}
            <StatCard icon="holding-money">
              <StatText title="Jumlah pendana" amount="214752" />
              <StatText title="Jumlah pendana aktif" amount="43601" />
            </StatCard>
          </div>
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 6 */}
            <StatCard icon="people">
              <StatText title="Jumlah peminjam" amount="4726" />
              <StatText title="Jumlah peminjam aktif" amount="1877" />
            </StatCard>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 7 */}
            <StatCard icon="moneybag-down">
              <StatText
                title="Nilai pinjaman terendah yang diterima"
                amount="Rp9.732.030"
              />
              <StatText title="Yang dikembalikan" amount="Rp11.016.268" />
              <StatText title="Total biaya" amount="Rp1.284.238" />
              <StatText title="Persentase biaya per hari" amount="0.055%" />
            </StatCard>
          </div>
          <div className="flex items-center rounded-xl border bg-white">
            {/* Card 8 */}
            <StatCard icon="moneybag-up">
              <StatText
                title="Nilai pinjaman tertinggi yang diterima"
                amount="Rp1.981.200.000"
              />
              <StatText title="Yang dikembalikan" amount="Rp2.125.333.333" />
              <StatText title="Total biaya" amount="Rp144.133.333" />
              <StatText title="Persentase biaya per hari" amount="0.081%" />
            </StatCard>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card
interface StatCardProps {
  icon:
    | "people"
    | "chart"
    | "moneybag"
    | "moneybag-check"
    | "moneybag-up"
    | "moneybag-down"
    | "holding-money"
    | "giving-money";
  children: React.ReactNode;
  className?: string;
}
const StatCard: React.FC<StatCardProps> = ({ children, icon, className }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4">
      <Image
        src={`/icons/${icon}.png`}
        alt="Image"
        width={48}
        height={48}
        className="mb-1 h-12 w-12"
      />
      {children}
    </div>
  );
};

// Stat Text
interface StatTextProps {
  title: string;
  amount: string;
}
const StatText: React.FC<StatTextProps> = ({ title, amount }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-xs">{title}</span>
      <span className="text-xl font-bold text-primary">{amount}</span>
    </div>
  );
};
