"use client";
import Image from "next/image";
import Link from "next/link";
import CustumButton from "./CustumButton";
type NavbarProps = {};
const Navbar = ({}: NavbarProps) => {
  return (
    <header className="absolute w-full z-10">
      <nav className="max-w-[1440px] mx-auto justify-between flex items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt={"Car Hub Logo"}
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustumButton
          title={"Sign In"}
          type={"button"}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={() => {}}
        />
      </nav>
    </header>
  );
};
export default Navbar;
