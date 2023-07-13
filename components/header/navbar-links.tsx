import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const navLinks = [
  {
    id: 1,
    label: "Beri Pinjaman",
    href: "/",
  },
  {
    id: 2,
    label: "Ajukan Pinjaman",
    href: "/",
  },
  {
    id: 3,
    label: "Tentang Kami",
    href: "/",
  },
  {
    id: 4,
    label: "Blog",
    href: "/",
  },
];

export const NavbarLinks = () => {
  return (
    <nav className="flex items-center justify-center gap-1">
      {navLinks?.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            buttonVariants({
              variant: "ghost",
              class: "px-3 py-1 text-xs font-medium",
            })
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export const NavbarLinksMobile = () => {
  return (
    <nav className="flex flex-col items-start gap-2">
      {navLinks?.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            buttonVariants({
              variant: "ghost",
              class:
                "w-full -translate-x-4 justify-start font-semibold transition duration-200 ease-linear hover:translate-x-0",
            })
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export const NavbarButtonGroups = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "default",
            class: "px-8 py-1 text-xs font-semibold",
          })
        )}
      >
        Masuk
      </Link>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
            class: "px-8 py-1 text-xs font-semibold",
          })
        )}
      >
        Daftar
      </Link>
    </div>
  );
};

export const NavbarButtonGroupsMobile = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "default",
            class: "w-full font-semibold",
          })
        )}
      >
        Masuk
      </Link>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
            class: "w-full font-semibold",
          })
        )}
      >
        Daftar
      </Link>
    </div>
  );
};
