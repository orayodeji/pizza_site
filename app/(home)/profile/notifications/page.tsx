"use client";

import { ProfileHeading } from "@/components/profile/heading";
import { Switch } from "@headlessui/react";
import { useState } from "react";

type NotificationPreference = {
  id: "orderUpdates" | "promotions" | "newArrivals" | "general";
  group: string;
  label: string;
  description: string;
  enabled: boolean;
};

const initialPreferences: NotificationPreference[] = [
  {
    id: "orderUpdates",
    group: "Order Updates",
    label: "Order status updates",
    description: "Get notified about your order status",
    enabled: true,
  },
  {
    id: "promotions",
    group: "Promotions & Offers",
    label: "Exclusive offers and deals",
    description: "Receive special offers and discounts",
    enabled: true,
  },
  {
    id: "newArrivals",
    group: "New Arrivals",
    label: "New menu items",
    description: "Be the first to know about new items",
    enabled: false,
  },
  {
    id: "general",
    group: "General Notifications",
    label: "Important updates",
    description: "Receive important updates and news",
    enabled: true,
  },
];

export default function Notifications() {
  const [preferences, setPreferences] = useState(initialPreferences);

  const togglePreference = (id: NotificationPreference["id"]) => {
    setPreferences((currentPreferences) =>
      currentPreferences.map((preference) =>
        preference.id === id
          ? { ...preference, enabled: !preference.enabled }
          : preference,
      ),
    );
  };

  return (
    <>
      <ProfileHeading
        heading="Notifications"
        subHeading="Manage how you want to be notified"
        showButton={false}
      />

      <div className="mt-5 divide-y divide-secondary/35 bg-white">
        {preferences.map((preference) => (
          <section key={preference.id} className="py-4 first:pt-1 last:pb-1">
            <p className="text-xs font-bold text-black/80">{preference.group}</p>
            <div className="mt-2.5 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold text-black/75">
                  {preference.label}
                </p>
                <p className="mt-0.5 text-[11px] text-black/45">
                  {preference.description}
                </p>
              </div>
              <Switch
                checked={preference.enabled}
                onChange={() => togglePreference(preference.id)}
                className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full bg-black/20 p-0.5 transition-colors focus:not-data-focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary data-checked:bg-primary"
              >
                <span
                  aria-hidden="true"
                  className="size-4 translate-x-0 rounded-full bg-white shadow-sm transition-transform duration-200 group-data-checked:translate-x-5"
                />
                <span className="sr-only">{`Toggle ${preference.label}`}</span>
              </Switch>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
