"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FPHomeTab } from "@/components/auth/forget-password-home-tab";
import { FPTabValue } from "@/components/auth/forget-password-tab-value";

export default function ResetPassword() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordContent />
    </Suspense>
  );
}

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const tabValue = searchParams.get("tab");

  return (
    <>
      {!tabValue && <FPHomeTab />}
      {tabValue && <FPTabValue tabValue={tabValue} />}
    </>
  );
}
