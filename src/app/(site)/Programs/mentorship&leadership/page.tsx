"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function MentorshipPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 bg-neutral-950 min-h-screen text-white">

      {/* Header */}
      <motion.header
        className="max-w-4xl mb-24"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase text-amber-400">
          Mentorship & Leadership Formation
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          We Shape People Before Platforms
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed">
          At Mic’d Up Initiative (MUI), leadership is not positional.
          It is formed. Our mentorship framework exists to shape individuals
          who can steward ideas, platforms, and communities with integrity—
          on campus and beyond.
        </p>

        <p className="mt-4 text-white/70">
          This is not a motivational program.
          <span className="text-white font-medium"> It is a formation journey.</span>
        </p>
      </motion.header>

      {/* Why We Mentor */}
      <motion.section
        className="max-w-4xl mb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-6">
          Why We Mentor
        </h2>

        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            MUI mentors because institutions outlive moments.
          </p>

          <p>
            Content without character fades.
            Platforms without people collapse.
          </p>

          <p>
            Mentorship ensures that our work is not only seen, but carried
            forward by individuals who understand values, responsibility,
            and purpose.
          </p>

          <p className="font-medium text-white">
            We measure impact not merely by reach, but by people who can say:
            “I was formed here.”
          </p>
        </div>
      </motion.section>

      {/* Who This Is For */}
      <motion.section
        className="max-w-4xl mb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-6">
          Who This Is For
        </h2>

        <p className="text-white/80 leading-relaxed mb-6">
          This mentorship track is intentionally selective. It is designed
          for individuals ready for responsibility—not just visibility.
        </p>

        <ul className="space-y-3 list-disc list-inside text-white/75">
          <li>Campus Ambassadors and student representatives</li>
          <li>Emerging student leaders across disciplines</li>
          <li>Creatives, thinkers, and organizers aligned with MUI values</li>
          <li>Students prepared for stewardship and accountability</li>
        </ul>

        <p className="mt-6 text-white/60 text-sm">
          This is not an open crowd program. It is a formation track.
        </p>
      </motion.section>

      {/* Cohort System */}
      <motion.section
        className="max-w-5xl mb-32"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-10">
          The Cohort System
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            "Two cohorts per year",
            "Each cohort runs for one academic semester (3 months)",
            "Fully online and multi-campus",
            "Scalable nationally and internationally",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Rhythm */}
      <motion.section
        className="max-w-4xl mb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-6">
          The Rhythm
        </h2>

        <ul className="space-y-3 list-disc list-inside text-white/75">
          <li>Weekly personal formation tasks</li>
          <li>Monthly closed live cohort sessions</li>
          <li>Curated resources and guided reflections</li>
          <li>Progress tracking and accountability</li>
        </ul>

        <p className="mt-6 text-white/60">
          Discipline carries the work—not constant supervision.
        </p>
      </motion.section>

      {/* What We Form */}
      <motion.section
        className="max-w-5xl mb-32"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-10">
          What We Form
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Character & Values",
              desc: "Integrity, stewardship, discipline, responsibility.",
            },
            {
              title: "Clarity & Purpose",
              desc: "Identity, conviction, direction.",
            },
            {
              title: "Leadership Capacity",
              desc: "Communication, initiative, service.",
            },
            {
              title: "Institutional Thinking",
              desc: "Building beyond self and sustaining impact.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-medium mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/70">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/60">
          We do not rush growth. We form it.
        </p>
      </motion.section>

      {/* From Mentee to Steward */}
      <motion.section
        className="max-w-4xl mb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-6">
          From Mentee to Steward
        </h2>

        <ul className="space-y-3 list-disc list-inside text-white/75">
          <li>Cohort Participant</li>
          <li>Campus Ambassador</li>
          <li>Campus Leader</li>
          <li>National or Regional Contributor</li>
        </ul>

        <p className="mt-6 text-white/80">
          Leadership is entrusted—not claimed.
          Responsibility precedes authority.
        </p>
      </motion.section>

      {/* Philosophy */}
      <motion.section
        className="max-w-4xl mb-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-6">
          Mentorship Without Clubs
        </h2>

        <p className="text-white/80 leading-relaxed">
          MUI does not operate campus clubs. We choose influence over
          competition—flowing within existing campus systems and partnering
          with leaders, platforms, and institutions.
        </p>

        <p className="mt-4 text-white/70">
          Transformation happens through people, not positions.
        </p>
      </motion.section>

      {/* Get Involved */}
      <motion.section
        className="max-w-4xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-6">
          Get Involved
        </h2>

        <p className="text-white/80 leading-relaxed mb-8">
          Mentorship at MUI is by invitation and alignment. Not everyone is
          called to the same lane—but everyone is called to steward what
          they carry.
        </p>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/mentorship/apply"
            className="inline-flex items-center rounded-full
                       bg-amber-400 px-6 py-2 text-black font-medium
                       hover:bg-amber-300 transition"
          >
            Join a Mentorship Cohort
          </Link>

          <Link
            href="/campus-tours"
            className="text-sm font-medium text-amber-400 underline underline-offset-4 hover:text-amber-300 transition"
          >
            Become a Campus Ambassador
          </Link>

          <Link
            href="/get-involved/partnerships"
            className="text-sm font-medium text-amber-400 underline underline-offset-4 hover:text-amber-300 transition"
          >
            Partner in Leadership Formation
          </Link>
        </div>

        <p className="mt-12 text-xs text-white/40">
          © 2026 Mic’d Up Initiative. All rights reserved.
        </p>
      </motion.section>

    </section>
  );
}
