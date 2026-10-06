"use client";

import { AddEditOrder } from "@/components/order/add-edit-order";
import { SummaryOrder } from "@/components/order/summary-order";
import {
  CustomizationGroupProps,
  customizeOrderData,
  MenuPageCateProps,
} from "@/utils/menu";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function OrderExperience({
  category,
  categoryId,
  product,
}: {
  category: string;
  categoryId: number;
  product: MenuPageCateProps;
}) {
  const [customizeOrder, setCustomizeOrder] =
    useState<CustomizationGroupProps[]>(() =>
      customizeOrderData.map((group) =>
        group.id !== "pizza"
          ? group
          : {
              ...group,
              title: category === "Pizza" ? "Choose your size" : `Choose your ${category.toLowerCase()} option`,
              description: `Select the ${product.name} option that suits your appetite.`,
              options: group.options.map((option, index) => ({
                ...option,
                name: `${["Small", "Medium", "Large"][index]} ${product.name}`,
              })),
            },
      ),
    );
  const handleRadioChange = (groupId: string, optionId: string) =>
    setCustomizeOrder((current) =>
      current.map((group) =>
        group.id !== groupId
          ? group
          : {
              ...group,
              options: group.options.map((option) => ({
                ...option,
                selected: option.id === optionId,
                quantity: option.id === optionId ? 1 : 0,
              })),
            },
      ),
    );
  const handleCheckboxQuantity = (
    groupId: string,
    optionId: string,
    quantity: number,
  ) =>
    setCustomizeOrder((current) =>
      current.map((group) =>
        group.id !== groupId
          ? group
          : {
              ...group,
              options: group.options.map((option) =>
                option.id === optionId
                  ? {
                      ...option,
                      quantity: Math.max(0, quantity),
                      selected: quantity > 0,
                    }
                  : option,
              ),
            },
      ),
    );
  const handlerCheckbox = (
    groupId: string,
    optionId: string,
    checked: boolean,
  ) => handleCheckboxQuantity(groupId, optionId, checked ? 1 : 0);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Link
        href={`/menu/${categoryId}/order`}
        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/70"
      >
        <ArrowLeft size={17} aria-hidden="true" /> Back to {category}
      </Link>
      <section className="mt-5 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm">
        <div className="grid items-center gap-5 p-5 sm:grid-cols-[8rem_1fr] sm:p-6">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary-light">
            <Image
              src={product.photoSrc}
              alt={product.name}
              fill
              sizes="128px"
              className="object-contain p-2"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-primary/60">
              CUSTOMIZING · {category.toUpperCase()}
            </p>
            <h1 className="mt-2 text-2xl font-extrabold text-primary sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60">
              {product.description}
            </p>
          </div>
        </div>
      </section>
      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          {AddEditOrder(
            customizeOrder,
            handlerCheckbox,
            handleCheckboxQuantity,
            handleRadioChange,
            product,
            categoryId,
          )}
        </div>
        <aside className="xl:sticky xl:top-28 xl:self-start">
          {SummaryOrder(customizeOrder, product)}
        </aside>
      </div>
    </main>
  );
}
