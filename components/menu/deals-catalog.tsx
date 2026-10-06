"use client";

import { MenuDealComp } from "@/components/menu/menu-deal-comp";
import { MenuDeals } from "@/utils/menu_deal";
import { Search, TicketPercent } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["All", "Pizza", "Burger", "Pasta", "Chicken"] as const;

export function DealsCatalog() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const deals = useMemo(() => MenuDeals.filter((deal) => {
    const matchesCategory = activeCategory === "All" || deal.category === activeCategory;
    const searchable = `${deal.name} ${deal.description} ${deal.category}`.toLowerCase();
    return matchesCategory && searchable.includes(query.trim().toLowerCase());
  }), [activeCategory, query]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="overflow-hidden rounded-3xl bg-primary px-6 py-8 text-white shadow-lg shadow-primary/15 sm:px-10 sm:py-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wide text-secondary-light">
            <TicketPercent size={15} aria-hidden="true" /> LIMITED-TIME OFFERS
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Good food, even better value.</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">Choose a deal, add its coupon, and make your next meal a little more delicious.</p>
        </div>
      </section>

      <section className="pt-8" aria-labelledby="deals-heading">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary/60">Save on favourites</p>
            <h2 id="deals-heading" className="mt-1 text-2xl font-extrabold text-primary sm:text-3xl">Find your perfect deal</h2>
          </div>
          <label className="relative block w-full lg:w-72">
            <span className="sr-only">Search deals</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary/55" size={18} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search deals" className="w-full rounded-xl border border-primary/15 bg-white py-3 pl-10 pr-4 text-sm text-primary outline-none transition placeholder:text-primary/45 focus:border-primary focus:ring-4 focus:ring-primary/10" />
          </label>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1" aria-label="Deal categories">
          {categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${activeCategory === category ? "bg-primary text-white shadow-sm" : "bg-white text-primary/70 ring-1 ring-primary/15 hover:bg-secondary-light"}`}>{category}</button>)}
        </div>

        <p className="mt-6 text-sm text-primary/60">{deals.length} {deals.length === 1 ? "deal" : "deals"} available</p>
        {deals.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">{deals.map((deal) => <MenuDealComp obj={deal} key={deal.id} />)}</div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-primary/25 bg-white px-6 py-14 text-center"><p className="font-bold text-primary">No deals found</p><p className="mt-1 text-sm text-primary/60">Try another search or category.</p></div>
        )}
      </section>
    </main>
  );
}
