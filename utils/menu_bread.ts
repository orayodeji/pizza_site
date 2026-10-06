import { MenuPageCateProps } from "./menu";
import bread1 from "@/public/menu_page/bread/1.png";
import bread2 from "@/public/menu_page/bread/2.png";
import bread3 from "@/public/menu_page/bread/3.png";
import bread4 from "@/public/menu_page/bread/4.png";
import bread5 from "@/public/menu_page/bread/5.png";
import bread6 from "@/public/menu_page/bread/6.png";
import bread7 from "@/public/menu_page/bread/7.png";
import bread8 from "@/public/menu_page/bread/8.png";

const breads = [bread1, bread2, bread3, bread4, bread5, bread6, bread7, bread8];

const breadData = [
  {
    name: "Sourdough Bread",
    description:
      "A tangy and crusty bread made with natural yeast and a long fermentation process.",
  },
  {
    name: "Baguette",
    description:
      "A classic French bread with a crisp crust and a soft, airy interior.",
  },
  {
    name: "Whole Wheat Bread",
    description:
      "A hearty bread made with whole wheat flour, providing a nutty flavor and a denser texture.",
  },
  {
    name: "Rye Bread",
    description:
      "A flavorful bread made with rye flour, often denser and darker than wheat bread.",
  },
  {
    name: "Ciabatta",
    description:
      "An Italian bread with a crisp crust and a soft, porous interior, perfect for sandwiches.",
  },
  {
    name: "Focaccia",
    description:
      "A flat Italian bread topped with olive oil, herbs, and sometimes vegetables or cheese.",
  },
  {
    name: "Brioche",
    description:
      "A rich and buttery bread with a tender crumb, often used for sweet or savory dishes.",
  },
  {
    name: "Multigrain Bread",
    description:
      "A wholesome bread made with a variety of grains and seeds, offering a nutty flavor and hearty texture.",
  },
];

export const MenuPageBreads: MenuPageCateProps[] = breads.map(
  (bread, index) => ({
    photoSrc: bread,
    name: breadData[index].name,
    id: index + 1,
    description: breadData[index].description,
    exploreId: 5,
  }),
);
