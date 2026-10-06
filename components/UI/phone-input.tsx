import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState, useEffect } from "react";

type Country = {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
};

const countries: Country[] = [
  {
    name: "United Kingdom",
    code: "GB",
    dialCode: "+44",
    flag: "🇬🇧",
  },
  {
    name: "Nigeria",
    code: "NG",
    dialCode: "+234",
    flag: "🇳🇬",
  },
  {
    name: "United States",
    code: "US",
    dialCode: "+1",
    flag: "🇺🇸",
  },
  {
    name: "Canada",
    code: "CA",
    dialCode: "+1",
    flag: "🇨🇦",
  },
  {
    name: "Ghana",
    code: "GH",
    dialCode: "+233",
    flag: "🇬🇭",
  },
];

type PhoneNumberInputProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  description?: string;
};

export default function PhoneNumberInput({
  label = "Phone number",
  value = "",
  onChange,
  error,
  description,
}: PhoneNumberInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    onChange?.(`${country.dialCode} `);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (value) {
      const country = countries.find((country) =>
        value.startsWith(country.dialCode),
      );

      if (country) {
        setSelectedCountry(country);
      }
    }
  }, [value]);
  return (
    <div className=" flex w-full flex-col gap-2">
      {label && (
        <label htmlFor="phoneNumber" className="ml-1 text-sm font-semibold">
          {label}
        </label>
      )}

      <div
        className={`flex h-11 w-full overflow-hidden rounded-lg border ${error ? "border-red-500" : "border-gray-300 focus-within:border-gray-900"}`}
      >
        <Listbox value={selectedCountry} onChange={handleCountryChange}>
          <ListboxButton
            className={clsx(
              "relative rounded-lg rounded-r-none  py-1.5 pr-8 pl-3 text-left text-sm/6 text-white w-fit flex gap-1 items-center border-r border-gray-500",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
            )}
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-gray-700">{selectedCountry.dialCode}</span>
            {/* {selectedCountry.name} */}
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              // w-(--button-width)
              "w-fit rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:--spacing(1)] focus:outline-none shadow-primary shadow-md",
              "transition duration-100 ease-in data-leave:data-closed:opacity-0 z-50",
            )}
          >
            {countries.map((person) => (
              <ListboxOption
                key={person.code}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg px-1 py-1.5 select-none data-focus:bg-white/10 hover:bg-secondary/50"
              >
                <div className=" flex items-center gap-3 hover:bg-secondary/50 w-full p-1 rounded-sm">
                  <span className=" text-lg">{person.flag}</span>
                  <span>{person.name}</span>
                  <span className="text-gray-500">{person.dialCode}</span>
                </div>
                <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
                {/* <div className="text-sm/6 text-white">{person.name}</div> */}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
        <input
          type="tel"
          value={value}
          onChange={handlePhoneChange}
          placeholder="7123 456789"
          className="min-w-0 flex-1 px-3 text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {description && !error && (
        <p className="text-xs text-gray-500">{description}</p>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
