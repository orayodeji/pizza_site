"use client";
import { AuthFooter } from "@/components/auth/auth-footer";
import {
  DummyAuthStatus,
  useDummyAuth,
} from "@/components/auth/use-dummy-auth";
import TextInput from "@/components/UI/text-input";
import Link from "next/link";
import { FormEvent, useState } from "react";
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { signIn, status, error, busy } = useDummyAuth();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.email.trim() || !form.password || busy) return;
    signIn({
      name: "Alex Morgan",
      email: form.email.trim(),
      provider: "email",
    });
  }
  return (
    <div className="px-6 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-md">
        <p className="text-xs font-bold tracking-[0.16em] text-primary/60">
          WELCOME BACK
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-primary">
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm leading-6 text-primary/60">
          Pick up where your last order left off.
        </p>
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <TextInput
            label="Email address"
            id="email"
            name="email"
            type="email"
            required
            disabled={busy}
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
          <div>
            <TextInput
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              disabled={busy}
              placeholder="Enter your password"
              value={form.password}
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
            />
            <Link
              href="/forget-password"
              className="mt-2 block w-fit text-sm font-bold text-primary underline underline-offset-4"
            >
              Forgot password?
            </Link>
          </div>
          <button
            disabled={!form.email.trim() || !form.password || busy}
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "complete"
              ? "Signed in"
              : busy
                ? "Signing in…"
                : "Sign in"}
          </button>
          {busy && <DummyAuthStatus complete={status === "complete"} />}
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
        </form>
        <AuthFooter
          routeName="New here? Create an account"
          routePath="/signup"
        />
      </div>
    </div>
  );
}
