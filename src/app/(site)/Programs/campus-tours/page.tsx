"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CampusToursPage() {
  return (
    <section className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Intro */}
        <motion.header
          className="max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] tracking-widest uppercase text-amber-300">
            Campus Engagement
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Campus Tours
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
            Mic’d Up Initiative Campus Tours are immersive engagements designed
            to listen deeply, amplify voices, identify leadership, and steward
            campus culture.
          </p>
        </motion.header>

        {/* Divider */}
        <div className="mt-8 mb-8 h-px bg-white/10" />

        {/* What is Tour */}
        <motion.section
          className="max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            What a Campus Tour Is
          </h2>

          <p className="mt-3 text-white/80 leading-relaxed text-sm md:text-base">
            A Campus Tour is not a single event. It is a structured engagement
            combining conversation, creativity, research, and leadership
            formation — adapted to each campus while preserving MUI’s mission.
          </p>
        </motion.section>

        {/* Cards */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            What Happens on Tour
          </h2>

          <p className="mt-2 text-white/65 text-sm md:text-base max-w-3xl">
            Each engagement is designed to surface authentic student realities,
            strengthen leadership, and document culture responsibly.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Campus Podcast Recordings",
                desc: "Live or recorded conversations capturing authentic student experiences and campus realities.",
              },
              {
                title: "MUI Talks & Panel Conversations",
                desc: "Curated discussions around purpose, leadership, culture, and responsibility.",
              },
              {
                title: "Creative & Talent Showcases",
                desc: "Performances, spoken word, drama, and artistic expression revealing campus creativity.",
              },
              {
                title: "Campus Listening Sessions",
                desc: "Research-driven dialogues surfacing student needs, challenges, and opportunities.",
              },
              {
                title: "Leadership & Club Engagements",
                desc: "Strategic meetings with student leaders and societies for alignment and long-term impact.",
              },
              {
                title: "Ambassador Identification",
                desc: "Recognizing and onboarding purpose-driven students to steward MUI’s mission.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5
                           hover:border-amber-400/40 hover:bg-white/[0.07]
                           hover:shadow-lg hover:shadow-amber-400/10
                           cursor-default"
              >
                <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-amber-300 transition">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 h-px w-full bg-white/10" />

                <p className="mt-3 text-[11px] text-white/45 tracking-wide">
                  Structured • Intentional • Campus-specific
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Visited */}
        <motion.section
          className="mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Campuses We’ve Visited
          </h2>

          <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
            Mic’d Up Initiative has engaged with diverse public and private
            universities, adapting each tour to local campus culture while
            maintaining excellence and depth.
          </p>

          <p className="mt-2 text-xs text-white/50">
            A detailed archive and documentation will be published progressively.
          </p>
        </motion.section>

        {/* CTA Box */}
        <motion.section
          className="mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:border-amber-400/30 transition">
            <h2 className="text-xl md:text-2xl font-semibold">
              Bring MUI to Your Campus
            </h2>

            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Campus Tours are initiated through collaboration with student
              leadership, faculty, and institutional partners — planned
              intentionally for relevance and lasting value.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black
                           hover:bg-amber-300 hover:scale-[1.02]
                           transition active:scale-[0.97]"
              >
                Request a Campus Tour
              </Link>

              <Link
                href="/Get-Involved/Partnerships"
                className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white
                           hover:bg-white/5 hover:border-white/40 hover:scale-[1.02]
                           transition active:scale-[0.97]"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <p className="mt-10 text-xs text-white/35 border-t border-white/10 pt-5 max-w-4xl">
          © 2026 Mic’d Up Initiative. All rights reserved.
        </p>
      </div>
    </section>
  );
}
