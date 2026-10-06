import LandingImage from "@/public/home/seven/landing_image.png";
import Image from "next/image";
import Link from "next/link";

const landingImgStyle = {
  width: "800px",
  height: "550px",
};
export function SeventhSection() {
  return (
    <div className="relative grid items-center gap-8 overflow-hidden bg-primary px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-xl text-center text-white lg:mx-0 lg:text-left"><p className="text-xs font-bold tracking-[0.18em] text-secondary-light">HOT, FRESH &amp; ON ITS WAY</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">We deliver!</h2><p className="mt-4 text-sm leading-6 text-white/75 sm:text-base">Take &apos;n&apos; Bake just got easier. Order delivery through our website and enjoy fresh pizza at home.</p><Link href="/stores" className="mt-7 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-secondary-light">Find delivery near you</Link>
      </div>
      <div className="mx-auto w-full max-w-xl"><Image src={LandingImage} alt="Pizza delivery" style={landingImgStyle} className="h-auto w-full" />
      </div>
    </div>
  );
}
