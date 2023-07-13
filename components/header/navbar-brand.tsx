import Image from "next/image";
import Link from "next/link";

const NavbarBrand = () => {
  return (
    <div className="flex items-center divide-x">
      <div className="pr-2">
        <Link href="/">
          <Image
            src="/akseleran-logo.png"
            alt="Akseleran"
            width={672}
            height={212}
            className="h-8 w-auto md:h-10"
          />
        </Link>
      </div>

      <div className="pl-2">
        <div className="flex h-9 items-center justify-center gap-1 rounded bg-[#e7f1ff] px-2 md:h-10">
          <span className="flex flex-col text-[9px] md:flex-row md:text-[10px]">
            Go to{" "}
            <span className="font-bold text-primary">Akseleran Group</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarBrand;
