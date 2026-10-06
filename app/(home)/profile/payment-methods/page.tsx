"use client";
import { ProfileHeading } from "@/components/profile/heading";
import VISA from "@/public/order/visa.jpg";
import MASTERCARD from "@/public/order/mastercard.jpg";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { CheckCircle, Lock, Pencil, Trash2 } from "lucide-react";
import { SwitchInput } from "@/components/UI/switch-input";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import TextInput from "@/components/UI/text-input";
import SelectInput from "@/components/UI/select-input";

interface RadioOption {
  id: number;
  img: StaticImageData;
  value: string;
}
interface Card {
  id: number;
  cardType: "visa" | "mastercard";
  cardNumber: string;
  cardName: string;
  isDefault: boolean;
  expiryMonth: number;
  expiryYear: number;
}

const cards: Card[] = [
  {
    id: 1,
    cardType: "visa",
    isDefault: true,
    cardNumber: "0989837476546733",
    cardName: "John Doe",
    expiryMonth: 9,
    expiryYear: 2027,
  },
  {
    id: 2,
    isDefault: false,
    cardType: "mastercard",
    cardNumber: "4765467330989837",
    cardName: "Jane Doe",
    expiryMonth: 3,
    expiryYear: 2029,
  },
];
const cardTypeOptions: RadioOption[] = [
  {
    id: 1,
    img: VISA,
    value: "visa",
  },
  {
    id: 2,
    img: MASTERCARD,
    value: "mastercard",
  },
];

export default function PaymentMethod() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardArr, setCardArr] = useState(cards);
  const obj = {
    id: 0,
    cardType: "",
    isDefault: false,
    cardNumber: "",
    cardName: "",
    expiryMonth: new Date(Date.now()).getMonth() + 1,
    expiryYear: new Date(Date.now()).getFullYear(),
  };

  const [form, setForm] = useState(obj);

  const handleSetDefault = (id: number) => {
    setCardArr((prevCardArr) =>
      prevCardArr.map((card) => ({
        ...card,
        isDefault: card.id === id,
      })),
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCardArr((prevCards) => {
      // Create new address
      if (form.id === 0) {
        const newCard = {
          ...form,
          cardType: form.cardType as Card["cardType"],
          id:
            prevCards.length > 0
              ? Math.max(...prevCards.map((card) => card.id)) + 1
              : 1,
        };

        return [...prevCards, newCard];
      }

      // Edit existing address
      return prevCards.map((card) =>
        card.id === form.id
          ? {
              ...card,
              ...form,
              cardType: form.cardType as Card["cardType"],
            }
          : card,
      );
    });

    setIsOpen(false);
    setForm(obj);
  };
  return (
    <>
      <ProfileHeading
        heading="My Cards"
        subHeading="Add, Edit or Remove your bank cards"
        buttonText="Add New Card"
        onAdd={() => setIsOpen(true)}
      />
      {/* show the card that isDefault is true first */}

      {[...cardArr]
        .sort((a, b) => Number(b.isDefault) - Number(a.isDefault))
        .map((obj, index) => (
          <div
            className=" w-full flex my-2 border-2 border-secondary/60 px-5 py-2.5 rounded-lg"
            key={index}
          >
            <div className=" flex-1">
              <div className="inline-flex items-center mb-5.5">
                <Image
                  src={obj.cardType === "mastercard" ? MASTERCARD : VISA}
                  alt={obj.cardType}
                  style={{}}
                  className="h-10 w-16 mr-2"
                />
                <span className="mr-1.5 text-sm font-bold capitalize text-black/40">
                  {obj.cardType}
                </span>
                <span className="text-sm">{`**** **** **** ${obj.cardNumber.slice(-4)}`}</span>
                {obj.isDefault && (
                  <span className=" text-green-700 bg-green-100 py-1 px-4 rounded-full text-xs font-semibold ml-3">
                    Default
                  </span>
                )}
              </div>
              <p className=" font-medium text-sm text-black/70">
                {obj.cardName}
              </p>
              <p className="text-sm font-semibold text-black/50">
                Expiry{" "}
                <span className=" text-sm text-black/45">
                  {obj.expiryMonth}/{obj.expiryYear.toString().slice(-2)}
                </span>{" "}
              </p>
            </div>
            <div className=" flex flex-col items-end justify-between">
              <div className=" inline-flex items-center h-fit">
                <Pencil
                  className=" stroke-2 stroke-black/50 mr-3"
                  onClick={() => {
                    setForm({
                      id: Number(obj.id),
                      isDefault: obj.isDefault,
                      cardName: obj.cardName,
                      cardNumber: obj.cardNumber,
                      cardType: obj.cardType,
                      expiryMonth: obj.expiryMonth,
                      expiryYear: obj.expiryYear,
                    });

                    setIsOpen(true);
                  }}
                />

                {!obj.isDefault && (
                  <Trash2 className="stroke-2 stroke-red-400" />
                )}
              </div>

              {!obj.isDefault && (
                <SwitchInput
                  checked={obj.isDefault}
                  onChange={() => handleSetDefault(obj.id)}
                />
              )}
            </div>
          </div>
        ))}
      <div className=" inline-flex items-center border border-secondary/70 bg-secondary/25 w-full py-1.5 justify-center rounded-md ">
        <Lock className=" stroke-secondary/80 mr-5" size={24} />
        <p className=" text-black/50 text-xs">
          <span className="text-black/60 font-semibold text-sm mr-1"></span>
          Your payment information is safe and secure
        </p>
      </div>

      {/* Dialog */}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsOpen(false);
          setForm(obj);
        }}
      >
        <div className=" fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className=" flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-md shadow-primary/60"
            >
              <DialogTitle as="h3" className="text-xl/2 font-medium text-black">
                {obj.id === 0 ? "Add" : "Edit "} Card
              </DialogTitle>

              <form onSubmit={submitForm}>
                <div className="py-0.5">
                  <TextInput
                    label="Card Name"
                    id="cardName"
                    name="cardName"
                    placeholder="Please Enter the name on the card"
                    value={form.cardName}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-0.5">
                  <TextInput
                    label="Card Number"
                    id="cardNumber"
                    name="cardNumber"
                    inputMode="numeric"
                    maxLength={16}
                    pattern="[0-9]*"
                    placeholder="Please Enter the nuumber on the card"
                    value={form.cardNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="py-0.5">
                  <Field>
                    <Label className={"font-semibold"}>Card Type</Label>
                    <RadioGroup
                      name="cardType"
                      value={form.cardType}
                      onChange={(value) => handleRadioChange("cardType", value)}
                      aria-label="Server size"
                      className="grid grid-cols-2 gap-3 mt-2"
                    >
                      {cardTypeOptions.map((type) => (
                        <Radio
                          key={type.id}
                          value={type.value}
                          className="group relative flex cursor-pointer bg-white/50 data-checked:bg-white/80 px-5 py-4 text-white shadow-md transition focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white border-primary/50 data-checked:border-2 rounded-md"
                        >
                          <div className=" flex-1 inline-flex items-center">
                            <Image
                              src={type.img}
                              alt={type.value}
                              style={{}}
                              className="w-12 h-8 mr-2"
                            />
                            <p className="mr-3 text-sm font-semibold capitalize text-black/60">
                              {type.value}
                            </p>
                          </div>
                          <CheckCircle className=" group-data-checked:stroke-primary/50 transition group-data-checked:opacity-100 size-7 border-2 border-primary/40 rounded-full group-data-checked:border-0" />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </Field>
                </div>

                <div className=" grid grid-cols-2 gap-2.5">
                  <div className=" py-0.5">
                    <SelectInput
                      id="expiryMonth"
                      name="expiryMonth"
                      label="Month"
                      value={form.expiryMonth}
                      onChange={handleChange}
                      options={Array.from({ length: 12 }, (_, index) => ({
                        value: index + 1,
                        name: new Date(0, index).toLocaleString("en-US", {
                          month: "long",
                        }),
                      }))}
                    />
                  </div>
                  <div className=" py-0.5">
                    <SelectInput
                      id="expiryYear"
                      name="expiryYear"
                      label="Year"
                      value={form.expiryYear}
                      onChange={handleChange}
                      options={Array.from({ length: 10 }, (_, index) => ({
                        value: index + new Date(Date.now()).getFullYear(),
                        name: (
                          index + new Date(Date.now()).getFullYear()
                        ).toString(),
                      }))}
                    />
                  </div>
                </div>
                <div className=" mt-4 bg-amber-300">
                  <button
                    type="submit"
                    className="mt-4 block w-full rounded-md bg-primary py-2 text-sm font-semibold text-white hover:bg-secondary-light hover:text-black disabled:bg-gray-400 disabled:text-gray-700"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
