"use client";
import { UserRound, ShoppingCart } from "lucide-react";
import NavLink from "./navlink";
import Image from "next/image";
import LogoImage from "@/public/img/logo.png";
import { CartNavbarBTN } from "./cart-navbar-btn";
import Link from "next/link";
export function Navbar() {
  return (
    <nav className="inline-flex items-center justify-between bg-white fixed top-0 left-0 right-0 z-30 min-h-24">
      {/* first navlink */}
      <div className="inline-flex justify-around flex-1">
        {/* navlink */}
        <NavLink text={"Home"} path={"/"} />
        <NavLink text={"Menu"} path={"/menu"} />
        <NavLink text={"Deals"} path={"/deals"} />
      </div>
      {/* Logo Image */}
      <div className="navbar-img">
        <Image src={LogoImage} alt="logo picture" style={{}} />
      </div>

      {/* second navlink */}
      <div className="flex-1 justify-around inline-flex items-center">
        {/* navlink */}
        <NavLink text="Stores" path="#" />
        <NavLink text="Tracker" path="#" />

        <div className="lg:text-sm md:text-xm xl:text-base inline-flex">
          {/* siguup and logn  */}
          <Link
            href={"/login"}
            className="inline-flex items-center bg-btn-pill rounded-full  px-3 py-2 lg:px-3 xl:px-5 lg:py-2 xl:py-3  xl:mr-4 lg:mr-2"
          >
            <UserRound />
            <p className="ml-2">Login/Signup</p>
          </Link>

          {/* shopping cart */}
          <CartNavbarBTN />
        </div>
      </div>
    </nav>
  );
}
