import { OrderExperience } from "@/components/order/order-experience";
import { MenuPageBreads } from "@/utils/menu_bread";
import { MenuPageBurgers } from "@/utils/menu_burger";
import { MenuPageCakes } from "@/utils/menu_cake";
import { MenuPageCupCakes } from "@/utils/menu_cup_cake";
import { MenuPageDonuts } from "@/utils/menu_donut";
import { MenuPagePizzas } from "@/utils/menu_pizza";
import { ExtraPizzaTiles } from "@/utils/menu";
import { notFound } from "next/navigation";

const menuGroups = [MenuPagePizzas, MenuPageCupCakes, MenuPageDonuts, MenuPageCakes, MenuPageBreads, MenuPageBurgers];

export default async function OrderItem({ params }: { params: Promise<{ menuID: string; orderID: string }> }) {
  const { menuID, orderID } = await params;
  const categoryId = Number(menuID);
  const orderId = Number(orderID);
  const category = ExtraPizzaTiles.find((item) => item.id === categoryId);
  const product = menuGroups[categoryId - 1]?.find((item) => item.id === orderId);
  if (!Number.isInteger(categoryId) || !Number.isInteger(orderId) || !category || !product) notFound();
  return <OrderExperience category={category.name} categoryId={categoryId} product={product} />;
}
