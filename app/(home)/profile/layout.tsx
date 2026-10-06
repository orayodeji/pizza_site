"use client";
import { usePathname, useRouter } from "next/navigation";
import { ProfileTabRoutes } from "@/utils/menu";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("pizza-bakery-user");
    window.dispatchEvent(new Event("pizza-bakery-user-change"));
    router.replace("/");
  };

  return (
    <div className="px-44 py-5 bg-primary min-h-[calc(100vh-6rem)">
      <p className="mb-3 text-base font-bold text-white">
        <span className="bg-secondary text-black/70 rounded-full p-1 mr-2">
          {ProfileTabRoutes.find((obj) => obj.path === pathname)?.id}{" "}
        </span>
        {ProfileTabRoutes.find((obj) => obj.path === pathname)?.name}
      </p>
      <div className="h-full flex border rounded-md border-primary/25 gap-0.5 min-h-[calc(100vh-12rem)] bg-white">
        <div className="flex h-full w-3/10 flex-col py-8 px-6 border-r border-primary/25 shadow-2xs shadow-primary/25">
          <p className="text-xl text-black font-bold">My Profile</p>

          {ProfileTabRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={`flex ${pathname === route.path ? "bg-secondary/80 text-primary" : ""}  my-3 py-4 px-3 rounded-md`}
            >
              <route.icon size={24} className="stroke-3" />
              <p className="ml-3 text-sm font-bold">{route.name}</p>
            </Link>
          ))}
          <button type="button" onClick={logout} className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 px-4 py-3 text-sm font-bold text-primary transition hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><LogOut size={17} aria-hidden="true" /> Log out</button>
        </div>

        <div className="w-7/10 py-8 px-6 shadow-2xs shadow-primary/25">
          {children}
        </div>
      </div>
    </div>
  );
}
