import { TileProps } from "@/utils/menu";
import Image from "next/image";
export const PizzaTile = ({ pizzaObj }: { pizzaObj: TileProps }) => {
  const imgStyle = {
    height: "300px",
    width: "auto",
  };
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="pizza-tile-box text-center">
        <Image
          src={pizzaObj.photoSrc}
          // height={300}
          alt={pizzaObj.name}
          style={imgStyle}
        />
        <div className="px-3">
          <p className="md:text-2xl xl:text-3xl text-black mt-5">
            {pizzaObj.name}
          </p>
          <div className=" bg-primary rounded-full xl:px-4 xl:py-2 lg:px-3 lg:py-3 mt-5">
            <p className="lg:text-md xl:text-xl 2xl:text-2xl text-white">
              Order Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
