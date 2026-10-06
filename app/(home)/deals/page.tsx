import { MenuDealComp } from "@/components/menu/menu-deal-comp";
import { MenuDeals } from "@/utils/menu_deal";

export default function Deals() {
  return (
    <div className=" px-44 py-10">
      <p className=" text-3xl font-normal">Deals</p>

      <div className=" grid grid-cols-3 justify-items-normal gap-9 py-10">
        {MenuDeals.map((obj, ind) => (
          <MenuDealComp obj={obj} key={ind} />
        ))}
      </div>
    </div>
  );
}
