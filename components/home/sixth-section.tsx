import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ImageOne from "@/public/home/six/sixthsection.png";
import PastryOne from "@/public/home/six/6_one.png";
import PastryTwo from "@/public/home/six/6_two.png";
import PastryThree from "@/public/home/six/6_three.png";
import { ExploreTiles, PastryTiles } from "@/utils/menu";

const pastryImages: StaticImageData[] = [PastryOne, PastryTwo, PastryThree];
const categoryRoutes: Record<string, string> = {
  Donut: "/menu/3", "Cup Cake": "/menu/2", "White Bread": "/menu/5", "Chicken Pie": "/menu/1", "Brown Cake": "/menu/4", Croissant: "/menu/5", Bread: "/menu/5",
};

export function SixthSection() {
  return (
    <div className="overflow-hidden bg-[#fffdf9] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div className="max-w-xl"><div className="inline-flex items-center gap-2 rounded-full bg-secondary-light px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-primary"><Sparkles size={14} aria-hidden="true" /> FRESHLY PREPARED</div><h2 className="mt-5 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Change the way you pizza.</h2><p className="mt-4 text-sm leading-6 text-black/65 sm:text-base">Take home a delicious pizza made from scratch with fresh ingredients, then bake it to golden perfection whenever you&apos;re ready.</p><Link href="/menu/1" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary/90">Build your pizza <ArrowRight size={17} aria-hidden="true" /></Link></div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary-light shadow-lg shadow-primary/10"><Image src={ImageOne} alt="Freshly prepared pizza ingredients" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
        </section>

        <section className="mt-20" aria-labelledby="cream-heading"><div className="text-center"><p className="text-xs font-bold tracking-[0.16em] text-primary/60">SWEET MOMENTS</p><h2 id="cream-heading" className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">Styled with fresh cream</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-black/60">A little something sweet makes every pizza night better.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">{PastryTiles.map((pastry, index) => <Link href="/menu/2" key={pastry.id} className="group relative overflow-hidden rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"><div className="relative mx-auto aspect-[4/3] max-w-60 overflow-hidden rounded-xl bg-secondary-light"><Image src={pastryImages[index]} alt="" fill sizes="240px" className="object-contain p-3 transition duration-500 group-hover:scale-105" /></div><h3 className="mt-5 text-lg font-extrabold text-primary">{pastry.name}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">Explore treats <ArrowRight size={15} aria-hidden="true" /></span></Link>)}</div>
        </section>

        <section className="mt-20" aria-labelledby="more-heading"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold tracking-[0.16em] text-primary/60">SOMETHING FOR EVERYONE</p><h2 id="more-heading" className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">We&apos;re more than just pizza</h2></div><Link href="/menu" className="text-sm font-bold text-primary underline underline-offset-4">View full menu</Link></div>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">{ExploreTiles.map((item) => <Link href={categoryRoutes[item.name] ?? "/menu"} key={item.id} className="group rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-md"><div className="relative aspect-square overflow-hidden rounded-xl bg-secondary-light"><Image src={item.photoSrc} alt="" fill sizes="(max-width: 640px) 50vw, 160px" className="object-cover transition duration-300 group-hover:scale-105" /></div><p className="mt-3 text-sm font-extrabold text-primary">{item.name}</p></Link>)}</div>
        </section>
      </div>
    </div>
  );
}
