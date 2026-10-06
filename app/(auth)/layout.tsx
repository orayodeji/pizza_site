import "@/app/layout.css";
import ImgLogo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout xl:py-8 md:py-14 lg:py-16 2xl:py-12">
      <div className="md:w-2xl lg:w-3xl xl:w-5xl 2xl:w-6xl  border-gray-700 bg-white  mx-auto shadow-2xl rounded-2xl">
        <div className="bg-secondary-light auth-layout-logo-image flex justify-center rounded-2xl">
          <Link href={"/"} className="auth-layout-logo-image">
            <Image src={ImgLogo} alt="Logo Picture" style={{}} />
          </Link>
        </div>
        {children}
      </div>

      {/* positioned cereals  */}
      <div>
        <img
          src="footer/footer_left_feather.png"
          alt="Left Feather"
          className="bottom-0 absolute left-0"
        />

        <img
          src="footer/footer_right_feather.png"
          alt="Right Feather"
          className="md:top-8 xl:top-16 right-0 absolute"
        />
      </div>
    </div>
  );
}
