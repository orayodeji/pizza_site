"use client";
import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
}

export default function TextInput({
  label,
  description,
  error,
  className,
  id,
  type = "text",
  ...props
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <Field className={clsx("my-2")}>
      <Label htmlFor={id} className={clsx("ml-1 text-sm font-semibold")}>
        {label}
      </Label>
      {description && (
        <Description className="text-xs/4 text-gray-700">
          {description}
        </Description>
      )}
      <div className="relative">
        <Input
          type={inputType}
          id={id}
          className={clsx(
            "mt-2 block w-full rounded-xl border border-primary/20 bg-white px-3.5 py-3 text-sm text-primary placeholder:text-primary/40",
            "focus:not-data-focus:outline-none data-focus:border-primary data-focus:ring-4 data-focus:ring-primary/10",
            error && "border-red-500",
            isPassword && "pr-10",
            className,
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-500"
            aria-label={showPassword ? "hide password" : "show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="ml-3 mt-1 text-xs text-red-500">{error}</p>}
    </Field>
  );
}
