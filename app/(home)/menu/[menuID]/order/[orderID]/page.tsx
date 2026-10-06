import { AddEditOrder } from "@/components/order/add-edit-order";

export default async function OrderItem({
  params,
}: {
  params: Promise<{ menuID: string; orderID: string }>;
}) {
  const { menuID, orderID } = await params;

  console.log(Number(menuID), Number(orderID));

  return (
    <div className="px-44 py-10">
      <div className=" w-full bg-white rounded-md md:px-10 xl:px-24 md:py-10">
        <div>
          <p className="text-2xl text-black font-semibold">Add To Order</p>
          <p className=" text-lg text-black/50 font-normal">
            Customize your order the way you love it.
          </p>
        </div>

        <AddEditOrder />
      </div>
    </div>
  );
}
