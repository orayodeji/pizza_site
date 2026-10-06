import Image from "next/image";
import LandingImage from "@/public/img/photo_1.png";

export function FirstSection() {
  return (
    <div className="fs-main bg-primary flex justify-center items-center">
      <Image
        src={LandingImage}
        alt="landing page photo"
        loading="eager"
        style={{}}
      />
    </div>
  );
}
