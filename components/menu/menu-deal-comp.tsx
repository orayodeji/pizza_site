"use client";

import { MenuDealProps } from "@/utils/menu";
import { Check, Plus, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function MenuDealComp({ obj }: { obj: MenuDealProps }) {
  const [added, setAdded] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary-light">
        <Image
          src={obj.photoSrc}
          alt={obj.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-sm">
          {obj.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold leading-tight text-primary">{obj.name}</h2>
          <p className="shrink-0 text-xl font-extrabold text-primary">${obj.price.toFixed(2)}</p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-black/60">{obj.description}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-black/50">
          <Users size={14} aria-hidden="true" />
          {obj.serves}
        </div>
        <button
          type="button"
          onClick={() => setAdded(!added)}
          aria-pressed={added}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${added ? "bg-secondary text-primary" : "bg-primary text-white hover:bg-primary/90"}`}
        >
          {added ? <Check size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}
          {added ? "Coupon added" : "Add coupon"}
        </button>
      </div>
    </article>
  );
}
