import FBLogo from "@/public/auth/auth_fb.png";
import GLogo from "@/public/auth/auth_google.png";
import Image from "next/image";
import Link from "next/link";

export function AuthFooter({
  routeName,
  routePath,
}: {
  routeName: string;
  routePath: string;
}) {
  return (
    <>
      <div className="flex justify-center auth-footer mt-3">
        <Link
          href={{ pathname: "/social-auth", query: { social: "facebook" } }}
          type="button"
          className="outline-0 mr-1 cursor-pointer"
        >
          <Image src={FBLogo} alt="" style={{}} />
        </Link>
        <Link
          href={{ pathname: "/social-auth", query: { social: "google" } }}
          type="button"
          className="outline-0 ml-1 cursor-pointer"
        >
          <Image src={GLogo} alt="" style={{}} />
        </Link>
      </div>
      <div className="flex justify-center pt-7 pb-3">
        <Link
          href={routePath}
          className=" block hover:underline text-xl font-semibold underline"
        >
          {routeName}
        </Link>
      </div>
    </>
  );
}
