"use client";
import { useSearchParams } from "next/navigation";
import FBLogo from "@/public/auth/auth_fb.png";
import GLogo from "@/public/auth/auth_google.png";
import Image from "next/image";
import { Loader } from "@/components/UI/loader";
export default function LoginSocial() {
  const searchParams = useSearchParams();
  const colors = ["bg-red-700", "bg-yellow-500", "bg-green-400"];
  const search = searchParams.get("social");
  return (
    <div className="md:py-8 xl:py-12 xl:px-48 social-auth ">
      <p className="xl:text-2xl font-normal text-center mb-2">
        Login via <span className="capitalize">{search}</span>
      </p>

      <div className="md:w-96 mx-auto bg-gray-200 rounded-xl min-h-96 flex-col flex">
        <div className="h-10 inline-flex justify-start py-1 px-3 bg-gray-400 rounded-t-xl w-full items-center ">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className={`px-1 rounded-full w-3 h-3 mr-1 ${colors[index]} `}
              key={index}
            ></div>
          ))}
        </div>
        <div className="flex-1 flex flex-col rounded-b-xl justify-center items-center">
          <Image
            src={search === "google" ? GLogo : FBLogo}
            alt="social logo"
            style={{}}
            className="mb-4"
          />
          <Loader />
        </div>
      </div>

      <button className="md:w-80 mx-auto block rounded-lg text-white font-semibold py-3 bg-primary text-xl mt-2">
        Logged in Successfully
      </button>
    </div>
  );
}
