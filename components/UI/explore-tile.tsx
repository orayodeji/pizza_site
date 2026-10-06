import { TileProps } from "@/utils/menu";
import Image from "next/image";

const exploreTilesStyle = {
  width: "100%",
  height: "140px",
  borderRadius: "20px",
};
export const ExploreTileComp = ({ obj }: { obj: TileProps }) => {
  return (
    <div className="snap-start flex-none md:w-6/25 xl:w-2/12 rounded-tr-md rounded-tl-md w-full">
      <Image src={obj.photoSrc} alt={obj.name} style={exploreTilesStyle} />
      <p className="text-center md:text-xl xl:text-2xl font-normal xl:mt-12 md:mt-6">
        {obj.name}
      </p>
    </div>
  );
};
