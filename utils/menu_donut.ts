import { MenuPageCateProps } from "./menu";

import donut1 from "@/public/menu_page/donut/1.png";
import donut2 from "@/public/menu_page/donut/2.png";
import donut3 from "@/public/menu_page/donut/3.png";
import donut4 from "@/public/menu_page/donut/4.png";
import donut5 from "@/public/menu_page/donut/5.png";
import donut6 from "@/public/menu_page/donut/6.png";
import donut7 from "@/public/menu_page/donut/7.png";
import donut8 from "@/public/menu_page/donut/8.png";
import donut9 from "@/public/menu_page/donut/9.png";
import donut10 from "@/public/menu_page/donut/10.png";
import donut11 from "@/public/menu_page/donut/11.png";
import donut12 from "@/public/menu_page/donut/12.png";

const donuts = [
  donut1,
  donut2,
  donut3,
  donut4,
  donut5,
  donut6,
  donut7,
  donut8,
  donut9,
  donut10,
  donut11,
  donut12,
];

const donutData = [
  {
    name: "Glazed Donut",
    description: "A classic glazed donut with a sweet and shiny sugar coating.",
  },
  {
    name: "Chocolate Frosted Donut",
    description:
      "A soft donut topped with rich chocolate frosting and sprinkles.",
  },
  {
    name: "Strawberry Frosted Donut",
    description:
      "A fluffy donut covered in pink strawberry frosting and colorful sprinkles.",
  },
  {
    name: "Powdered Sugar Donut",
    description:
      "A light and airy donut coated in a generous layer of powdered sugar.",
  },
  {
    name: "Cinnamon Sugar Donut",
    description:
      "A warm donut rolled in a mixture of cinnamon and sugar for a sweet and spicy flavor.",
  },
  {
    name: "Boston Cream Donut",
    description:
      "A filled donut with creamy custard and topped with chocolate glaze.",
  },
  {
    name: "Jelly-Filled Donut",
    description:
      "A soft donut filled with fruity jelly and dusted with powdered sugar.",
  },
  {
    name: "Maple Bacon Donut",
    description:
      "A unique donut topped with maple glaze and crispy bacon pieces for a sweet and savory treat.",
  },
  {
    name: "Old-Fashioned Donut",
    description:
      "A classic cake-style donut with a slightly crisp exterior and tender interior, often glazed or frosted.",
  },
  {
    name: "Cruller Donut",
    description:
      "A twisted, airy donut with a light and crispy texture, often glazed or dusted with sugar.",
  },
  {
    name: "Apple Fritter Donut",
    description:
      "A chunky donut filled with apple pieces and cinnamon, fried to perfection and glazed.",
  },
  {
    name: "Blueberry Donut",
    description:
      "A soft donut infused with fresh blueberries and topped with a sweet glaze or icing.",
  },
];

export const MenuPageDonuts: MenuPageCateProps[] = donuts.map(
  (donut, index) => ({
    photoSrc: donut,
    name: donutData[index].name,
    id: index + 1,
    description: donutData[index].description,
    exploreId: 3,
  }),
);
