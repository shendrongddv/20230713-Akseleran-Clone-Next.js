import Image from "next/image";
import BenefitCard from "./benefit-card";

import { dummyBorrowerBenefits } from "@/config/dummy";
import { type } from "os";
import { LucideIcon } from "lucide-react";

export const BorrowerBenefitSection = () => {
  const items = dummyBorrowerBenefits;

  return (
    <section className="px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <h2 className="h2">Keuntungan Mengajukan Pinjaman di Akseleran</h2>

        {/* # */}
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {items?.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

// Component: CardItem
type CardItemProps = {
  title: string;
  desc: string;
  icon: LucideIcon;
};
const CardItem = ({ title, desc, icon: Icon }: CardItemProps) => {
  return (
    <li className="flex flex-col items-start gap-2">
      {/* ## */}
      <div className="flex aspect-square items-center justify-center rounded-xl bg-secondary-foreground p-2 shadow">
        <Icon className="h-6 w-6 text-white" />
      </div>

      {/* ## */}
      <h3 className="h4 mt-2">{title}</h3>

      {/* ## */}
      <p>{desc}</p>
    </li>
  );
};
