"use client";
import { Description, Label, Select, Field } from "@headlessui/react";
import { useState, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";

type optionType = {
  name: string;
  value: string | number;
};
interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  description?: string;
  error?: string;
  options: optionType[];
}

export default function SelectInput({
  label,
  description,
  error,
  className,
  id,
  options,
  //   type = "select",
  ...props
}: SelectInputProps) {
  return (
    <Field className={clsx("my-2")}>
      <Label htmlFor={id} className={clsx("ml-1 text-sm font-semibold")}>
        {label}
      </Label>

      {description && (
        <Description className="text-xs/4 text-gray-700">
          {description}
        </Description>
      )}
      <div className="relative">
        <Select
          className={clsx(
            "mt-2 block w-full rounded-sm border border-gray-500 bg-white/5 px-3 py-1.5 text-sm/5 text-black",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
            error && "border-red-500",
            "pr-10",
            className,
          )}
          {...props}
        >
          <option value="">Please Select</option>
          {options.map((obj, ind) => (
            <option key={ind} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Select>

        {/* <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        /> */}
      </div>
    </Field>
  );
}
