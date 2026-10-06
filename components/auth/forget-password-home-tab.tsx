import Image from "next/image";
import Phone from "@/public/auth/auth_phone.png";
import GMail from "@/public/auth/auth_gmail.png";
import { StaticImageData } from "next/image";
import Link from "next/link";
type ResetOptionType = {
  photoSrc: string | StaticImageData;
  name: string;
  value: string;
};
export const ResetOptions: ResetOptionType[] = [
  { name: "Email Address", photoSrc: GMail, value: "gmail" },
  { name: "Phone Number", photoSrc: Phone, value: "phone" },
];
export function FPHomeTab() {
  return (
    <div className="reset-password md:py-8 xl:py-8 xl:px-7">
      <p className="xl:text-2xl font-semibold text-center">Forget Password</p>
      <p className="text-base text-center font-semibold mt-3">Reset via</p>

      <div className="flex  justify-around items-center xl:mt-5 w-7/8 xl:w-5/14 mx-auto">
        {ResetOptions.map((obj, index) => (
          <Link
            href={{
              pathname: "/forget-password",
              query: { tab: obj.value },
            }}
            className="bg-gray-200 flex-col flex min-h-36 min-w-36 justify-center items-center rounded-lg"
            key={index}
          >
            <Image
              src={obj.photoSrc}
              alt={obj.name}
              style={{}}
              className="h-16 w-16"
            />
            <p className="block mt-3 font-semibold">{obj.name}</p>
          </Link>
        ))}
      </div>
      <Link
        href={"/login"}
        type="button"
        className=" block xl:w-4/14 w-6/8 bg-primary mx-auto text-center py-3 text-white font-semibold rounded-lg mt-7"
      >
        Back to Login
      </Link>

      {/* second one */}
    </div>
  );
}
