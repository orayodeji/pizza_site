"use client";
import TextInput from "@/components/UI/text-input";
import { useState } from "react";
import { AuthFooter } from "@/components/auth/auth-footer";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };
  return (
    <div className="md:py-8 xl:py-8 xl:px-7">
      <p className=" xl:text-2xl  font-normal text-center">Signup</p>

      <div>
        <TextInput
          label="Username"
          id="username"
          name="username"
          placeholder="Enter your unique username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div className=" grid grid-cols-2 gap-6">
        <TextInput
          label="First Name"
          id="first-name"
          name="firstName"
          placeholder="Enter your first name"
          value={form.firstName}
          onChange={handleChange}
        />
        <TextInput
          label="Last Name"
          id="last-name"
          name="lastName"
          placeholder="Enter your last name"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          label="Email"
          id="emaill"
          name="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          label="Phone Number"
          id="phonenumber"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={form.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className=" grid grid-cols-2 gap-6">
        <TextInput
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
        <TextInput
          label="Confirm Password"
          id="confirm-password"
          name="confirmPassword"
          type="password"
          placeholder=" Enter your confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <div className=" flex justify-center">
        <button
          type="submit"
          className="mt-4 rounded-md px-4 py-4 w-3/4 text-xl disabled:bg-gray-400 disabled:text-gray-700 bg-primary hover:bg-secondary-light text-white font-semibold hover:text-black"
        >
          Sign Up
        </button>
      </div>

      <AuthFooter routeName="login" routePath="/login" />
    </div>
  );
}
