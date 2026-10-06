import { MenuDealProps } from "@/utils/menu";
import Image from "next/image";
export function MenuDealComp({ obj }: { obj: MenuDealProps }) {
  return (
    <div className="xl:w-80 xl:h-auto bg-white py-4 px-3 rounded-md flex flex-col">
      <Image
        src={obj.photoSrc}
        alt={obj.name}
        style={{}}
        className="w-full h-52 rounded-md"
      />

      <div className="inline-flex justify-between items-center w-full py-4">
        <p className="block text-2xl font-bold">${obj.price}</p>
        <button className="px-6 py-2 bg-primary text-white font-semibold rounded-md">
          Add Coupon
        </button>
      </div>
      <p className="text-lg font-semibold mt-2 text-black/55">{obj.name}</p>
      <p className=" line-clamp-2 mt-1 capitalize font-normal">
        {obj.description}
      </p>
    </div>
  );
}
