import Image from "next/image";
import Link from "next/link";

import SiteLogo from "@/public/akseleran-logo.png";

export const SiteLogoNavbar = () => {
  return (
    <Link href="/" aria-label="Akseleran">
      <Image
        src={SiteLogo}
        alt="Akseleran"
        priority
        width={672}
        height={212}
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
};

export const SiteLogoFooter = () => {
  return (
    <Link href="/" aria-label="Akseleran">
      <Image
        src={SiteLogo}
        alt="Akseleran"
        width={672}
        height={212}
        className="h-10 w-auto"
      />
    </Link>
  );
};
