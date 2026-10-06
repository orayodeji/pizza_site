"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Loader } from "@/components/UI/loader";

export function useDummyAuth() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "complete">("idle");
  const [error, setError] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current !== null) clearTimeout(timer.current);
    },
    [],
  );

  function signIn(user: { name: string; email: string; provider: string }) {
    if (timer.current !== null) return;
    setError("");
    setStatus("loading");
    timer.current = setTimeout(() => {
      try {
        localStorage.setItem("pizza-bakery-user", JSON.stringify(user));
      } catch {
        timer.current = null;
        setStatus("idle");
        setError(
          "Unable to save your session. Please allow browser storage and try again.",
        );
        return;
      }
      window.dispatchEvent(new Event("pizza-bakery-user-change"));
      setStatus("complete");
      timer.current = setTimeout(() => router.replace("/"), 500);
    }, 1800);
  }

  return { signIn, status, error, busy: status !== "idle" };
}

export function DummyAuthStatus({
  complete,
  registering = false,
}: {
  complete: boolean;
  registering?: boolean;
}) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-3 py-4 text-center text-sm font-bold text-primary"
    >
      {complete ? (
        <CheckCircle2 className="size-8 text-green-700" />
      ) : (
        <Loader />
      )}
      <p>
        {complete
          ? `${registering ? "Account created" : "Signed in"} successfully. Redirecting home…`
          : registering
            ? "Creating your account…"
            : "Confirming your account…"}
      </p>
    </div>
  );
}
