"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/footer/footer_fb.png";
import logo2 from "@/public/footer/footer_ig.png";
import logo3 from "@/public/footer/footer_yt.png";
import logo4 from "@/public/footer/footer_tw.png";

type LogoProps = {
  id: number;
  photoSrc: string | StaticImageData;
  name: string;
};

const LogoFooterTiles: LogoProps[] = [
  { photoSrc: logo1, id: 1, name: "facebook" },
  { photoSrc: logo2, id: 2, name: "instagram" },
  { photoSrc: logo3, id: 3, name: "youtube" },
  { photoSrc: logo4, id: 4, name: "twitter" },
];

export function Footer() {
  return (
    <footer className="w-full min-h-60 relative grid grid-cols-5 bg-white 2xl:px-52 xl:px-44 md:px-16 pt-16 pb-4 xl:gap-8 md:gap-4">
      <div className=" font-semibold px-4 xl:text-xl md:text-lg">
        <Link href="#" className="hover:font-bold block">
          Menu
        </Link>
        <Link href="#" className="hover:font-bold block mt-8">
          Deals
        </Link>
        <Link href="#" className="hover:font-bold block mt-8">
          Cart
        </Link>
      </div>
      <div className=" font-semibold px-4 xl:text-xl md:text-lg">
        <Link href="#" className="hover:font-bold block">
          Stores
        </Link>
        <Link href="#" className="hover:font-bold block mt-8">
          Tracker
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/img/logo.png"
          alt="logo picture"
          width={163}
          height={163}
          style={{}}
        />
        <div className="flex justify-around w-full">
          {LogoFooterTiles.map((obj, index) => (
            <div
              key={index}
              className="p-2 rounded-full bg-secondary footer-sm"
            >
              <Image src={obj.photoSrc} alt={obj.name} style={{}} />
            </div>
          ))}
        </div>
      </div>
      <div className="font-normal font-inter xl:text-lg md:text-base px-4">
        <Link href="#" className=" block">
          Terms & Condition
        </Link>
        <Link href="#" className="block mt-8">
          Terms of Use
        </Link>
        <Link href="#" className="block mt-8">
          Privacy Policy
        </Link>
      </div>
      <div className="font-normal font-inter xl:text-lg md:text-base px-4">
        <Link href="#" className="block">
          Cookie Notice
        </Link>
        <Link href="#" className="block mt-8">
          FAQ's
        </Link>
      </div>

      {/* Feather Positioning  */}

      <div>
        <img
          src="footer/footer_left_feather.png"
          alt="Footer Right Feather"
          className="left-0 bottom-0 absolute"
        />
        <img
          src="footer/footer_right_feather.png"
          alt="Footer Right Feather"
          className="absolute right-0 bottom-0"
        />
      </div>
    </footer>
  );
}
