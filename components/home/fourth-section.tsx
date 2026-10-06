import Image from "next/image";
import promoOne from "@/public/img/promo_one.png";
import promoTwo from "@/public/img/promo_two.png";
import promoThree from "@/public/img/promo_three.png";
import Link from "next/link";

export function FourthSection() {
  const imgPromoLargeStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "40px",
  };
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center"><p className="text-xs font-bold tracking-[0.18em] text-primary/60">SAVE ON YOUR FAVOURITES</p><h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">Pizza deals worth sharing</h2><p className="mt-3 text-sm text-primary/65">Great value, generous portions and your next easy dinner.</p></div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {/* first image box of one  */}
        <div className="promo-large h-full">
          <Image src={promoOne} alt="Pizza deal" style={imgPromoLargeStyle} className="object-cover" />
        </div>

        {/* second image box of two */}
        <div className="h-full promo-large flex flex-col justify-between promo-height">
          <div className="2xl:h-5/12 h-12/25">
            <Image src={promoTwo} alt="Pizza deal" style={imgPromoLargeStyle} className="object-cover" />
          </div>
          <div className="2xl:h-5/12 h-12/25">
            <Image
              src={promoThree}
              alt="Pizza deal"
              style={imgPromoLargeStyle}
            />
          </div>
        </div>
      </div>
      <Link href="/deals" className="mx-auto mt-8 block w-fit rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary/90">Browse all deals</Link>
    </div>
  );
}
