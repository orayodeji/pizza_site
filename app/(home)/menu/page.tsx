import Link from "next/link";
import { ExtraPizzaTiles } from "@/utils/menu";
import Image from "next/image";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

const categoryDetails: Record<string, { description: string; eyebrow: string }> = {
  Pizza: { eyebrow: "Fresh from the oven", description: "Classic slices, loaded toppings and shareable favourites." },
  "Cup Cake": { eyebrow: "A little treat", description: "Soft, sweet cupcakes for any occasion." },
  Donut: { eyebrow: "Sweet & glazed", description: "Colourful, indulgent donuts made to brighten your day." },
  Cake: { eyebrow: "Celebrate every bite", description: "Rich cakes for sharing, gifting or enjoying yourself." },
  "Sweet Bread": { eyebrow: "Baked today", description: "Warm, soft breads with a touch of sweetness." },
  Burger: { eyebrow: "Big flavour", description: "Stacked burgers and satisfying sides for hungry moments." },
};

export default function MenuHomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="overflow-hidden rounded-3xl bg-primary px-6 py-8 text-white shadow-lg shadow-primary/15 sm:px-10 sm:py-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wide text-secondary-light">
            <UtensilsCrossed size={15} aria-hidden="true" /> MADE FOR EVERY CRAVING
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">What are you in the mood for?</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">Explore our freshly made pizza, savoury favourites and sweet treats. Pick a category to start building your perfect order.</p>
        </div>
      </section>

      <section className="pt-8" aria-labelledby="menu-categories-heading">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary/60">Explore the menu</p>
            <h2 id="menu-categories-heading" className="mt-1 text-2xl font-extrabold text-primary sm:text-3xl">Choose a category</h2>
          </div>
          <p className="text-sm font-medium text-primary/60">{ExtraPizzaTiles.length} categories to explore</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ExtraPizzaTiles.map((obj) => {
            const detail = categoryDetails[obj.name];
            return (
          <Link
            href={`/menu/${obj.id}`}
            key={obj.id}
            className="group relative flex min-h-75 overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full bg-secondary-light transition-transform duration-500 group-hover:scale-125" />
            <div className="relative flex w-full flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/55">{detail?.eyebrow ?? "Chef's choice"}</p>
              <div className="mt-2 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-primary">{obj.name}</h3>
                  <p className="mt-2 max-w-55 text-sm leading-5 text-black/60">{detail?.description}</p>
                </div>
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-primary/5 sm:h-28 sm:w-28">
                  <Image src={obj.photoSrc} alt="" fill sizes="112px" className="object-contain p-2 transition duration-300 group-hover:scale-110" />
                </div>
              </div>
              <span className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold text-primary">Browse {obj.name}<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </div>
          </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
