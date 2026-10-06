"use client";

import { useSyncExternalStore } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import logo1 from "@/public/footer/footer_fb.png";
import logo2 from "@/public/footer/footer_ig.png";
import logo3 from "@/public/footer/footer_yt.png";
import logo4 from "@/public/footer/footer_tw.png";
import footerLeft from "@/public/footer/footer_left_feather.png";
import footerRight from "@/public/footer/footer_right_feather.png";

type FooterLink = { label: string; href: string };
const exploreLinks: FooterLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "Deals", href: "/deals" },
  { label: "Track order", href: "/tracker" },
];
const supportLinks: FooterLink[] = [
  { label: "Find a store", href: "/stores" },
  { label: "My account", href: "/profile" },
  { label: "Help & support", href: "/profile/support" },
];
const legalLinks: FooterLink[] = [
  { label: "Terms & conditions", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Cookie notice", href: "#" },
];
const socialLinks: { label: string; image: StaticImageData }[] = [
  { label: "Facebook", image: logo1 },
  { label: "Instagram", image: logo2 },
  { label: "YouTube", image: logo3 },
  { label: "Twitter", image: logo4 },
];

function subscribeToSession(onChange: () => void) {
  window.addEventListener("pizza-bakery-user-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("pizza-bakery-user-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function isLoggedIn() {
  try {
    const savedUser = localStorage.getItem("pizza-bakery-user");
    const user = savedUser ? JSON.parse(savedUser) : null;
    return typeof user?.name === "string" && user.name.trim().length > 0;
  } catch {
    return false;
  }
}

function getServerSession() {
  return false;
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-secondary-light">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const loggedIn = useSyncExternalStore(subscribeToSession, isLoggedIn, getServerSession);
  const accountSupportLinks = supportLinks.map((link) =>
    link.href === "/profile" && !loggedIn
      ? { label: "Login / Sign up", href: "/login" }
      : link,
  );

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <Image
        src={footerLeft}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 hidden max-w-42 opacity-25 lg:block"
      />
      <Image
        src={footerRight}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden max-w-42 opacity-25 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_.8fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              <Image
                src="/img/logo.png"
                alt="Pizza bakery home"
                width={92}
                height={92}
                className="h-auto w-20"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/70">
              Freshly prepared pizza, sweet treats and easy ordering for every
              craving.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 p-2 transition hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  <Image
                    src={social.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
          <FooterLinkGroup title="Explore" links={exploreLinks} />
          <FooterLinkGroup title="Support" links={accountSupportLinks} />
          <FooterLinkGroup title="Information" links={legalLinks} />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pizza Bakery. All rights reserved.</p>
          <p>Made fresh, delivered with care.</p>
        </div>
      </div>
    </footer>
  );
}
