import Image from "next/image";

import logoOJK from "@/public/ojk.png";
import logoAFPI from "@/public/afpi.png";

export const LegalitySection = () => {
  return (
    <section id="legalitas" className="px-6 py-16">
      <div className="container flex items-center justify-center">
        {/* Col */}
        <div className="flex w-1/2 flex-col items-center gap-2 sm:gap-4">
          <span className="text-xs text-muted-foreground md:text-sm">
            Diawasi oleh:
          </span>
          <Image
            src={logoOJK}
            alt="OJK"
            width={400}
            height={400}
            className="h-11 w-auto md:h-20"
          />
        </div>

        {/* Col */}
        <div className="flex w-1/2 flex-col items-center gap-2 sm:gap-4">
          <span className="text-xs text-muted-foreground md:text-sm">
            Anggota dari:
          </span>
          <Image
            src={logoAFPI}
            alt="OJK"
            width={400}
            height={400}
            className="h-11 w-auto md:h-20"
          />
        </div>
      </div>
    </section>
  );
};
