import { Check, ReceiptText } from "lucide-react";

const steps = [
  { label: "Order", status: "completed" },
  { label: "Payment", status: "completed" },
  { label: "Confirmed", status: "completed" },
  { label: "Preparing", status: "current" },
  { label: "Delivered", status: "upcoming" },
];

export function TrackProgressOne() {
  return (
    <div className=" flex w-full items-center">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-1 items-center last:flex-none">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.status === "completed" ? "bg-green-700 text-white" : step.status === "current" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"}`}
          >
            {step.status === "completed" && (
              <Check className=" h-5 w-5 stroke-3" />
            )}

            {step.status === "current" && <ReceiptText className="h-5 w-5" />}

            {step.status === "upcoming" && (
              <span className="h-4 w-4 rounded-full border-2 border-gray-400"></span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              //   className={`h-0.75 flex-1 ${steps[index + 1].status === "upcoming" ? "bg-gray-200" : "bg-green-700"}`}
              className={`h-0.75 flex-1 ${index === 2 ? "bg-linear-to-r from-green-700 to-orange-500" : index < 2 ? "bg-green-700" : "bg-gray-200"}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
