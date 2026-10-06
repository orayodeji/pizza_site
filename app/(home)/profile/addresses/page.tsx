"use client";
import { ProfileHeading } from "@/components/profile/heading";
import PhoneNumberInput from "@/components/UI/phone-input";
import SelectInput from "@/components/UI/select-input";
import { SwitchInput } from "@/components/UI/switch-input";
import TextInput from "@/components/UI/text-input";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Info, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const addressArr = [
  {
    id: 1,
    phoneNumber: "+44709448494",
    isDefault: true,
    type: "home",
    addressOne: "Flat 12, 15 King's Cross Road,",
    city: "King's Cross, London, WC1X 9HX, UK",
  },
  {
    id: 2,
    phoneNumber: "+234709423494",
    isDefault: false,
    type: "office",
    addressOne: "1 Canary Square",
    city: "Canary Wharf, London, E14 5AB, UK",
  },
];
export default function Addresses() {
  const [addresses, setAddresses] = useState(addressArr);
  const [isOpen, setIsOpen] = useState(false);

  const obj = {
    id: 0,
    addressOne: "",
    phoneNumber: "",
    isDefault: false,
    city: "",
    type: "",
  };

  const [form, setForm] = useState(obj);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };

  const handleSetDefault = (id: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    );
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAddresses((prevAddresses) => {
      // Create new address
      if (form.id === 0) {
        const newAddress = {
          ...form,
          id:
            prevAddresses.length > 0
              ? Math.max(...prevAddresses.map((address) => address.id)) + 1
              : 1,
        };

        return [...prevAddresses, newAddress];
      }

      // Edit existing address
      return prevAddresses.map((address) =>
        address.id === form.id
          ? {
              ...address,
              ...form,
            }
          : address,
      );
    });

    setIsOpen(false);
    setForm(obj);
  };
  return (
    <>
      <ProfileHeading
        heading="My Addresses"
        subHeading="Add, Edit or remove your delivery addesses"
        buttonText="Add New Address"
        onAdd={() => setIsOpen(true)}
      />
      {addresses.map((obj, index) => (
        <div
          className=" w-full flex my-2 border-2 border-secondary/60 px-5 py-2.5 rounded-lg"
          key={index}
        >
          <div className=" flex-1">
            <div className=" inline-flex items-center mb-1.5">
              <span className="capitalize text-sm font-semibold">{obj.type}</span>
              {obj.isDefault && (
                <span className=" text-green-700 bg-green-100 py-1 px-4 rounded-full text-xs font-semibold ml-3">
                  Default
                </span>
              )}
            </div>
            <p className="font-medium text-sm text-black/70">
              {obj.addressOne}
            </p>
            <p className="mb-0.5 text-sm font-semibold">{obj.city}</p>
            <p className="text-sm font-semibold text-black/60">{obj.phoneNumber}</p>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className=" inline-flex items-center h-fit">
              <Pencil
                className=" stroke-2 stroke-black/50 mr-3"
                onClick={() => {
                  setForm({
                    id: Number(obj.id),
                    addressOne: obj.addressOne,
                    city: obj.city,
                    isDefault: obj.isDefault,
                    type: obj.type,
                    phoneNumber: obj.phoneNumber,
                  });

                  setIsOpen(true);
                }}
              />
              {!obj.isDefault && (
                <Trash2 className=" stroke-2 stroke-red-400" />
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
        <Info className=" stroke-secondary/80 mr-5" size={24} />
        <p className=" text-black/50 text-xs">
          <span className="mr-1 text-xs font-semibold text-black/60">Tip:</span>
          You can set a default address to make checkout faster
        </p>
      </div>
      {/* dialog */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsOpen(false);
          setForm(obj);
        }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-md shadow-primary/60"
            >
              <DialogTitle as="h3" className="text-xl/2 font-medium text-black">
                {obj.id === 0 ? "Add" : "Edit"} Address
              </DialogTitle>

              <form onSubmit={submitForm}>
                <div className="py-0.5">
                  <TextInput
                    label="Address"
                    id="addressOne"
                    name="addressOne"
                    placeholder="Please Enter Your Address"
                    value={form.addressOne}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-0.5">
                  <TextInput
                    label="City, Postcode & Country"
                    id="city"
                    name="city"
                    placeholder="Camden, London, UK"
                    value={form.city}
                    onChange={handleChange}
                  />
                </div>

                <div className=" py-0.5">
                  <PhoneNumberInput
                    label="Phone Number"
                    value={form.phoneNumber}
                    onChange={(value) =>
                      setForm((obj) => ({
                        ...obj,
                        phoneNumber: value,
                      }))
                    }
                  />
                </div>

                <div className=" py-0.5">
                  <SelectInput
                    id="type"
                    label="Type"
                    value={form.type}
                    onChange={handleChange}
                    name="type"
                    options={[
                      { name: "Home", value: "home" },
                      {
                        name: "Office",
                        value: "office",
                      },
                    ]}
                  />
                </div>
                <div className="mt-4 bg-amber-300">
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
