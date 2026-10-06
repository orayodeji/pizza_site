import { ProfileHeading } from "@/components/profile/heading";
import { ChevronRight, CircleHelp, FileText, Headphones, ShieldCheck, Undo2 } from "lucide-react";
import Link from "next/link";

const supportTopics = [
  {
    title: "FAQs",
    description: "Find answers to common questions",
    icon: CircleHelp,
    href: "/profile/support#faqs",
  },
  {
    title: "Contact Support",
    description: "Chat or talk to our support team",
    icon: Headphones,
    href: "mailto:support@pizzabites.com",
  },
  {
    title: "Order Issues",
    description: "Problem with your order?",
    icon: CircleHelp,
    href: "/profile/support#order-issues",
  },
  {
    title: "Returns & Refunds",
    description: "Learn about returns and refunds",
    icon: Undo2,
    href: "/profile/support#returns",
  },
  {
    title: "Privacy Policy",
    description: "Read our privacy policy",
    icon: ShieldCheck,
    href: "/profile/support#privacy",
  },
  {
    title: "Terms & Conditions",
    description: "Read our terms and conditions",
    icon: FileText,
    href: "/profile/support#terms",
  },
];

export default function Support() {
  return (
    <>
      <ProfileHeading
        heading="Help & Support"
        subHeading="We're here to help you!"
        showButton={false}
      />

      <div className="mt-5 overflow-hidden rounded-lg border border-secondary/50 bg-white">
        {supportTopics.map((topic) => {
          const Icon = topic.icon;

          return (
            <Link
              key={topic.title}
              href={topic.href}
              className="flex items-center gap-3 border-b border-secondary/35 px-4 py-3 last:border-b-0 hover:bg-secondary/10"
            >
              <Icon className="shrink-0 stroke-primary" size={19} aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold text-black/80">
                  {topic.title}
                </span>
                <span className="mt-0.5 block text-[11px] text-black/45">
                  {topic.description}
                </span>
              </span>
              <ChevronRight className="shrink-0 stroke-black/40" size={19} aria-hidden="true" />
            </Link>
          );
        })}
      </div>

      <section className="mt-5 rounded-lg bg-primary/10 px-5 py-4">
        <p className="text-xs font-bold text-black/80">Still need help?</p>
        <p className="mt-1 text-[11px] text-black/55">
          Contact our support team and we will get back to you.
        </p>
        <a
          href="mailto:support@pizzabites.com"
          className="mt-4 block rounded-md bg-primary py-2 text-center text-xs font-bold text-white transition-colors hover:bg-primary/90"
        >
          Contact Support
        </a>
      </section>
    </>
  );
}
