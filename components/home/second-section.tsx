// import { PizzaTiles } from "@/utils/menu";
import { MenuPagePizzas } from "@/utils/menu_pizza";
import { PizzaTile } from "../UI/pizza-tile";
export function SecondSection() {
  return (
    <div className="ss-main bg-secondary relative pb-20 pt-10">
      <img
        src="/img/left_cereal.png"
        alt="left_top"
        className="absolute top-20 -left-5"
      />
      <img
        src="/img/right_cereal.png"
        alt="right_top"
        className="absolute top-24 right-1"
      />

      {/* Heading and Sub Headings */}
      <div className=" text-center pt-20">
        <p className="text-4xl">Signature Pizzas</p>
        <p className="xl:text-md lg:text-sm mt-6">
          If you don’t want to think twice about creating a great-tasting Pie,
          our Signatures will surely hit the spot. Featuring limited-time
          offerings <br />
          and our time-tested fan favorites, you’re sure to find something that
          your taste buds will love.
        </p>
      </div>

      {/* pizza tiles */}
      <div className="px-30 w-full grid grid-cols-3 gap-6 md:gap-10 items-center mt-8">
        {MenuPagePizzas.slice(0, 6).map((obj, index) => (
          <PizzaTile pizzaObj={obj} key={index} />
        ))}
      </div>
    </div>
  );
}
