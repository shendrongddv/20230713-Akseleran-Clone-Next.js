import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import { Download, FileText, InfoIcon, LucideIcon, Upload } from "lucide-react";

const navLinks = [
  {
    id: 1,
    label: "Beri Pinjaman",
    href: "/beri-pinjaman",
    icon: Upload,
  },
  {
    id: 2,
    label: "Ajukan Pinjaman",
    href: "/ajukan-pinjaman",
    icon: Download,
  },
  {
    id: 3,
    label: "Tentang Kami",
    href: "/tentang-kami",
    icon: InfoIcon,
  },
  {
    id: 4,
    label: "Blog",
    href: "/blog",
    icon: FileText,
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

export const MobileNavbarLinks = () => {
  return (
    <nav className="flex flex-col gap-4 p-4">
      <ul className="grid grid-cols-2 gap-2">
        {navLinks.slice(0, 2)?.map((item) => (
          <li key={item.id}>
            <SingleItemAlpha
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          </li>
        ))}
      </ul>

      <ul className="grid gap-0 border-t pt-2">
        {navLinks.slice(2)?.map((item) => (
          <li key={item.id}>
            <SingleItemBeta
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

type SingleItemProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const SingleItemAlpha = ({ label, href, icon: Icon }: SingleItemProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "secondary",
            size: "default",
            className:
              "flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary-foreground px-2 py-3 text-center text-sm text-white hover:bg-primary-foreground hover:text-white",
          })
        )}
      >
        <div className="flex aspect-square items-center justify-center rounded-full border p-2 drop-shadow">
          <Icon className=" h-6 w-6" />
        </div>
        {label}
      </Link>
    </SheetClose>
  );
};

const SingleItemBeta = ({ label, href, icon: Icon }: SingleItemProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "link",
            size: "default",
            className:
              "flex items-center justify-start gap-2 !px-0 !py-0 text-foreground",
          })
        )}
      >
        <Icon className=" h-4 w-4 text-primary-foreground" />
        {label}
      </Link>
    </SheetClose>
  );
};
