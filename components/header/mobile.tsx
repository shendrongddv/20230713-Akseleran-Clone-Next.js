import { Button } from "@/components/ui/button";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavbarButtonGroupsMobile, NavbarLinksMobile } from "./navbar-links";

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full px-6 pb-6 pt-16">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-16">
          <NavbarLinksMobile />
          <NavbarButtonGroupsMobile />
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
