"use client";
import TextInput from "@/components/UI/text-input";
import { useState } from "react";
import Correct from "@/public/auth/auth_correct.png";
import Link from "next/link";
import Image from "next/image";
export default function ResetPassword() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((obj) => ({
      ...obj,
      [name]: value,
    }));
  };

  const [showSuccess, setShowSuccess] = useState(true);

  return (
    <div className="md:py-8 xl:py-16 xl:px-48">
      {!showSuccess && (
        <>
          <p className="xl:text-2xl font-normal text-center">Reset Password</p>

          <div>
            <TextInput
              type="password"
              label="New Password"
              name="password"
              placeholder="Enter new password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextInput
              type="password"
              label="Confirm New Password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className=" flex justify-center">
            <button
              type="submit"
              className="mt-4 rounded-md px-4 py-4 w-11/12 text-xl disabled:bg-gray-400 disabled:text-gray-700 bg-primary hover:bg-secondary-light text-white font-semibold hover:text-black"
            >
              Change Password
            </button>
          </div>
          <div className="flex justify-center pt-7 pb-3">
            <Link
              href={"/login"}
              className=" block hover:underline text-xl font-semibold underline hover:scale-110"
            >
              Back to Login
            </Link>
          </div>
        </>
      )}

      {showSuccess && (
        <>
          <div className="md:w-10/12 mx-auto bg-gray-200  rounded-xl min-h-68 flex-col flex justify-center items-center">
            <Image src={Correct} alt="correct" style={{}} className="mb-4" />
            <div>
              <p className="text-2xl text-center font-semibold">
                Password Reset Successfully
              </p>
            </div>
          </div>
          <div className=" flex justify-center">
            <Link
              href={"/login"}
              className="mt-4 rounded-md px-4 py-4 w-9/12 text-xl disabled:bg-gray-400 disabled:text-gray-700 bg-primary hover:bg-secondary-light text-white font-semibold hover:text-black text-center"
            >
              Back to Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
