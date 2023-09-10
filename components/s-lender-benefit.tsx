import Image from "next/image";
import BenefitCard from "./benefit-card";

import { dummyLenderBenefits } from "@/config/dummy";

export const LenderBenefitSection = () => {
  const items = dummyLenderBenefits;

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <h2 className="h2 text-primary-foreground">
          Kelebihan Memberikan Pinjaman di Akseleran
        </h2>

        {/* # */}
        <ul className="grid gap-8 sm:grid-cols-2 md:gap-16">
          {items?.map((item) => (
            <li key={item.id} className="flex flex-col items-start gap-2">
              {/* ## */}
              <Image
                src={`/${item.media}`}
                alt={item.title}
                width={400}
                height={300}
                className="h-16 w-auto md:h-20"
              />

              {/* ## */}
              <h3 className="h3 mt-2 w-4/5">{item.title}</h3>

              {/* ## */}
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
