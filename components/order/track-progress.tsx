"use client";
import { Check, ReceiptText } from "lucide-react";
const steps = [
  "Order Placed",
  "Payment Confirmed",
  "Order confirmed",
  "Preparing",
  "Delivered",
];
export function TrackProgress({ currentStep = 3 }: { currentStep: number }) {
  return (
    <div className="overflow-x-auto pb-3">
      <div className="flex min-w-150 items-start px-2 sm:px-6">
        {steps.map((label, index) => (
        <div
          key={index}
          className="relative flex flex-1 items-start last:flex-none"
        >
          {/* step + text */}
          <div className=" flex w-10 flex-col items-center">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                index < currentStep
                  ? "bg-green-700 text-white"
                  : index === currentStep
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-400"
              }`}
            >
              {index < currentStep && <Check className="h-5 w-5 stroke-3" />}

              {index === currentStep && <ReceiptText className="h-5 w-5" />}

              {index > currentStep && (
                <span className="h-3 w-3 rounded-full border-2 border-gray-400" />
              )}
            </div>
            <span className=" mt-2 whitespace-nowrap text-sm font-medium text-gray-700">
              {label}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`mt-5 h-0.75 flex-1 ${
                index < currentStep - 1
                  ? "bg-green-700"
                  : index === currentStep - 1
                    ? "bg-linear-to-r from-green-700 to-orange-500"
                    : "bg-gray-200"
              }`}
            />
          )}
        </div>
        ))}
      </div>
    </div>
  );
}
