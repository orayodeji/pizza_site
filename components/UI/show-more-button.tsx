import { ChevronDown } from "lucide-react";

export function ShowMoreButton({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="mx-auto mt-5 inline-flex items-center rounded-full border border-primary px-5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      Show more
      <ChevronDown className="ml-1" size={18} aria-hidden="true" />
    </button>
  );
}
