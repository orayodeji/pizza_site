import { MenuPageCateProps } from "./menu";
import burger1 from "@/public/menu_page/burger/1.png";
import burger2 from "@/public/menu_page/burger/2.png";
import burger3 from "@/public/menu_page/burger/3.png";
import burger4 from "@/public/menu_page/burger/4.png";
import burger5 from "@/public/menu_page/burger/5.png";
import burger6 from "@/public/menu_page/burger/6.png";
import burger7 from "@/public/menu_page/burger/7.png";
import burger8 from "@/public/menu_page/burger/8.png";
import burger9 from "@/public/menu_page/burger/9.png";
import burger10 from "@/public/menu_page/burger/10.png";

const burgers = [
  burger1,
  burger2,
  burger3,
  burger4,
  burger5,
  burger6,
  burger7,
  burger8,
  burger9,
  burger10,
];

const burgerData = [
  {
    name: "Classic Cheeseburger",
    description:
      "A juicy beef patty topped with   cheddar cheese, lettuce, tomato, and our special sauce.",
  },
  {
    name: "Double Cheeseburger",
    description:
      "Two juicy beef patties topped with   cheddar cheese, lettuce, tomato, and our special sauce.",
  },
  {
    name: "Bacon Deluxe",
    description:
      "A juicy beef patty topped with   cheddar cheese, lettuce, tomato, and crispy bacon.",
  },
  {
    name: "Mushroom Swiss",
    description:
      "A juicy beef patty topped with   Swiss cheese, sautéed mushrooms, lettuce, tomato, and our special sauce.",
  },
  {
    name: "Veggie Delight",
    description:
      "A plant-based patty topped with   cheddar cheese, lettuce, tomato, and our special sauce.",
  },
  {
    name: "Spicy Jalapeño",
    description:
      "A juicy beef patty topped with   cheddar cheese, jalapeños, lettuce, tomato, and our special sauce.",
  },
  {
    name: "BBQ Bacon",
    description:
      "A juicy beef patty topped with   cheddar cheese, crispy bacon, and our BBQ sauce.",
  },
  {
    name: "Garlic Parmesan",
    description:
      "A juicy beef patty topped with   cheddar cheese, garlic butter, and parmesan cheese.",
  },
  {
    name: "Truffle Aioli",
    description:
      "A juicy beef patty topped with   truffle aioli, arugula, and shaved parmesan.",
  },
  {
    name: "Hawaiian Burger",
    description:
      "A juicy beef patty topped with   cheddar cheese, grilled pineapple, lettuce, tomato, and our special sauce.",
  },
];

export const MenuPageBurgers: MenuPageCateProps[] = burgers.map(
  (burger, index) => ({
    photoSrc: burger,
    name: burgerData[index].name,
    id: index + 1,
    description: burgerData[index].description,
    exploreId: 6,
  }),
);
