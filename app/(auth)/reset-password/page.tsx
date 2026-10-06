"use client";
import TextInput from "@/components/UI/text-input";
import Correct from "@/public/auth/auth_correct.png";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
export default function ResetPassword() {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [complete, setComplete] = useState(false);
  if (complete) return <div className="px-6 py-10 text-center sm:px-10"><div className="mx-auto flex max-w-md flex-col items-center rounded-2xl bg-secondary-light/60 p-8"><Image src={Correct} alt="" className="size-18" /><h1 className="mt-4 text-2xl font-extrabold text-primary">Password reset successfully</h1><p className="mt-2 text-sm leading-6 text-primary/65">Your password has been updated. You can now sign in securely.</p><Link href="/login" className="mt-6 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white">Back to sign in</Link></div></div>;
  return <div className="px-6 py-8 sm:px-10 sm:py-10"><div className="mx-auto max-w-md"><p className="text-xs font-bold tracking-[0.16em] text-primary/60">SECURE YOUR ACCOUNT</p><h1 className="mt-2 text-3xl font-extrabold text-primary">Set a new password</h1><p className="mt-2 text-sm leading-6 text-primary/60">Choose a strong password you don&apos;t use elsewhere.</p><form onSubmit={(event: FormEvent) => { event.preventDefault(); if (form.password && form.password === form.confirmPassword) setComplete(true); }} className="mt-7 space-y-4"><TextInput label="New password" id="password" name="password" type="password" placeholder="Create a new password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} /><TextInput label="Confirm new password" id="confirm-password" name="confirmPassword" type="password" placeholder="Repeat your password" value={form.confirmPassword} onChange={(event) => setForm({ ...form, confirmPassword: event.target.value })} /><button disabled={!form.password || form.password !== form.confirmPassword} type="submit" className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">Update password</button></form><Link href="/login" className="mt-6 block text-center text-sm font-bold text-primary underline underline-offset-4">Back to sign in</Link></div></div>;
}
