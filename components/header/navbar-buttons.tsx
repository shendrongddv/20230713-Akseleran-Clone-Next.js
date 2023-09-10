import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const NavbarButtons = () => {
  return (
    <>
      <Link
        href="/"
        aria-label="Masuk"
        className={cn(
          buttonVariants({
            variant: "default",
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
