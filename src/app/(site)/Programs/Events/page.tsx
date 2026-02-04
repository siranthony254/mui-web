// src/app/community-events/page.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title: "Community & Events | Mic’d Up Initiative",
  description:
    "Where campus meets the world. MUI creates intentional spaces for dialogue, talent, and institutional exchange across campuses.",
};

export default function CommunityEventsPage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Premium Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-200px] left-[-120px] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-14">
        {/* Hero */}
        <motion.section
          className="max-w-4xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] tracking-widest uppercase text-amber-300">
            Community & Events
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Community & Events
          </h1>

          <p className="mt-3 text-lg md:text-xl text-white/70 max-w-3xl">
            Where campus meets the world.
          </p>

          <div className="mt-6 space-y-3 text-sm md:text-base leading-relaxed text-white/75">
            <p>
              At Mic’d Up Initiative (MUI), events are not gatherings for
              attendance. They are spaces for exchange.
            </p>
            <p>
              We design platforms where campus voices meet real-world
              conversations—where ideas are tested, talent is discovered, and
              students engage beyond their immediate environment.
            </p>
            <p className="font-medium text-white">
              This is not noise. This is connection.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contact" label="Host a Campus Conversation" />
            <CTAButton href="/get-involved/partnerships" label="Partner With MUI" />
            <CTAButton href="/contact" label="Participate as a Speaker" variant="ghost" />
          </div>
        </motion.section>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Why Community Matters */}
        <motion.section
          className="max-w-4xl space-y-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Community Matters
          </h2>

          <p className="text-white/75 leading-relaxed">
            Campus life does not exist in isolation. Students operate at the
            intersection of:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-white/70 text-sm md:text-base">
            <li>Education</li>
            <li>Culture</li>
            <li>Policy</li>
            <li>Industry</li>
            <li>Society</li>
          </ul>

          <p className="text-white/75 leading-relaxed">
            MUI exists to bridge these worlds—bringing campus perspectives into
            broader conversations while inviting external voices to engage
            meaningfully with student realities.
          </p>

          <p className="font-medium text-white">
            Community is how relevance is sustained. Dialogue is how impact
            deepens.
          </p>
        </motion.section>

        {/* Approach */}
        <motion.section
          className="mt-12 max-w-4xl space-y-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our Approach to Events
          </h2>

          <p className="text-white/75">MUI events are intentionally designed.</p>

          <ul className="list-disc pl-6 space-y-1 text-white/70 text-sm md:text-base">
            <li>Depth over numbers</li>
            <li>Dialogue over performance</li>
            <li>Substance over spectacle</li>
          </ul>

          <p className="text-white/75">Every gathering serves a clear function:</p>

          <ul className="list-disc pl-6 space-y-1 text-white/70 text-sm md:text-base">
            <li>Formation</li>
            <li>Exposure</li>
            <li>Exchange</li>
            <li>Influence</li>
          </ul>

          <p className="font-medium text-white">
            We do not host events for visibility alone. We host them for impact.
          </p>
        </motion.section>

        {/* Event Formats (Stagger Reveal) */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Event Formats
          </motion.h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {eventCards.map((event) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.45 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6
                           hover:border-amber-400/30 hover:bg-white/[0.07]
                           hover:shadow-xl hover:shadow-amber-400/10"
              >
                <h3 className="text-lg font-semibold text-amber-200 mb-3">
                  {event.title}
                </h3>

                <div className="text-sm text-white/75 leading-relaxed space-y-2">
                  {event.body}
                </div>

                {/* Micro Accent Line */}
                <div className="mt-5 h-px w-0 bg-amber-400/40 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* CTA Block */}
        <motion.section
          className="max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-amber-400/30 transition">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Get Involved
            </h2>

            <p className="text-white/75 mb-4">
              There are multiple ways to engage with MUI Community & Events:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-white/70 text-sm md:text-base">
              <li>Host a campus conversation</li>
              <li>Partner in a summit or forum</li>
              <li>Participate as a speaker or contributor</li>
              <li>Support student talent and youth platforms</li>
            </ul>

            <p className="mt-4 font-medium text-white">
              Influence grows where people gather with purpose.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/contact" label="Start a Conversation" />
              <CTAButton
                href="/get-involved/partnerships"
                label="Explore Partnerships"
                variant="ghost"
              />
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <p className="mt-12 text-xs text-white/35 border-t border-white/10 pt-5">
          © 2026 Mic’d Up Initiative. All rights reserved.
        </p>
      </div>
    </main>
  );
}

/* -----------------------------
   CTA Button Component
------------------------------ */
function CTAButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant?: "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition";

  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`${base} border border-white/15 text-white/80 hover:text-white hover:bg-white/10`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} bg-amber-400 text-black hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20`}
    >
      {label}
    </Link>
  );
}

/* -----------------------------
   Event Cards Data (Text Preserved)
------------------------------ */
const eventCards = [
  {
    title: "Campus Tours",
    body: (
      <>
        <p className="mb-3">
          MUI conducts structured campus visits across institutions. Each tour
          may include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Live podcast recordings</li>
          <li>Student dialogue and listening sessions</li>
          <li>Talent showcases and creative performances</li>
          <li>Mentorship meet-ups with student leaders</li>
        </ul>
        <p className="mt-3">
          Campus Tours allow us to listen, learn, and engage directly—without
          imposing parallel structures or competition.
        </p>
      </>
    ),
  },
  {
    title: "MUC Talks (Stage Conversations)",
    body: (
      <>
        <p className="mb-3">Our TED-style platform for ideas that matter.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Students and young thinkers</li>
          <li>Academics and educators</li>
          <li>Creatives and cultural voices</li>
          <li>Policy and industry contributors</li>
        </ul>
        <p className="mt-3">
          These conversations are curated, recorded, and preserved—ensuring
          ideas outlive the event itself.
        </p>
      </>
    ),
  },
  {
    title: "Summits & Forums",
    body: (
      <>
        <p className="mb-3">National and regional gatherings that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Connect campuses across regions</li>
          <li>Encourage cross-cultural learning</li>
          <li>Address pressing youth and campus themes</li>
        </ul>
        <p className="mt-3">
          These forums shape collective direction and thought leadership.
        </p>
      </>
    ),
  },
  {
    title: "Community Dialogues",
    body: (
      <>
        <p className="mb-3">
          Smaller, focused conversations designed to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Address specific campus or youth issues</li>
          <li>Encourage honest reflection</li>
          <li>Build trust across institutions and systems</li>
        </ul>
        <p className="mt-3">
          Sometimes transformation begins in a room—not on a stage.
        </p>
      </>
    ),
  },
];
