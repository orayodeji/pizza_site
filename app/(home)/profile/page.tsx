"use client";

import PhoneNumberInput from "@/components/UI/phone-input";
import SelectInput from "@/components/UI/select-input";
import TextInput from "@/components/UI/text-input";
import { Camera, User } from "lucide-react";
import { useState } from "react";
export default function ProfilePage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="flex">
        <div className=" flex-1">
          <p className=" text-xl font-semibold text-black/80">
            Profile Information
          </p>
          <p className="text-sm text-black/35">
            Update your personal information and account details
          </p>
        </div>

        <div className="h-20 w-20 relative bg-gray-100 flex justify-center rounded-full">
          <User className="fill-gray-700 stroke-gray-700 h-16 w-16" />
          <div className="rounded-full p-2 -bottom-1 right-2 absolute bg-gray-200">
            <Camera className="" />
          </div>
        </div>
      </div>

      <div className="py-0.5">
        <TextInput
          label="Full Name"
          id="fullName"
          name="fullName"
          placeholder="Enter The Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="py-0.5">
        <TextInput
          type="email"
          label="Email Address"
          id="email"
          name="email"
          placeholder="Enter Your Email Address"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="py-0.5">
        <PhoneNumberInput
          label="Phone number"
          value={form.phoneNumber}
          onChange={(value) =>
            setForm((obj) => ({
              ...obj,
              phoneNumber: value,
            }))
          }
        />
      </div>
      <div className="py-0.5">
        <SelectInput
          id="gender"
          label="Gender"
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
          ]}
          name="gender"
          value={form.gender}
          onChange={handleChange}
        />
      </div>

      <div className=" w-full">
        <button
          type="submit"
          className="mt-4 block w-full rounded-md bg-primary py-2 text-sm font-semibold text-white hover:bg-secondary-light hover:text-black disabled:bg-gray-400 disabled:text-gray-700"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
