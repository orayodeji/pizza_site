import Image, { StaticImageData } from "next/image";
import ImageOne from "@/public/home/six/sixthsection.png";
import PastryOne from "@/public/home/six/6_one.png";
import PastryTwo from "@/public/home/six/6_two.png";
import PastryThree from "@/public/home/six/6_three.png";
import ExploreMore from "@/public/home/six/explore_more.png";
import { ExploreTiles, PastryTiles } from "@/utils/menu";
import { ExploreTileComp } from "../UI/explore-tile";

const imgStyle = {
  width: "100%",
  height: "100%",
};

const pastryStyle = {};

const exploreMoreStyle = {
  marginInline: "auto",
};

const ArrPastry: StaticImageData[] = [PastryOne, PastryTwo, PastryThree];

export function SixthSection() {
  return (
    <div className="sixth-section xl:py-16 md:py-8">
      <div className="xl:px-48 xl:py-16 md:py-8 md:px-20">
        <div className="text-center">
          <p className="capitalize font-bold xl:text-5xl md:text-4xl">
            Change the way you pizza
          </p>
          <p className="xl:mt-14 md:mt-6 text-lg/6 text-light-grey">
            Delicious pizza you can take home and make your own. Prepared from
            scratch with fresh <br /> ingredients so you take it, bake it enjoy
            it fresh out of the oven
          </p>
        </div>

        <div className="w-full img-div rounded-md mt-10">
          <Image src={ImageOne} alt="Create your Pizza" style={imgStyle} />
        </div>
      </div>

      <div className="relative xl:px-48 md:px-24">
        <img
          src="img/left_cereal.png"
          alt=""
          className="absolute left-0 top-100"
        />
        <img
          src="img/right_cereal.png"
          alt=""
          className="absolute right-0 top-8"
        />

        <div className="text-center xl:py-20 md:py-16 py-14">
          <p className="capitalize font-bold md:text-4xl xl:text-5xl">
            Styled with fresh cream
          </p>
        </div>

        {/* first pastry cakes */}
        <div className="grid grid-cols-3 pastry gap-1 [&>*:nth-child(odd)]:justify-end [&>*:nth-child(even)]:justify-start">
          {ArrPastry.map((pastry, index) => (
            <div className="flex flex-col items-center" key={index}>
              <Image src={pastry} alt="Pastry One" style={pastryStyle} />
            </div>
          ))}
        </div>

        {/* pastry tiles */}
        <div className="grid grid-cols-3 md:gap-4 xl:gap-3 py-20 relative">
          {PastryTiles.map((obj, index) => (
            <div
              className="pastry-tile-box bg-white px-5 pt-6 mx-auto flex flex-col items-center pb-10 rounded-sm"
              key={index}
            >
              <Image src={obj.photoSrc} alt={obj.name} style={pastryStyle} />
              <div className="text-center xl:text-xl lg:text-lg font-normal uppercase mt-10">
                {obj.name}
              </div>
            </div>
          ))}

          <img
            src="home/six/fresh_cream_txt.png"
            alt=""
            className="absolute fresh-cream-txt"
          />
        </div>
        <div className="block py-3 px-20">
          <Image
            src={ExploreMore}
            alt="Explore More"
            style={exploreMoreStyle}
          />
        </div>
      </div>

      <div className="mt-16">
        <p className="text-center text-black xl:text-3xl/8 md:text-3xl/6 font-extrabold">
          We're More Than Just Pizza{" "}
        </p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory w-full explore-tiles overflow-y-hidden  py-10 gap-10 scroll-px-10 px-4">
        {ExploreTiles.map((obj, index) => (
          <ExploreTileComp obj={obj} key={index} />
        ))}
      </div>
      <div className="block">
        <button className="bg-primary text-white px-6 py-2 mx-auto block rounded-md">
          Explore Menu
        </button>
      </div>
    </div>
  );
}
