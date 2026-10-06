"use client";
import { DummyAuthStatus, useDummyAuth } from "@/components/auth/use-dummy-auth";
import { AuthFooter } from "@/components/auth/auth-footer";
import TextInput from "@/components/UI/text-input";
import { FormEvent, useState } from "react";
export default function Signup() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", username: "", password: "", confirmPassword: "", phoneNumber: "" });
  const { signIn, status, error, busy } = useDummyAuth();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.email.trim() || !form.password || form.password !== form.confirmPassword || busy) return;
    signIn({
      name: [form.firstName.trim(), form.lastName.trim()].filter(Boolean).join(" ") || form.username.trim() || "Alex Morgan",
      email: form.email.trim(),
      provider: "email",
    });
  }
  const update = (event: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [event.target.name]: event.target.value });
  return <div className="px-6 py-8 sm:px-10 sm:py-10"><div className="mx-auto max-w-xl"><p className="text-xs font-bold tracking-[0.16em] text-primary/60">CREATE YOUR ACCOUNT</p><h1 className="mt-2 text-3xl font-extrabold text-primary">Let&apos;s get you started.</h1><p className="mt-2 text-sm leading-6 text-primary/60">Save your favourites and make ordering faster.</p><form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2"><div className="sm:col-span-2"><TextInput disabled={busy} label="Username" id="username" name="username" placeholder="Choose a username" value={form.username} onChange={update} /></div><TextInput disabled={busy} label="First name" id="first-name" name="firstName" placeholder="First name" value={form.firstName} onChange={update} /><TextInput disabled={busy} label="Last name" id="last-name" name="lastName" placeholder="Last name" value={form.lastName} onChange={update} /><div className="sm:col-span-2"><TextInput disabled={busy} label="Email address" id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={update} /></div><div className="sm:col-span-2"><TextInput disabled={busy} label="Phone number" id="phone" name="phoneNumber" type="tel" placeholder="Your phone number" value={form.phoneNumber} onChange={update} /></div><TextInput disabled={busy} label="Password" id="password" name="password" type="password" required placeholder="Create a password" value={form.password} onChange={update} /><TextInput disabled={busy} label="Confirm password" id="confirm-password" name="confirmPassword" type="password" required placeholder="Repeat your password" value={form.confirmPassword} onChange={update} /><button disabled={!form.email.trim() || !form.password || form.password !== form.confirmPassword || busy} type="submit" className="sm:col-span-2 mt-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40">{status === "complete" ? "Account created" : busy ? "Creating account…" : "Create account"}</button>{busy && <div className="sm:col-span-2"><DummyAuthStatus complete={status === "complete"} registering /></div>}{error && <p role="alert" className="sm:col-span-2 text-sm text-red-600">{error}</p>}</form><AuthFooter routeName="Already have an account? Sign in" routePath="/login" /></div></div>;
}
