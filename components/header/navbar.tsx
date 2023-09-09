import { ThemeToggle } from "../theme-toggle";
import NavbarMobile from "./mobile";
import NavbarBrand from "./navbar-brand";
import { NavbarButtonGroups, NavbarLinks } from "./navbar-links";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white px-6">
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <NavbarBrand />

          {/* Navbar Links Desktop */}
          <div className="hidden items-center justify-center gap-4 md:flex">
            {/* Nav */}
            <NavbarLinks />

            {/* Button Group */}
            <NavbarButtonGroups />
            <ThemeToggle />
          </div>

          {/* Navbar Links Mobile */}
          <div className="flex md:hidden">
            <NavbarMobile />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
