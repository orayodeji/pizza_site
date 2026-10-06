import Image from "next/image";
import LandingImage from "@/public/img/photo_1.png";
import Link from "next/link";

export function FirstSection() {
  return (
    <div className="relative flex min-h-[min(42rem,calc(100vh-6rem))] items-center justify-center overflow-hidden bg-primary px-4 py-8 sm:px-6">
      <Image
        src={LandingImage}
        alt="Fresh pizza and bakery favourites"
        priority
        sizes="(max-width: 768px) 100vw, 900px"
        className="h-auto w-full max-w-5xl object-contain"
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2"><Link href="/menu" className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-primary shadow-lg transition hover:bg-secondary-light">Explore the menu</Link></div>
    </div>
  );
}
