import { useState } from "react";
import TextInput from "../UI/text-input";
import Link from "next/link";
import { ResetOptions } from "./forget-password-home-tab";

export function FPTabValue({ tabValue }: { tabValue: string }) {
  const [identifier, setIdentifier] = useState("");
  return (
    <div className="md:py-8 xl:py-16 xl:px-48">
      <p className=" text-center xl:text-2xl md:text-xl font-semibold">
        Forget Password
      </p>
      <div>
        <TextInput
          label={ResetOptions.find((obj) => obj.value === tabValue)?.name || ""}
          id="email"
          name="identifier"
          placeholder={`Enter your ${ResetOptions.find((obj) => obj.value === tabValue)?.name || ""}`}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </div>

      <div className=" flex justify-center">
        <button
          type="submit"
          className="mt-4 rounded-md px-4 py-4 w-11/12 text-xl disabled:bg-gray-400 disabled:text-gray-700 bg-primary hover:bg-secondary-light text-white font-semibold hover:text-black"
        >
          Reset Password
        </button>
      </div>
      <div className="flex justify-center pt-7 pb-3">
        <Link
          href={"/login"}
          className=" block hover:underline text-xl font-semibold underline hover:scale-110 mx-3"
        >
          Back to Login
        </Link>
        <Link
          href={"/forget-password"}
          className=" block hover:underline text-xl font-semibold underline hover:scale-110 mx-3"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
