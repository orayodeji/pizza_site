"use client";

import { ShowMoreButton } from "@/components/UI/show-more-button";
import { MenuPageBurgers } from "@/utils/menu_burger";
import { MenuPageCupCakes } from "@/utils/menu_cup_cake";
import { MenuPageDonuts } from "@/utils/menu_donut";
import { MenuPagePizzas } from "@/utils/menu_pizza";
import { Heart, HeartOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const savedProducts = [
  { ...MenuPagePizzas[0], key: "pizza-1", category: "Pizza" },
  { ...MenuPageCupCakes[0], key: "cupcake-1", category: "Cupcake" },
  { ...MenuPageDonuts[5], key: "donut-6", category: "Donut" },
  { ...MenuPageBurgers[2], key: "burger-3", category: "Burger" },
  { ...MenuPageCupCakes[0], key: "cupcake-3", category: "Cupcake" },
  { ...MenuPageDonuts[5], key: "donut-4", category: "Donut" },
  { ...MenuPageBurgers[2], key: "burger-4", category: "Burger" },
];

export function SavedProductTiles() {
  const [products, setProducts] = useState(savedProducts);
  const [visibleProductCount, setVisibleProductCount] = useState(2);
  const visibleProducts = products.slice(0, visibleProductCount);

  if (products.length === 0) {
    return (
      <div className="mt-6 flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-secondary/70 bg-secondary/10 px-6 text-center">
        <HeartOff className="mb-3 stroke-primary" size={36} />
        <p className="text-lg font-semibold text-black/80">
          No saved items yet
        </p>
        <p className="mt-1 text-sm text-black/55">
          Save products you love to find them quickly later.
        </p>
        <Link
          href="/menu"
          className="mt-5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <article
            key={product.key}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-secondary/50 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md"
          >
            <Link
              href={`/menu/${product.exploreId}/order/${product.id}`}
            className="rounded-md bg-secondary/15"
              aria-label={`View ${product.name}`}
            >
              <Image
                src={product.photoSrc}
                alt={product.name}
              className="h-24 w-full object-contain"
              />
            </Link>

          <div className="flex min-w-0 flex-1 flex-col pt-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">
                {product.category}
              </p>
              <Link
                href={`/menu/${product.exploreId}/order/${product.id}`}
              className="mt-1 line-clamp-2 pr-6 text-xs font-bold text-black/85 hover:text-primary"
              >
                {product.name}
              </Link>
            <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-black/55">
                {product.description}
              </p>
              <Link
                href={`/menu/${product.exploreId}/order/${product.id}`}
              className="mt-auto pt-2 text-[11px] font-bold text-primary underline-offset-2 hover:underline"
              >
                Order now
              </Link>
            </div>

            <button
              type="button"
              onClick={() =>
                setProducts((currentProducts) =>
                  currentProducts.filter(({ key }) => key !== product.key),
                )
              }
            className="absolute right-3 top-3 rounded-full bg-white/80 p-1 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Remove ${product.name} from saved items`}
              title="Remove from saved items"
            >
              <Heart className="fill-current" size={19} aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
      {visibleProductCount < products.length && (
        <ShowMoreButton
          onClick={() =>
            setVisibleProductCount((currentCount) => currentCount + 2)
          }
        />
      )}
    </>
  );
}
