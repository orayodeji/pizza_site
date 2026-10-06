import { ExtraTile } from "../UI/extra-tile";
import { ExtraPizzaTiles } from "@/utils/menu";
export function ThirdSection() {
  return (
    <div className="bg-secondary px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
      {ExtraPizzaTiles.map((obj) => (
        <div className="rounded-2xl bg-white/45 transition hover:-translate-y-1 hover:bg-white hover:shadow-md" key={obj.id}><ExtraTile extraObj={obj} /></div>
      ))}
      </div>
    </div>
  );
}
