import { MenuPageCateProps } from "@/utils/menu";
import { ArrowRight, Flame } from "lucide-react";
import Image from "next/image";

export const PizzaTile = ({ pizzaObj, priority = false }: { pizzaObj: MenuPageCateProps; priority?: boolean }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15">
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary-light">
      <Image src={pizzaObj.photoSrc} alt={pizzaObj.name} fill priority={priority} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-3 transition duration-500 group-hover:scale-105" />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-primary shadow-sm"><Flame size={13} aria-hidden="true" /> Signature</span>
    </div>
    <div className="flex flex-1 flex-col px-1 pb-1 pt-4 text-left"><h3 className="text-lg font-extrabold leading-tight text-primary">{pizzaObj.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-5 text-black/60">{pizzaObj.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Order this pizza <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div>
  </article>
);
