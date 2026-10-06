import { ExtraTile } from "../UI/extra-tile";
import { ExtraPizzaTiles } from "@/utils/menu";
export function ThirdSection() {
  return (
    <div
      className="w-full grid grid-cols-6 gap-2 md:gap-8 xl:gap-5 xl:py-12 lg:py-8 lg:px-24 xl:px-36  justify-end"
      style={{ backgroundColor: "#D9C08D" }}
    >
      {ExtraPizzaTiles.map((obj, index) => (
        <ExtraTile extraObj={obj} key={index} />
      ))}
    </div>
  );
}
