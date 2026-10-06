import { Plus } from "lucide-react";
export function ProfileHeading({
  heading,
  subHeading,
  buttonText = "Add New",
  showButton = true,
  onAdd,
}: {
  showButton?: boolean;
  heading: string;
  subHeading: string;
  buttonText?: string;
  onAdd?: () => void;
}) {
  return (
    <div className=" flex w-full justify-between items-start">
      <div>
        <p className="text-xl/5 font-semibold text-black/80">{heading}</p>
        <p className="text-xs text-black/40 mt-1.5 font-semibold">
          {subHeading}
        </p>
      </div>

      {showButton && (
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex border border-primary/75 py-2 px-4 rounded-full font-semibold items-center group hover:bg-primary"
        >
          <Plus className=" stroke-primary mr-2 stroke-3 group-hover:stroke-white " />
          <span className=" text-sm/1 text-primary/75 group-hover:text-white">
            {buttonText}
          </span>
        </button>
      )}
    </div>
  );
}
