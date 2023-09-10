import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { SheetClose } from "../ui/sheet";

export const NavbarButtons = () => {
  return (
    <>
      <Link
        href="/"
        aria-label="Masuk"
        className={cn(
          buttonVariants({
            variant: "primary",
            size: "default",
            className: "",
          })
        )}
      >
        Masuk
      </Link>

      <Link
        href="/"
        aria-label="Daftar"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "default",
            className: "",
          })
        )}
      >
        Daftar
      </Link>
    </>
  );
};

export const MobileNavbarButtons = () => {
  return (
    <>
      <SheetClose asChild>
        <Link
          href="/"
          aria-label="Masuk"
          className={cn(
            buttonVariants({
              variant: "primary",
              size: "default",
              className: "",
            })
          )}
        >
          Masuk
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link
          href="/"
          aria-label="Daftar"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className: "",
            })
          )}
        >
          Daftar
        </Link>
      </SheetClose>
    </>
  );
};
