import { Checkbox, Field, Label } from "@headlessui/react";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { CustomizationGroupProps } from "@/utils/menu";

export function SelectionOrder(
  customizeOrderArr: CustomizationGroupProps[],
  handlerCheckbox: (
    groupId: string,
    optionId: string,
    checked: boolean,
  ) => void,
  handleCheckboxQuantity: (
    groupId: string,
    optionId: string,
    quantity: number,
  ) => void,
) {
  return (
    <>
      <div>
        <p className="text-2xl text-black font-semibold">Add To Order</p>
        <p className=" text-lg text-black/50 font-normal">
          Customize your order the way you love it.
        </p>
      </div>
      <div className=" md:px-4 justify-between rounded-md bg-secondary-light py-3">
        {/* heading */}
        <div className=" inline-flex items-center">
          <div className=" bg-secondary p-1 rounded-full">
            <ShoppingBag className=" stroke-primary text-2xl stroke-2 w-5 h-5" />
          </div>
          <div className=" ml-2">
            <p className=" font-semibold text-primary uppercase">
              Your Selections
            </p>
          </div>
        </div>

        {/* main */}
        {customizeOrderArr.map((order, ind) => (
          <div key={ind}>
            {order.type === "radio"
              ? order.options
                  .filter((option) => option.quantity > 0)
                  .map((option, ind) => (
                    <div
                      className=" inline-flex justify-center w-full border-b border-b-primary/25 py-2"
                      key={ind}
                    >
                      <div className=" flex-1">
                        <Field className="flex items-center gap-2">
                          <Checkbox
                            disabled
                            checked={true}
                            onChange={() => {}}
                            className="group block size-7 rounded bg-white data-checked:bg-primary border-0 data-disabled:opacity-50"
                          >
                            <svg
                              className=" stroke-secondary opacity-0 group-data-checked:opacity-100 group-data-disabled:opacity-800"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Checkbox>
                          <Label>
                            {option.name}
                            <span className="bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm ml-2 uppercase">
                              {order.id}
                            </span>{" "}
                          </Label>
                        </Field>
                      </div>
                      <div className="">
                        <p className=" text-lg text-black/45 font-semibold">
                          $ {option.price * option.quantity}
                        </p>
                      </div>
                    </div>
                  ))
              : order.options
                  .filter((option) => option.quantity > 0)
                  .map((option, ind) => (
                    <div
                      className=" inline-flex w-full border-b border-b-primary/45 py-2"
                      key={ind}
                    >
                      <div className=" flex-2 ">
                        <Field className="flex items-center gap-2">
                          <Checkbox
                            checked={option.selected}
                            onChange={(checked) =>
                              handlerCheckbox(order.id, option.id, checked)
                            }
                            className="group block size-7 rounded bg-white data-checked:bg-primary border-0"
                          >
                            <svg
                              className=" stroke-secondary opacity-0 group-data-checked:opacity-100"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Checkbox>
                          <Label>
                            {option.quantity} × {option.name}
                            <span className=" bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm ml-2 uppercase">
                              {order.id}
                            </span>{" "}
                          </Label>
                        </Field>
                      </div>
                      <div className="flex-1 inline-flex justify-center items-center ">
                        <div className=" bg-secondary/30 border-primary/45 rounded-md inline-flex items-center py-0.5">
                          <button
                            className="hover:bg-secondary/70"
                            onClick={() =>
                              handleCheckboxQuantity(
                                order.id,
                                option.id,
                                option.quantity - 1,
                              )
                            }
                          >
                            <Minus className="fill-black/70 w-5 h-5" />
                          </button>
                          <div className="mx-0.5 bg-white min-w-8 text-center rounded-sm">
                            {option.quantity}
                          </div>
                          <button
                            className="hover:bg-secondary/70"
                            onClick={() =>
                              handleCheckboxQuantity(
                                order.id,
                                option.id,
                                option.quantity + 1,
                              )
                            }
                          >
                            <Plus className=" fill-black/70 w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="inline-flex items-center">
                        <p className="text-sm text-black/70 font-semibold">
                          $ {option.price * option.quantity}
                        </p>
                        {/* <Trash2 className="h-5 w-5 stroke-red-600 ml-1" /> */}
                      </div>
                    </div>
                  ))}
          </div>
        ))}
      </div>
    </>
  );
}
