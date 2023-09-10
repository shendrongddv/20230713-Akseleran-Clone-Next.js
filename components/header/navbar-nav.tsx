import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

import { siteMainNav } from "@/config/site";

export const NavbarNav = () => {
  const items = siteMainNav;

  return (
    <ul className="flex items-center justify-center gap-2">
      {items?.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            aria-label={item.label}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "default",
                className: "",
              })
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
