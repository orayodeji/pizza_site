import { MenuPageCateProps } from "./menu";
import cupCake1 from "@/public/menu_page/cup_cake/1.png";
import cupCake2 from "@/public/menu_page/cup_cake/2.png";
import cupCake3 from "@/public/menu_page/cup_cake/3.png";
import cupCake4 from "@/public/menu_page/cup_cake/4.png";
import cupCake5 from "@/public/menu_page/cup_cake/5.png";
import cupCake6 from "@/public/menu_page/cup_cake/6.png";
import cupCake7 from "@/public/menu_page/cup_cake/7.png";

const cupCakes = [
  cupCake1,
  cupCake2,
  cupCake3,
  cupCake4,
  cupCake5,
  cupCake6,
  cupCake7,
];

const cupCakeData = [
  {
    name: "Chocolate Cupcake",
    description:
      "A rich and moist chocolate cupcake topped with creamy chocolate frosting and sprinkles.",
  },
  {
    name: "Vanilla Cupcake",
    description:
      "A classic vanilla cupcake with a light and fluffy texture, topped with smooth vanilla buttercream.",
  },
  {
    name: "Red Velvet Cupcake",
    description:
      "A vibrant red velvet cupcake with a hint of cocoa, layered with cream cheese frosting and a touch of elegance.",
  },
  {
    name: "Lemon Cupcake",
    description:
      "A zesty lemon cupcake with a tangy lemon glaze, perfect for citrus lovers seeking a refreshing treat.",
  },
  {
    name: "Carrot Cupcake",
    description:
      "A moist carrot cupcake packed with grated carrots, warm spices, and topped with cream cheese frosting.",
  },
  {
    name: "Strawberry Cupcake",
    description:
      "A delightful strawberry cupcake with a sweet strawberry frosting  and a hint of fresh strawberry flavor.",
  },
  {
    name: "Cookies and Cream Cupcake",
    description:
      "A decadent cupcake with crushed cookies mixed into the batter, topped with cookies and cream frosting.",
  },
];

export const MenuPageCupCakes: MenuPageCateProps[] = cupCakes.map(
  (cupCake, index) => ({
    photoSrc: cupCake,
    name: cupCakeData[index].name,
    id: index + 1,
    description: cupCakeData[index].description,
    exploreId: 2,
  }),
);
