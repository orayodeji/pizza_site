import "@/app/home.css";
import { FirstSection } from "@/components/home/first-section";
import { SecondSection } from "@/components/home/second-section";
import { ThirdSection } from "@/components/home/third-section";
import { FourthSection } from "@/components/home/fourth-section";
import { FifthSection } from "@/components/home/fifth-section";
import { SixthSection } from "@/components/home/sixth-section";
import { SeventhSection } from "@/components/home/seventh-section";
import { MapPin, Pizza, Tag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Fresh pizza, desserts and delivery</h1>
      <section id="welcome" aria-label="Welcome">
        <FirstSection />
      </section>

      <nav aria-label="Quick links" className="border-y border-primary/10 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
          <Link href="/menu" className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><span className="rounded-lg bg-secondary-light p-2 text-primary transition group-hover:bg-white"><Pizza size={18} aria-hidden="true" /></span><span><span className="block text-sm font-extrabold text-primary">Explore the menu</span><span className="text-xs text-primary/60">Find your favourite</span></span></Link>
          <Link href="/deals" className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><span className="rounded-lg bg-secondary-light p-2 text-primary transition group-hover:bg-white"><Tag size={18} aria-hidden="true" /></span><span><span className="block text-sm font-extrabold text-primary">View today&apos;s deals</span><span className="text-xs text-primary/60">More flavour, better value</span></span></Link>
          <Link href="/stores" className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><span className="rounded-lg bg-secondary-light p-2 text-primary transition group-hover:bg-white"><MapPin size={18} aria-hidden="true" /></span><span><span className="block text-sm font-extrabold text-primary">Find a store</span><span className="text-xs text-primary/60">Delivery or collection</span></span></Link>
        </div>
      </nav>

      <section id="signatures" aria-label="Signature pizzas"><SecondSection /></section>
      <section id="categories" aria-label="Menu categories"><ThirdSection /></section>
      <section id="offers" aria-label="Current offers"><FourthSection /></section>
      <section id="create" aria-label="Create your own pizza"><FifthSection /></section>
      <section id="desserts" aria-label="Desserts and extras"><SixthSection /></section>
      <section id="delivery" aria-label="Delivery information"><SeventhSection /></section>
    </main>
  );
}
