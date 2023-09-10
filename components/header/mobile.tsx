import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileNavbarButtons } from "./navbar-buttons";
import { SiteLogoNavbar } from "../site-logo";
import { MobileNavbarLinks } from "./navbar-links";

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-4/5 flex-col gap-0 p-0"
      >
        <SheetHeader className="flex justify-start border-b p-4">
          <SheetClose asChild>
            <SiteLogoNavbar />
          </SheetClose>
        </SheetHeader>

        {/* SheetBody */}
        <MobileNavbarLinks />
        {/* ./ SheetBody */}

        <SheetFooter className="mt-auto grid grid-cols-2 gap-2 border-t p-4">
          <MobileNavbarButtons />
          <span className="col-span-2 mt-2 text-[10px] text-muted-foreground">
            © 2023 PT. Akseleran Keuangan Inklusif Indonesia
          </span>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
