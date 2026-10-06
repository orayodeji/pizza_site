import { MenuPageCateProps } from "@/utils/menu";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MenuPhotoTab({
  text,
  arr,
  isPizza = false,
  paramsID,
}: {
  isPizza?: boolean;
  text: string;
  arr: MenuPageCateProps[];
  paramsID: number;
}) {
  return (
    <section className="py-7 first:pt-0 sm:py-9">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary/55">Handpicked for you</p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">{text}</h2>
        </div>
        <p className="hidden text-sm font-medium text-primary/55 sm:block">{arr.length} choices</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {arr.map((obj) => (
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10" key={obj.id}>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary-light">
              <Image src={obj.photoSrc} alt={obj.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-contain p-3 transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
              <h3 className="text-lg font-extrabold leading-tight text-primary">{obj.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-5 text-black/60">{obj.description}</p>
              <div className="mt-4 grid gap-2">
                <Link href={`/menu/${paramsID}/order/${obj.id}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Order now <ArrowRight size={16} aria-hidden="true" /></Link>
                {isPizza && (
                  <Link href={`/menu/${paramsID}/order/${obj.id}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><SlidersHorizontal size={16} aria-hidden="true" /> Customize</Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
