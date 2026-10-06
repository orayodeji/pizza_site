"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({
  text,
  path,
}: {
  text: string;
  path: string;
}) {
  const pathname = usePathname();
  const isActive = path === "/" ? pathname === path : pathname.startsWith(path);

  return (
      <Link
        href={path}
        aria-current={isActive ? "page" : undefined}
        className={`relative inline-flex items-center px-2 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-200 sm:text-xs lg:text-sm ${isActive ? "text-primary" : "text-primary/65 hover:text-primary"} after:absolute after:bottom-1 after:left-2 after:right-2 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-200 ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}
      >
        {text}
      </Link>
  );
}
