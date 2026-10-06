"use client";
import { Checkbox, Field, Label } from "@headlessui/react";
import { Plus, ShoppingBag } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Minus } from "lucide-react";

import { useState } from "react";
export function AddEditOrder() {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
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
        <div className=" inline-flex justify-center w-full border-b border-b-primary/25 py-2">
          <div className=" flex-1">
            <Field className="flex items-center gap-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
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
                Fritta Pizza - Extra Large - CLASSIC HAND TOSSED{" "}
                <span className=" bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm ml-2">
                  main
                </span>{" "}
              </Label>
            </Field>
          </div>
          <div className="">
            <p className=" text-lg text-black/45 font-semibold">$ 1990</p>
          </div>
        </div>

        {/* drink */}
        <div className=" inline-flex w-full border-b border-b-primary/45 py-2">
          <div className=" flex-2 ">
            <Field className="flex items-center gap-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
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
                2 × 60CL COKE{" "}
                <span className=" bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm ml-2">
                  drink
                </span>{" "}
              </Label>
            </Field>
          </div>
          <div className="flex-1 inline-flex justify-center items-center ">
            <div className=" bg-secondary/30 border-primary/45 rounded-md inline-flex items-center">
              <div className="hover:bg-secondary/70">
                <Minus className="fill-black/70 w-5 h-5" />
              </div>
              <div className="mx-0.5 bg-white min-w-8 text-center rounded-sm">
                {" "}
                2{" "}
              </div>
              <div className="hover:bg-secondary/70">
                <Plus className=" fill-black/70 w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center">
            <p className="text-sm text-black/70 font-semibold">$ 1990</p>
            <Trash2 className="h-5 w-5 stroke-red-600 ml-1" />
          </div>
        </div>

        {/* drink */}
        <div className=" inline-flex w-full border-b border-b-primary/45 py-2">
          <div className=" flex-2 ">
            <Field className="flex items-center gap-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
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
                2 × Chesse Cake{" "}
                <span className=" bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm ml-2">
                  drink
                </span>{" "}
              </Label>
            </Field>
          </div>
          <div className="flex-1 inline-flex justify-center items-center ">
            <div className=" bg-secondary/30 border-primary/45 rounded-md inline-flex items-center">
              <div className="hover:bg-secondary/70">
                <Minus className="fill-black/70 w-5 h-5" />
              </div>
              <div className="mx-0.5 bg-white min-w-8 text-center rounded-sm">
                {" "}
                2{" "}
              </div>
              <div className="hover:bg-secondary/70">
                <Plus className=" fill-black/70 w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center">
            <p className="text-sm text-black/70 font-semibold">$ 1990</p>
            <Trash2 className="h-5 w-5 stroke-red-600 ml-1" />
          </div>
        </div>

        {/* drink */}
        <div className=" inline-flex w-full border-b border-b-primary/45 py-2">
          <div className=" flex-2 ">
            <Field className="flex items-center gap-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
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
                1 × Donut{" "}
                <span className=" bg-secondary/30 border-primary/45 p-0.5 rounded-full border-2 px-2  py-0.5 text-sm ml-2">
                  dessert
                </span>{" "}
              </Label>
            </Field>
          </div>
          <div className="flex-1 inline-flex justify-center items-center ">
            <div className=" bg-secondary/30 border-primary/45 rounded-md inline-flex items-center">
              <div className="hover:bg-secondary/70">
                <Minus className="fill-black/70 w-5 h-5" />
              </div>
              <div className="mx-0.5 bg-white min-w-8 text-center rounded-sm">
                {" "}
                2{" "}
              </div>
              <div className="hover:bg-secondary/70">
                <Plus className=" fill-black/70 w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center">
            <p className="text-sm text-black/70 font-semibold">$ 1990</p>
            <Trash2 className="h-5 w-5 stroke-red-600 ml-1" />
          </div>
        </div>
      </div>

      <div className=" mt-4">
        <p className=" text-lg text-black/70 font-semibold">
          CUSTOMIZE YOUR ORDER
        </p>
      </div>
    </>
  );
}
