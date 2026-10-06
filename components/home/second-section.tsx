// import { PizzaTiles } from "@/utils/menu";
import { MenuPagePizzas } from "@/utils/menu_pizza";
import { PizzaTile } from "../UI/pizza-tile";
import Link from "next/link";
import Image from "next/image";
export function SecondSection() {
  return (
    <div className="relative overflow-hidden bg-secondary px-4 py-14 sm:px-6 lg:py-20">
      <Image
        src="/img/left_cereal.png"
        alt="left_top"
        width={180}
        height={180}
        className="absolute -left-8 top-16 opacity-70"
      />
      <Image
        src="/img/right_cereal.png"
        alt="right_top"
        width={180}
        height={180}
        className="absolute -right-8 top-20 opacity-70"
      />

      {/* Heading and Sub Headings */}
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold tracking-[0.18em] text-primary/65">FRESH FROM THE OVEN</p><h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">Signature Pizzas</h2>
        <p className="mt-4 text-sm leading-6 text-primary/75 sm:text-base">Tried-and-true favourites, generous toppings and seriously good pizza—without the second thoughts.</p>
      </div>

      {/* pizza tiles */}
      <div className="relative mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MenuPagePizzas.slice(0, 6).map((obj, index) => (
          <Link href={`/menu/1/order/${obj.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" key={obj.id} aria-label={`Order ${obj.name}`}><PizzaTile pizzaObj={obj} priority={index < 3} /></Link>
        ))}
      </div>
      <Link href="/menu/1" className="relative mx-auto mt-10 block w-fit rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary/90">See all pizzas</Link>
    </div>
  );
}
