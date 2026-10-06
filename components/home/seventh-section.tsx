import LandingImage from "@/public/home/seven/landing_image.png";
import Image from "next/image";

const landingImgStyle = {
  width: "800px",
  height: "550px",
};
export function SeventhSection() {
  return (
    <div className="relative bg-primary py-2 md:px-24 xl:px-40 grid grid-cols-2 items-center xl:gap-8 md:gap-6">
      <div className=" text-center text-white">
        <p className="xl:text-4xl md:text-3xl uppercase font-extrabold  xl:mb-10 md:mb-6">
          We Deliver!
        </p>
        <p className="xl:text-xl/8 md:text-lg/6 font-normal mb-10">
          we've made Take 'n' Bake even easier. Now order <br /> delivery right
          through our website. Delivery is <br /> available at participating
          locations.
        </p>

        <div>
          <button className=" capitalize font-medium text-sm bg-white text-primary px-10 py-2 rounded-md xl:my-5 md:my-3">
            Tell me more
          </button>
        </div>
      </div>
      <div>
        <Image src={LandingImage} alt="Landing Image" style={landingImgStyle} />
      </div>
    </div>
  );
}
