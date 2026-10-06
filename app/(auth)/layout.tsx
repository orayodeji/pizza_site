import "@/app/layout.css";
import ImgLogo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import footerLeft from "@/public/footer/footer_left_feather.png";
import footerRight from "@/public/footer/footer_right_feather.png";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-secondary-light px-4 py-8 sm:px-6">
      <div className="relative z-10 w-full max-w-2xl overflow-visible rounded-3xl border border-primary/10 bg-white shadow-2xl shadow-primary/15">
        <div className="flex justify-center rounded-t-3xl border-b border-primary/10 bg-secondary-light py-7">
          <Link href={"/"} aria-label="Return to Pizza Bakery home" className="rounded-full bg-white p-3 shadow-md transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <Image src={ImgLogo} alt="Pizza Bakery" width={112} height={112} className="h-24 w-24 object-contain sm:h-28 sm:w-28" priority />
          </Link>
        </div>
        {children}
      </div>
      <Image src={footerLeft} alt="" className="pointer-events-none absolute bottom-0 left-0 hidden opacity-35 md:block" />
      <Image src={footerRight} alt="" className="pointer-events-none absolute right-0 top-0 hidden opacity-35 md:block" />
    </div>
  );
}
