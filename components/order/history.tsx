import Image, { StaticImageData } from "next/image";
import Image1 from "@/public/menu_page/pizza/1.png";
import Image2 from "@/public/menu_page/pizza/2.png";
import Image3 from "@/public/menu_page/pizza/3.png";
import Image4 from "@/public/menu_page/pizza/4.png";
import Image5 from "@/public/menu_page/pizza/5.png";

const orderImgArr: StaticImageData[] = [Image1, Image2, Image3, Image4, Image5];
const deliveryType = ["delivery", "carry out"];
const statusArr = ["Completed", "Delivered"];

export function OrderHistory({
  tabType = "all",
  itemNumber,
}: {
  tabType?: "all" | "delivery" | "carry out";
  itemNumber: number;
}) {
  const generateRandomNumber = (num: number) => Math.floor(Math.random() * num);
  return (
    <>
      {Array.from({ length: itemNumber }).map((_, index) => (
        <div
          className={`px-2 py-2  mr-1 inline-flex w-full my-2 border border-gray-300 rounded-md `}
          key={index}
        >
          <div className=" flex-1 inline-flex">
            <Image
              src={orderImgArr[generateRandomNumber(5)]}
              alt="order_pic"
              style={{}}
              className="w-20 h-20 bg-gray-100 p-1 rounded-md mr-2"
            />{" "}
            <div>
              <p className="text-sm font-bold text-black/50">
                Order {`#PB${generateRandomNumber(848493983)}`}
              </p>
              <p className="text-xs font-normal text-black/60">
                {generateRandomNumber(6) + 1} Items -{" "}
                <span className=" font-semibold capitalize">
                  {tabType === "all"
                    ? deliveryType[generateRandomNumber(2)]
                    : tabType}
                </span>
              </p>
              <p className=" text-xs mt-3 text-black/50 font-semibold">
                12th May 2024 - 7:45 PM
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <p className="text-sm font-bold text-black/70">
              £ {generateRandomNumber(100)}.98
            </p>

            <span className=" text-green-700 bg-green-100 py-1 px-4 rounded-full text-xs font-semibold ml-3">
              {statusArr[generateRandomNumber(2)]}
            </span>
          </div>
        </div>
      ))}

      <button className="w-full rounded-md border border-secondary/90 bg-secondary/10 py-2 text-sm font-bold text-secondary/90">
        View More Orders
      </button>
    </>
  );
}
