"use client";
import { UserRound } from "lucide-react";
import NavLink from "./navlink";
import Image from "next/image";
import LogoImage from "@/public/img/logo.png";
import { CartNavbarBTN } from "./cart-navbar-btn";
import Link from "next/link";
import { useEffect, useState } from "react";
export function Navbar() {
  const [userName, setUserName] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const savedUser = localStorage.getItem("pizza-bakery-user");
      return savedUser ? (JSON.parse(savedUser) as { name?: string }).name ?? null : null;
    } catch {
      localStorage.removeItem("pizza-bakery-user");
      return null;
    }
  });
  useEffect(() => {
    const syncUser = () => {
      try {
        const savedUser = localStorage.getItem("pizza-bakery-user");
        setUserName(savedUser ? (JSON.parse(savedUser) as { name?: string }).name ?? null : null);
      } catch {
        setUserName(null);
      }
    };
    window.addEventListener("pizza-bakery-user-change", syncUser);
    window.addEventListener("storage", syncUser);
    return () => {
      window.removeEventListener("pizza-bakery-user-change", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);
  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-30 flex min-h-24 items-center justify-between border-b border-primary/10 bg-white/95 px-3 shadow-sm backdrop-blur sm:px-5">
      {/* first navlink */}
      <div className="flex flex-1 items-center justify-center gap-1 sm:gap-3 lg:gap-6">
        {/* navlink */}
        <NavLink text={"Home"} path={"/"} />
        <NavLink text={"Menu"} path={"/menu"} />
        <NavLink text={"Deals"} path={"/deals"} />
      </div>
      {/* Logo Image */}
      <div className="navbar-img shrink-0 px-2">
        <Image src={LogoImage} alt="logo picture" style={{}} />
      </div>

      {/* second navlink */}
      <div className="flex flex-1 items-center justify-center gap-1 sm:gap-3 lg:gap-6">
        {/* navlink */}
        <NavLink text="Stores" path="/stores" />
        <NavLink text="Tracker" path="/tracker" />

        <div className="inline-flex items-center gap-2">
          {/* siguup and logn  */}
          <Link
            href={userName ? "/profile" : "/login"}
            aria-label={userName ? `Open ${userName}'s profile` : "Login or sign up"}
            className="inline-flex items-center rounded-full bg-btn-pill px-3 py-2 text-[11px] font-bold uppercase tracking-[0.07em] text-primary transition hover:bg-secondary-light sm:text-xs lg:px-4"
          >
            <UserRound size={17} aria-hidden="true" />
            <span className="ml-1.5 hidden lg:inline">{userName ?? "Login / Sign up"}</span>
          </Link>

          {/* shopping cart */}
          <CartNavbarBTN />
        </div>
      </div>
    </nav>
  );
}
