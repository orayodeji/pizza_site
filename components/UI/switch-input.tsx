import { Switch } from "@headlessui/react";
export function SwitchInput({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className=" inline-flex items-center">
      <p className=" mr-2 text-xs font-semibold">Mark as Default</p>
      <Switch
        checked={checked}
        onChange={onChange}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/90 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-primary/60 data-focus:outline data-focus:outline-white border border-primary/20"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-primary/90 shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
        />
      </Switch>
    </div>
  );
}
