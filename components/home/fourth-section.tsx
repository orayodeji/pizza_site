import Image from "next/image";
import promoOne from "@/public/img/promo_one.png";
import promoTwo from "@/public/img/promo_two.png";
import promoThree from "@/public/img/promo_three.png";

export function FourthSection() {
  const imgPromoLargeStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "40px",
  };
  return (
    <div className="py-16">
      <p className="text-center 2xl:text-5xl md:text-3xl text-lg mb-10">
        Pizza Available Deals
      </p>

      <div className="grid grid-cols-2 md:gap-8 xl:gap-16 2xl:gap-40 xl:px-32 md:px-20 2xl:px-52">
        {/* first image box of one  */}
        <div className="promo-large h-full">
          <Image src={promoOne} alt="promo one" style={imgPromoLargeStyle} />
        </div>

        {/* second image box of two */}
        <div className="h-full promo-large flex flex-col justify-between promo-height">
          <div className="2xl:h-5/12 h-12/25">
            <Image src={promoTwo} alt="promo two" style={imgPromoLargeStyle} />
          </div>
          <div className="2xl:h-5/12 h-12/25">
            <Image
              src={promoThree}
              alt="promo three"
              style={imgPromoLargeStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
