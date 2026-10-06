import Link from "next/link";
import { ExtraPizzaTiles } from "@/utils/menu";
import Image from "next/image";

export default function MenuHomePage() {
  return (
    <div className="px-52 ">
      <p className="text-4xl font-normal py-8">Menu</p>

      <div className="grid grid-cols-3 gap-5 justify-self-auto">
        {ExtraPizzaTiles.map((obj, index) => (
          <Link
            href={{ pathname: `/menu/${obj.id}` }}
            key={index}
            className="flex flex-col items-center bg-white py-8 px-6 rounded-xl xl:w-80"
          >
            <Image
              src={obj.photoSrc}
              alt={obj.name}
              style={{}}
              className="xl:w-40 xl:h-40"
            />
            <p className=" mt-8 text-center font-bold text-base bg-primary text-white px-4 py-3 block w-7/9 rounded-full">
              {obj.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
