"use client";
import TextInput from "@/components/UI/text-input";
import Link from "next/link";
import { useState } from "react";
import { AuthFooter } from "@/components/auth/auth-footer";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };

  return (
    <div className="md:py-8 xl:py-16 xl:px-48">
      <p className=" xl:text-2xl font-normal text-center">Login</p>

      <div>
        <TextInput
          label="Email"
          id="email"
          name="email"
          placeholder="Enter your email address or username"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
        <Link
          className="font-semibold text-right block text-gray-600 hover:text-gray-800"
          href={"/forget-password"}
        >
          {/* forget password click here  */}
          Forget Password?
        </Link>
      </div>
      <div className=" flex justify-center">
        <button
          type="submit"
          className="mt-4 rounded-md px-4 py-4 w-11/12 text-xl disabled:bg-gray-400 disabled:text-gray-700 bg-primary hover:bg-secondary-light text-white font-semibold hover:text-black"
        >
          Login
        </button>
      </div>
      <p className="text-center text-sm font-bold mt-3">or login with</p>

      <AuthFooter routeName="Create Account" routePath="/signup" />
    </div>
  );
}
