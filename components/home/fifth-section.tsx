import FramePhoto from "@/public/img/frame.png";
import CreatePizza from "@/public/img/create_pizza.png";
import Image from "next/image";
import Link from "next/link";

export function FifthSection() {
  const frameStyle = {
    width: "100%",
  };

  const createStyle = {
    width: "800px",
    height: "550px",
  };
  return (
    <div className="relative grid overflow-hidden bg-white px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-12 lg:py-20 xl:px-24">
      <div className="absolute top-0 left-0 right-0">
        <Image src={FramePhoto} alt="frame" style={frameStyle} />
      </div>

      <div className="relative mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
        <p className="text-xs font-bold tracking-[0.18em] text-primary/60">YOUR PIZZA, YOUR WAY</p><h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">Create your own pizza</h2>
        <p className="mt-4 text-base leading-7 text-black/65">Choose your crust, layer on 40+ sauces and toppings, then make it perfectly yours.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:justify-start"><Link href="/menu/1" className="rounded-xl bg-primary px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-primary/90">View ingredients</Link><Link href="/menu/1" className="rounded-xl bg-secondary px-5 py-3 text-center text-sm font-bold text-primary transition hover:bg-secondary-light">Start an order</Link></div>
      </div>
      <div className="relative mx-auto mt-8 w-full max-w-2xl lg:mt-0">
        <Image src={CreatePizza} alt="Create your Pizza" style={createStyle} className="h-auto w-full" />
      </div>
    </div>
  );
}
