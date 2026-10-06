import Image from "next/image";
import PizzaOne from "@/public/menu_page/pizza/1.png";
import { Cake, Circle, Donut, Plus, Minus, CupSoda } from "lucide-react";
import { CustomizationGroupProps } from "@/utils/menu";
import { Checkbox, Field, Radio, RadioGroup } from "@headlessui/react";
export function CustomizeOrderComp(
  customizeOrderArr: CustomizationGroupProps[],
  handleRadioChange: (groupId: string, optionId: string) => void,
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
      {customizeOrderArr.map((order, ind) =>
        order.type === "radio" ? (
          <div
            key={ind}
            className="w-full border border-secondary-light/70 px-3 py-2 rounded-md inline-flex my-1"
          >
            {" "}
            <div className="h-28 w-28 bg-secondary-light/70 flex justify-center items-center rounded-full">
              <Image src={PizzaOne} alt="" style={{}} className=" h-24 w-24" />
            </div>
            <div className=" mx-6">
              <ol className=" list-decimal font-bold">
                <li>{order.title}</li>
              </ol>
              <div className=" mt-1">
                <span className="bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm">
                  {order.required ? "Required" : "Optional"}
                </span>{" "}
                <p className=" text-black/50 font-semibold text-xs mt-1">
                  {order.description}
                </p>
              </div>
            </div>
            <div className=" flex-1 inline-flex gap-5">
              <RadioGroup
                value={order.options?.find((option) => option.selected) ?? null}
                onChange={(option) =>
                  option && handleRadioChange(order.id, option.id)
                }
                className="inline-flex gap-3"
              >
                {order.options.map((option, ind) => (
                  <div
                    className="h-32 w-52 border-2 border-secondary/25 px-1 py-2 rounded-md"
                    key={ind}
                  >
                    <Field className="flex gap-3 h-full">
                      <Radio
                        value={option}
                        className="group bg-white data-checked:bg-primary border  flex justify-center items-center h-8 w-8 rounded-full border-primary/45"
                      >
                        <Circle className="stroke-white fill-white opacity-0 group-data-checked:opacity-100 stroke-0" />
                      </Radio>
                      <div className=" flex-1 flex flex-col justify-between font-semibold">
                        <div>
                          <p className=" text-xs">{option.name}</p>
                        </div>

                        <div>
                          <p className=" text-xs">
                            $ {option.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </Field>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        ) : order.type === "checkbox" ? (
          <div
            className=" w-full border border-secondary-light/70 px-3 py-2 rounded-md inline-flex my-1 "
            key={ind}
          >
            <div className="h-28 w-28 bg-secondary-light/70 rounded-full justify-center items-center flex">
              {order.id === "drinks" ? (
                <CupSoda className="h-24 w-24 stroke-primary" />
              ) : order.id === "desserts" ? (
                <Donut className="h-24 w-24 stroke-primary" />
              ) : order.id === "cupcakes" ? (
                <Cake className="h-24 w-24 stroke-primary" />
              ) : null}
            </div>
            <div className=" mx-6">
              <ol className=" list-decimal font-bold" start={2}>
                <li>{order.title}</li>
              </ol>
              <div className=" mt-1">
                <span className="bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm">
                  {order.required ? "Required" : "Optional"}
                </span>{" "}
                <p className=" text-black/50 font-semibold text-xs mt-1">
                  {order.description}
                </p>
              </div>
            </div>

            <div className="flex-1 inline-flex gap-5">
              {order.options.map((option, ind) => (
                <div
                  className="h-32 w-52 border-2 border-secondary/25 px-1 py-1 rounded-md "
                  key={ind}
                >
                  <Field className="flex gap-3 h-full">
                    <Checkbox
                      checked={option.selected}
                      onChange={(checked) =>
                        handlerCheckbox(order.id, option.id, checked)
                      }
                      className="group bg-white data-checked:bg-primary border  flex justify-center items-center h-8 w-8 rounded-full border-primary/45"
                    >
                      <Circle className="stroke-white fill-white opacity-0 group-data-checked:opacity-100 stroke-0" />
                    </Checkbox>
                    <div className=" flex-1 flex flex-col justify-between font-semibold">
                      <div>
                        <p className=" text-xs">{option.name}</p>
                      </div>

                      <div className="">
                        <div className="bg-secondary/30 border-primary/45 rounded-md inline-flex items-center py-0.5">
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
                          <div className="mx-0.5 bg-white text-center rounded-sm min-w-8">
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

                      <div>
                        <p className=" text-xs">$ {option.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </Field>
                </div>
              ))}
            </div>
          </div>
        ) : null,
      )}
    </>
  );
}
