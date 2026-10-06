import { MenuPageCateProps } from "@/utils/menu";
import Image from "next/image";
import Link from "next/link";

export async function MenuPhotoTab({
  text,
  arr,
  isPizza = false,
  paramsID,
  // params,
}: {
  isPizza?: boolean;
  text: string;
  arr: MenuPageCateProps[];
  paramsID: number;
}) {
  return (
    <div className="py-10">
      <div className="px-10">
        <p className=" text-3xl font-normal text-black">{text}</p>
      </div>

      <div className="grid grid-cols-4  gap-8 justify-items-center  mt-5">
        {arr.map((obj, ind) => (
          <div
            className="w-72 bg-white flex flex-col py-7 px-3 justify-center items-center rounded-lg"
            key={ind}
          >
            <Image
              src={obj.photoSrc}
              alt={obj.name}
              style={{}}
              className="w-60 h-60"
            />
            <p className="block mt-4 text-base font-bold">{obj.name}</p>
            <div className=" truncate w-full">{obj.description}</div>
            <Link
              href={`/menu/${paramsID}/order/${obj.id}`}
              className=" rounded-full w-11/12 bg-primary text-white text-lg py-2 mt-3 text-center "
            >
              Order Now
            </Link>
            {isPizza && (
              <button className=" rounded-full w-11/12 text-primary bg-whites text-lg border-primary py-2 border mt-2 ">
                Customize
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
