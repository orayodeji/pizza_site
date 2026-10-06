import { MenuPageCateProps } from "./menu";

import cake1 from "@/public/menu_page/cake/1.png";
import cake2 from "@/public/menu_page/cake/2.png";
import cake3 from "@/public/menu_page/cake/3.png";
import cake4 from "@/public/menu_page/cake/4.png";
import cake5 from "@/public/menu_page/cake/5.png";
import cake6 from "@/public/menu_page/cake/6.png";
import cake7 from "@/public/menu_page/cake/7.png";
import cake8 from "@/public/menu_page/cake/8.png";
import cake9 from "@/public/menu_page/cake/9.png";

const cakes = [cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9];

const cakeData = [
  {
    name: "Chocolate Cake",
    description:
      "Delicious chocolate cake with rich chocolate frosting and layers of moist chocolate sponge.",
  },
  {
    name: "Vanilla Cake",
    description:
      "Classic vanilla cake with a light and fluffy texture, topped with creamy vanilla frosting.",
  },
  {
    name: "Red Velvet Cake",
    description:
      "A vibrant red velvet cake with a hint of cocoa, layered with smooth cream cheese frosting.",
  },
  {
    name: "Lemon Drizzle Cake",
    description:
      "Zesty lemon drizzle cake with a tangy lemon glaze, perfect for citrus lovers.",
  },
  {
    name: "Carrot Cake",
    description:
      "Moist carrot cake packed with grated carrots, nuts, and warm spices, topped with cream cheese frosting.",
  },
  {
    name: "Cheesecake",
    description:
      "Rich and creamy cheesecake with a buttery graham cracker crust, available in various flavors.",
  },
  {
    name: "Coffee Cake",
    description:
      "A delightful coffee-flavored cake with a crumbly streusel topping, perfect for breakfast or dessert.",
  },
  {
    name: "Fruit Cake",
    description:
      "A traditional fruit cake loaded with dried fruits and nuts, often enjoyed during the holiday season.",
  },
  {
    name: "Black Forest Cake",
    description:
      "A decadent chocolate cake layered with cherries and whipped cream, inspired by the Black Forest region of Germany.",
  },
];

export const MenuPageCakes: MenuPageCateProps[] = cakes.map((cake, index) => ({
  photoSrc: cake,
  name: cakeData[index].name,
  id: index + 1,
  description: cakeData[index].description,
  exploreId: 4,
}));
