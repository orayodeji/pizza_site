import { MenuPageCateProps } from "./menu";
import pizza1 from "@/public/menu_page/pizza/1.png";
import pizza2 from "@/public/menu_page/pizza/2.png";
import pizza3 from "@/public/menu_page/pizza/3.png";
import pizza4 from "@/public/menu_page/pizza/4.png";
import pizza5 from "@/public/menu_page/pizza/5.png";
import pizza6 from "@/public/menu_page/pizza/6.png";
import pizza7 from "@/public/menu_page/pizza/7.png";
import pizza8 from "@/public/menu_page/pizza/8.png";
import pizza9 from "@/public/menu_page/pizza/9.png";
import pizza10 from "@/public/menu_page/pizza/10.png";
import pizza11 from "@/public/menu_page/pizza/11.png";
import pizza12 from "@/public/menu_page/pizza/12.png";
import pizza13 from "@/public/menu_page/pizza/13.png";

const pizzas = [
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5,
  pizza6,
  pizza7,
  pizza8,
  pizza9,
  pizza10,
  pizza11,
  pizza12,
  pizza13,
];

const pizzaData = [
  {
    name: "BBQ Chicken Pizza",
    description:
      "Delicious BBQ chicken pieces on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Vegan Delight Pizza",
    description:
      "Delicious vegetables on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "BBQ Beef Pizza",
    description: "Delicious BBQ beef on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Chicken Bali Pizza",
    description: "Delicious chicken on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "BBQ Mega Meat",
    description: "Delicious BBQ meat on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Chicken Suya Pizza",
    description:
      "Delicious chicken and suya spices on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Deluxe Pizza",
    description: "Delicious meat on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Sweet & Hot Pizza",
    description: "Delicious cheese on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Meatzza Pizza",
    description:
      "Delicious vegetables, meat, and cheese on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Peperoni Pizza",
    description: "Delicious pepperoni on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Chicken Pie",
    description: "Delicious chicken on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Napolitano Pizza",
    description: "Delicious mushrooms on a bed of tomato sauce and mozzarella.",
  },
  {
    name: "Raboto Pizza",
    description:
      "Delicious four cheeses on a bed of tomato sauce and mozzarella.",
  },
];

export const MenuPagePizzas: MenuPageCateProps[] = pizzaData.map(
  (data, index) => ({
    ...data,
    photoSrc: pizzas[index],
    id: index + 1,
    exploreId: 1,
  }),
);
