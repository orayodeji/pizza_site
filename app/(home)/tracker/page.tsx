"use client";

import TrackImage from "@/public/stores/track_order.png";
import Map from "@/public/stores/map.png";
import AVI from "@/public/stores/avi.png";
import { TrackProgress } from "@/components/order/track-progress";
import { ArrowLeft, Check, MapPin, Package, Star } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Tracker() {
  const [orderID, setOrderID] = useState("");
  const [showResult, setShowResult] = useState(false);
  const trackOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (orderID.trim()) setShowResult(true);
  };
  const reset = () => {
    setShowResult(false);
    setOrderID("");
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {!showResult ? (
        <section className="grid overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-lg shadow-primary/10 lg:grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-14">
            <p className="text-xs font-bold tracking-[0.16em] text-primary/60">
              ORDER TRACKING
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Your pizza is just a few steps away.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-black/60 sm:text-base">
              Enter your order ID for live updates from the kitchen to your
              doorstep.
            </p>
            <form onSubmit={trackOrder} className="mt-8 max-w-md">
              <label
                htmlFor="order-id"
                className="text-sm font-bold text-primary"
              >
                Order ID
              </label>
              <input
                id="order-id"
                value={orderID}
                onChange={(event) => setOrderID(event.target.value)}
                placeholder="e.g. PIZZA-1234"
                className="mt-2 w-full rounded-xl border border-primary/20 px-4 py-3 text-sm font-semibold uppercase text-primary outline-none placeholder:normal-case placeholder:text-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
              <button
                disabled={!orderID.trim()}
                type="submit"
                className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/30"
              >
                Track my order
              </button>
            </form>
            <p className="mt-4 text-xs text-primary/55">
              Your order ID is in your confirmation email and receipt.
            </p>
          </div>
          <div className="relative min-h-72 bg-secondary-light">
            <Image
              src={TrackImage}
              alt="Pizza delivery illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </div>
        </section>
      ) : (
        <section>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/70"
          >
            <ArrowLeft size={17} aria-hidden="true" /> Track another order
          </button>
          <div className="mt-5 overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-lg shadow-primary/10">
            <div className="flex flex-col justify-between gap-4 bg-primary px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-secondary-light">
                  ORDER #{orderID.toUpperCase()}
                </p>
                <h1 className="mt-1 text-2xl font-extrabold">
                  We&apos;re preparing your order
                </h1>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary-light px-3 py-1.5 text-sm font-bold text-primary">
                <Package size={16} aria-hidden="true" /> In the kitchen
              </span>
            </div>
            <div className="p-5 sm:p-8">
              <TrackProgress currentStep={Math.floor(Math.random() * 5)} />
              <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
                <div className="relative min-h-72 overflow-hidden rounded-2xl bg-secondary-light">
                  <Image
                    src={Map}
                    alt="Live delivery route map"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <aside className="rounded-2xl border border-primary/10 bg-secondary-light/50 p-5">
                  <p className="text-xs font-bold tracking-[0.14em] text-primary/55">
                    DELIVERY DETAILS
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Image
                      src={AVI}
                      alt="Ahmed Usman, your rider"
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-extrabold text-primary">Ahmed Usman</p>
                      <p className="text-sm text-primary/60">Your rider</p>
                      <p className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-primary">
                        <Star
                          size={14}
                          className="fill-secondary stroke-secondary"
                          aria-hidden="true"
                        />{" "}
                        4.9 rating
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 border-t border-primary/10 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-primary/55">
                        Estimated delivery
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-primary">
                        10–15 mins
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <MapPin
                        size={17}
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-primary/55">
                          Delivering to
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-5 text-primary">
                          45 Rosebery Avenue, Islington, London EC1R 4SR
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
                <Check size={18} aria-hidden="true" />
                <span>
                  <strong>Order confirmed.</strong> We&apos;ll update this page
                  as your order progresses.
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
