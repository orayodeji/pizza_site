import FramePhoto from "@/public/img/frame.png";
import CreatePizza from "@/public/img/create_pizza.png";
import Image from "next/image";

export function FifthSection() {
  const frameStyle = {
    width: "100%",
  };

  const createStyle = {
    width: "800px",
    height: "550px",
  };
  return (
    <div className="relative bg-white py-11 md:px-20 xl:px-32 2xl:px-52 grid grid-cols-2 items-center md:gap-10 xl:gap-16 2xl:gap-20">
      <div className="absolute top-0 left-0 right-0">
        <Image src={FramePhoto} alt="frame" style={frameStyle} />
      </div>

      <div className="uppercase flex md:text-lg/10 xl:text-xl/12 flex-col text-center font-normal">
        <p className="font-semibold md:text-xl/10 xl:text-2xl/12">
          create your own pizaa
        </p>
        <p>four crust</p>
        <p>+</p>
        <p className="font-light">40+ sauces, toppings, and afterbakes.</p>
        <p className="xl:text-4xl/16 md:text-3xl/14">= your perfect pizza</p>
        <div>
          <button className="capitalize font-medium md:text-xl xl:text-2xl bg-primary text-white md:px-14 xl:px-20 py-2 rounded-md my-5">
            View Ingredients
          </button>
        </div>
        <div>
          <button className="md:text-xl xl:text-2xl bg-secondary md:px-8 xl:px-10 py-2 rounded-md">
            Order Now
          </button>
        </div>
      </div>
      <div>
        <Image src={CreatePizza} alt="Create your Pizza" style={createStyle} />
      </div>
    </div>
  );
}
