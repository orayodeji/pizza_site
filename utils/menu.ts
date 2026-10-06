import type { StaticImageData } from "next/image";
import {
  Bell,
  CreditCard,
  Heart,
  Info,
  MapPin,
  Timeline,
  User,
  type LucideIcon,
} from "lucide-react";
import extra1 from "@/public/menu_page/pizza/1.png";
import extra2 from "@/public/menu_page/cup_cake/1.png";
import extra3 from "@/public/menu_page/donut/6.png";
import extra4 from "@/public/menu_page/cake/1.png";
import extra5 from "@/public/menu_page/bread/1.png";
import extra6 from "@/public/menu_page/burger/1.png";

import explore1 from "@/public/home/six/explore_one.png";
import explore2 from "@/public/home/six/explore_two.png";
import explore3 from "@/public/home/six/explore_three.png";
import explore5 from "@/public/home/six/explore_five.png";
import explore6 from "@/public/home/six/explore_six.png";
import explore7 from "@/public/home/six/explore_seven.png";
import explore8 from "@/public/home/six/explore_eight.png";

import pastry1 from "@/public/home/six/pastry_tile_one.png";
import pastry2 from "@/public/home/six/pastry_tile_two.png";
import pastry3 from "@/public/home/six/pastry_tile_three.png";

import cartTile1 from "@/public/cart/cart_tile_one.png";
import cartTile2 from "@/public/cart/cart_tile_two.png";
import cartTile3 from "@/public/cart/cart_tile_three.png";
import cartTile4 from "@/public/cart/cart_tile_four.png";
import cartTile5 from "@/public/cart/cart_tile_five.png";
export type TileProps = {
  photoSrc: string | StaticImageData;
  name: string;
  id: number;
};

export type OrderFieldTypeProps = "radio" | "checkbox";
export type OrderIdType = "pizza" | "drinks" | "desserts" | "cupcakes";

export type CustomizationOption = {
  id: string;
  name: string;
  price: number;
  image?: string | StaticImageData;
  quantity: number;
  selected: boolean;
};

export type CustomizationGroupProps = {
  id: OrderIdType;
  title: string;
  description?: string;
  type: OrderFieldTypeProps;
  required: boolean;
  options: CustomizationOption[];
};

export type MenuPageCateProps = {
  photoSrc: string | StaticImageData;
  name: string;
  id: number;
  description: string;
  exploreId: number;
};

export type CartTileProps = {
  photoSrc: string | StaticImageData;
  name: string;
  id: number;
  price: number;
  quantity: number;
};

// create MenuDealProps type
export type MenuDealProps = {
  photoSrc: string | StaticImageData;
  name: string;
  id: number;
  price: number;
  description: string;
  category: "Pizza" | "Burger" | "Pasta" | "Chicken";
  serves: string;
};

export type ProfileTabProps = {
  name: string;
  id: number;
  path: string;
  icon: LucideIcon;
};

export const ProfileTabRoutes: ProfileTabProps[] = [
  {
    id: 1,
    name: "Profile Information",
    path: "/profile",
    icon: User,
  },
  // addresses Payment methods Order history saved items  notifications helps & support
  {
    id: 2,
    name: "Addresses",
    path: "/profile/addresses",
    icon: MapPin,
  },
  {
    id: 3,
    name: "Payment Methods",
    path: "/profile/payment-methods",
    icon: CreditCard,
  },
  {
    id: 4,
    name: "Order History",
    path: "/profile/order",
    icon: Timeline,
  },
  {
    id: 5,
    name: "Saved Items",
    path: "/profile/saved-items",
    icon: Heart,
  },
  {
    id: 6,
    name: "Notifications",
    path: "/profile/notifications",
    icon: Bell,
  },
  {
    id: 7,
    name: "Help & Support",
    path: "/profile/support",
    icon: Info,
  },
];

export const CartTiles: CartTileProps[] = [
  {
    photoSrc: cartTile1,
    name: "BBQ Chicken Pizza",
    id: 1,
    price: 12.99,
    quantity: 2,
  },
  {
    photoSrc: cartTile2,
    name: "Cream Muffin",
    id: 2,
    price: 14.99,
    quantity: 1,
  },
  { photoSrc: cartTile3, name: "Brownie", id: 3, price: 13.99, quantity: 4 },
  {
    photoSrc: cartTile4,
    name: "Chocolate Muffin",
    id: 4,
    price: 15.99,
    quantity: 2,
  },
  {
    photoSrc: cartTile5,
    name: "Baked Chocolate",
    id: 5,
    price: 16.99,
    quantity: 4,
  },
];

export const PastryTiles: TileProps[] = [
  { photoSrc: pastry1, name: "Pineapple Pastry", id: 1 },
  { photoSrc: pastry2, name: "Chocolate Chip Syrup", id: 2 },
  { photoSrc: pastry3, name: "Almond Crunch", id: 3 },
];
export const ExploreTiles: TileProps[] = [
  { photoSrc: explore1, name: "Donut", id: 1 },
  { photoSrc: explore2, name: "Cup Cake", id: 2 },
  { photoSrc: explore3, name: "White Bread", id: 5 },
  { photoSrc: explore5, name: "Chicken Pie", id: 3 },
  { photoSrc: explore6, name: "Brown Cake", id: 4 },
  { photoSrc: explore7, name: "Croissant", id: 7 },
  { photoSrc: explore8, name: "Bread", id: 8 },
];

export const ExtraPizzaTiles: TileProps[] = [
  { photoSrc: extra1, name: "Pizza", id: 1 },
  { photoSrc: extra2, name: "Cup Cake", id: 2 },
  { photoSrc: extra3, name: "Donut", id: 3 },
  { photoSrc: extra4, name: "Cake", id: 4 },
  { photoSrc: extra5, name: "Sweet Bread", id: 5 },
  { photoSrc: extra6, name: "Burger", id: 6 },
];

export const customizeOrderData: CustomizationGroupProps[] = [
  {
    id: "pizza",
    title: "Choose Pizza",
    description: "Choose one",
    type: "radio",
    required: true,
    options: [
      {
        id: "fritta-xl",
        name: "Small Fritta Pizza - Extra Pizza Classic Hand Tossed",
        price: 1499,
        quantity: 1,
        selected: true,
      },
      {
        id: "fritta-l",
        name: "Medium Fritta Pizza - Extra Pizza Classic Hand Tossed",
        price: 1499,
        quantity: 0,
        selected: false,
      },
      {
        id: "fritta-r",
        name: "Large Fritta Pizza - Extra Pizza Classic Hand Tossed",
        price: 1099,
        quantity: 0,
        selected: false,
      },
    ],
  },
  {
    id: "drinks",
    title: "Choose Drink",
    description: "Choose your drink & quantity",
    type: "checkbox",
    required: true,

    options: [
      {
        id: "coke-60cl",
        name: "60CL Coke",
        price: 200,
        quantity: 4,
        selected: true,
      },
      {
        id: "fanta-60cl",
        name: "60CL Fanta",
        price: 200,
        quantity: 0,
        selected: false,
      },
      {
        id: "sprite-60cl",
        name: "60CL Sprite",
        price: 200,
        quantity: 0,
        selected: false,
      },
    ],
  },

  {
    id: "desserts",
    title: "Add Desserts",
    description: "Select any you like",
    type: "checkbox",
    required: false,

    options: [
      {
        id: "donut",
        name: "Donut",
        price: 150,
        quantity: 2,
        selected: true,
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        price: 150,
        quantity: 1,
        selected: true,
      },
      {
        id: "cheese-cake",
        name: "Cheese Cake",
        price: 180,
        quantity: 0,
        selected: false,
      },
    ],
  },
  {
    id: "cupcakes",
    title: "Add Cupcakes",
    description: "Select any you like",
    type: "checkbox",
    required: false,

    options: [
      {
        id: "donut",
        name: "Donut",
        price: 150,
        quantity: 2,
        selected: true,
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        price: 150,
        quantity: 1,
        selected: true,
      },
      {
        id: "cheese-cake",
        name: "Cheese Cake",
        price: 180,
        quantity: 0,
        selected: false,
      },
    ],
  },
];
