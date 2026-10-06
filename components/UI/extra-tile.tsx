import { TileProps } from "@/utils/menu";
import Image from "next/image";
export const ExtraTile = ({ extraObj }: { extraObj: TileProps }) => {
  const imgStyle = {
    height: "125px",
    width: "100%",
  };
  return (
    <div className="flex flex-col justify-center items-center text-center py-2">
      <Image
        src={extraObj.photoSrc}
        alt={extraObj.name}
        style={{}}
        className="w-30 h-30"
      />
      <div className="px-3">
        <p className="text-md text-black font-bold">{extraObj.name}</p>
        <div className=" bg-secondary-light rounded-full px-4 py-2 mt-3">
          <p className="text-sm text-black font-semibold">Explore</p>
        </div>
      </div>
    </div>
  );
};
