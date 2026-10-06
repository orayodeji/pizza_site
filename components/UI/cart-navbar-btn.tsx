import { ShoppingCart, X } from "lucide-react";
import { CartTiles } from "@/utils/menu";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
  CloseButton,
} from "@headlessui/react";
import Image from "next/image";

export const CartNavbarBTN = () => {
  return (
    <Popover as="nav" className="relative">
      <PopoverButton className="inline-flex items-center bg-btn-pill rounded-full px-3 py-2 lg:px-3 xl:px-5 lg:py-2 xl:py-3 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white z-40">
        <ShoppingCart />
        <p className="ml-2">Cart</p>
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-black/15 transition duration-100 ease-out data-closed:opacity-0"
      />

      <PopoverPanel
        transition
        anchor="top end"
        className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 w-80 px-3 py-5 mt-3 z-50"
      >
        <div className=" inline-flex justify-between w-full text-2xl font-normal">
          <p>My Cart</p>
          <CloseButton className="cursor-pointer">
            <X size={35} />
          </CloseButton>
        </div>

        {CartTiles.map((obj, ind) => (
          <div
            className="inline-flex w-full justify-between items-start py-2 cart-tile my-1"
            key={ind}
          >
            <div className="inline-flex">
              <Image src={obj.photoSrc} style={{}} alt={obj.name} />
              <div className="px-2">
                <p className=" 2xl:text-lg text-base">{obj.name} </p>
                <p className="2xl:text-sm text-sm font-semibold">
                  <span className=" bg-primary text-white p-1 rounded-b-sm rounded-tl-sm font-normal">
                    {obj.quantity}
                  </span>{" "}
                  ${obj.price}
                </p>
              </div>
            </div>
            <X size={22} />
          </div>
        ))}

        <div className=" mb-2">
          <p className="font-bold">
            Sub Total: <span>$30.98</span>
          </p>
        </div>

        <button className="block w-full bg-primary text-center text-white rounded-md py-2 2xl:text-xl text-lg mt-1 font-semibold">
          View Cart
        </button>

        <button className="block w-full bg-secondary text-black/85 mt-3 rounded-md 2xl:text-xl text-lg py-2 font-semibold">
          Check Out
        </button>
      </PopoverPanel>
    </Popover>
  );
};
