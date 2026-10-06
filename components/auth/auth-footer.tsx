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
      <p className="mt-7 text-center text-xs font-bold uppercase tracking-[0.14em] text-primary/55">or continue with</p>
      <div className="flex justify-center gap-3 mt-3">
        <Link
          href={{ pathname: "/social-auth", query: { social: "facebook" } }}
          type="button"
          className="rounded-xl border border-primary/15 p-2 transition hover:-translate-y-0.5 hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Image src={FBLogo} alt="" style={{}} />
        </Link>
        <Link
          href={{ pathname: "/social-auth", query: { social: "google" } }}
          type="button"
          className="rounded-xl border border-primary/15 p-2 transition hover:-translate-y-0.5 hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Image src={GLogo} alt="" style={{}} />
        </Link>
      </div>
      <div className="flex justify-center pt-6">
        <Link
          href={routePath}
          className="text-sm font-bold text-primary underline underline-offset-4 transition hover:text-primary/70"
        >
          {routeName}
        </Link>
      </div>
    </>
  );
}
