import Link from "next/link";

import { SiteLogoNavbar } from "../site-logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import NavbarMobile from "./mobile";
import { NavbarNav } from "./navbar-nav";
import { NavbarButtons } from "./navbar-buttons";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center justify-center gap-4">
            <SiteLogoNavbar />

            {/* Akseleran */}
            <Link
              href="https://www.akselerangroup.com/"
              aria-label="Akseleran Group"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className:
                    "flex h-full flex-col items-start gap-1 px-2 py-2 text-xs font-semibold leading-none",
                })
              )}
            >
              <span className="text-[8px] font-normal leading-none">Go to</span>
              Akseleran Group
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden items-center justify-center gap-2 md:flex">
            <NavbarNav />
            <NavbarButtons />
          </div>

          {/* Mobile */}
          <div className="flex items-center justify-center gap-2 md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </div>
    </header>
  );
};
