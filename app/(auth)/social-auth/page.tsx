"use client";
import FBLogo from "@/public/auth/auth_fb.png";
import GLogo from "@/public/auth/auth_google.png";
import { Loader } from "@/components/UI/loader";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
const DUMMY_USER = { name: "Alex Morgan", provider: "social" };
export default function LoginSocial() {
  return (
    <Suspense fallback={null}>
      <LoginSocialContent />
    </Suspense>
  );
}

function LoginSocialContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const provider =
    searchParams.get("social") === "google" ? "google" : "facebook";
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      localStorage.setItem("pizza-bakery-user", JSON.stringify(DUMMY_USER));
      setComplete(true);
      window.setTimeout(() => router.replace("/"), 500);
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [router]);
  return (
    <div className="px-6 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-primary/60">
          SOCIAL SIGN IN
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-primary">
          Connecting to {provider === "google" ? "Google" : "Facebook"}
        </h1>
        <p className="mt-3 text-sm leading-6 text-primary/60">
          We&apos;re securely signing you in. You&apos;ll be redirected home
          automatically.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-primary/10 bg-secondary-light/50 shadow-sm">
          <div className="flex gap-1.5 bg-primary/10 px-4 py-3">
            <span className="size-2.5 rounded-full bg-red-500" />
            <span className="size-2.5 rounded-full bg-secondary" />
            <span className="size-2.5 rounded-full bg-green-500" />
          </div>
          <div className="flex min-h-60 flex-col items-center justify-center p-8">
            <Image
              src={provider === "google" ? GLogo : FBLogo}
              alt={`${provider} logo`}
              className="size-16"
            />
            <div className="mt-5">
              {complete ? (
                <CheckCircle2
                  className="mx-auto size-8 text-green-700"
                  aria-label="Sign in complete"
                />
              ) : (
                <Loader />
              )}
            </div>
            <p className="mt-4 text-sm font-bold text-primary">
              {complete ? "Signed in successfully" : "Confirming your account…"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
