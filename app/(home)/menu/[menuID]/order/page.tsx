import { MenuPageBreads } from "@/utils/menu_bread";
import { MenuPageBurgers } from "@/utils/menu_burger";
import { MenuPageCakes } from "@/utils/menu_cake";
import { MenuPageCupCakes } from "@/utils/menu_cup_cake";
import { MenuPageDonuts } from "@/utils/menu_donut";
import { MenuPagePizzas } from "@/utils/menu_pizza";
import { ExtraPizzaTiles } from "@/utils/menu";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const menuGroups = [MenuPagePizzas, MenuPageCupCakes, MenuPageDonuts, MenuPageCakes, MenuPageBreads, MenuPageBurgers];

export default async function Orders({ params }: { params: Promise<{ menuID: string }> }) {
  const { menuID } = await params;
  const categoryId = Number(menuID);
  const items = menuGroups[categoryId - 1];
  const category = ExtraPizzaTiles.find((item) => item.id === categoryId);
  if (!Number.isInteger(categoryId) || !items || !category) notFound();

  return <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
    <Link href={`/menu/${categoryId}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/70"><ArrowLeft size={17} aria-hidden="true" /> Back to {category.name}</Link>
    <section className="mt-6 rounded-3xl bg-primary px-6 py-8 text-white shadow-lg shadow-primary/15 sm:px-10 sm:py-10"><div className="max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-secondary-light"><ShoppingBag size={15} aria-hidden="true" /> START YOUR ORDER</div><h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Choose your {category.name.toLowerCase()}.</h1><p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">Select an item to review its options and make it exactly the way you like it.</p></div></section>
    <section className="pt-8" aria-labelledby="items-heading"><div className="flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-primary/60">{category.name} menu</p><h2 id="items-heading" className="mt-1 text-2xl font-extrabold text-primary sm:text-3xl">Pick an item to order</h2></div><p className="text-sm text-primary/60">{items.length} choices</p></div><div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((item) => <Link key={item.id} href={`/menu/${categoryId}/order/${item.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><div className="relative aspect-square overflow-hidden rounded-xl bg-secondary-light"><Image src={item.photoSrc} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-contain p-3 transition duration-500 group-hover:scale-105" /></div><div className="flex flex-1 flex-col px-1 pb-1 pt-4"><h3 className="text-lg font-extrabold leading-tight text-primary">{item.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-5 text-black/60">{item.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Customize &amp; order <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>)}</div></section>
  </main>;
}
