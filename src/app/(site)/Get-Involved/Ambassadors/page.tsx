"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AmbassadorsPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-4"
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            Campus Ambassadors
          </h1>
          <p className="max-w-2xl text-white/70 leading-relaxed">
            Represent Mic’d Up Initiative on your campus and help amplify
            student voices through media, dialogue, and leadership.
          </p>
        </motion.header>

        {/* Role Overview */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm"
        >
          <h2 className="text-xl font-medium mb-4">What You’ll Do</h2>
          <ul className="list-disc list-inside space-y-2 text-white/75">
            <li>Coordinate Mic’d Up campus activities and outreach</li>
            <li>Identify and nurture authentic student voices</li>
            <li>
              Serve as a bridge between Mic’d Up Initiative and your university
            </li>
          </ul>
        </motion.section>

        {/* Perks + Requirements */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm hover:border-amber-400/40 transition">
            <h2 className="text-lg font-semibold mb-4">Ambassador Perks</h2>
            <ul className="space-y-2 text-white/75 list-disc list-inside">
              <li>Official Mic’d Up Initiative certification</li>
              <li>Leadership & media training opportunities</li>
              <li>Priority access to mentorship and events</li>
              <li>Networking with student leaders nationwide</li>
              <li>Feature opportunities on Mic’d Up platforms</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm hover:border-amber-400/40 transition">
            <h2 className="text-lg font-semibold mb-4">Requirements</h2>
            <ul className="space-y-2 text-white/75 list-disc list-inside">
              <li>Currently enrolled at a recognized university/college</li>
              <li>Strong communication and leadership potential</li>
              <li>Commitment to ethical campus engagement</li>
              <li>Availability for monthly ambassador check-ins</li>
              <li>Aligned with Mic’d Up Initiative values and mission</li>
            </ul>
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg"
        >
          <h2 className="text-2xl font-medium mb-6">
            Campus Ambassador Application
          </h2>

          <form
            action="https://formspree.io/f/xbdknweo"
            method="POST"
            className="space-y-6"
          >
            {/* Redirect */}
            <input type="hidden" name="_redirect" value="/thank-you" />

            {/* Honeypot */}
            <div className="hidden">
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">Full Name</label>
              <input
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">Email Address</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              />
            </div>

            {/* University */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">University</label>
              <input
                name="university"
                required
                placeholder="Enter your university name"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              />
            </div>

            {/* Motivation */}
            <div className="space-y-2">
              <label className="text-sm text-white/70">
                Motivation Statement
              </label>
              <textarea
                name="motivation"
                rows={5}
                placeholder="Why do you want to be a Campus Ambassador?"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
            >
              Apply Now
            </button>

            <p className="text-xs text-white/50 leading-relaxed">
              Applications are reviewed on a rolling basis. Successful
              ambassadors will be contacted within 7–14 days.
            </p>
          </form>
        </motion.section>
      </div>
    </section>
  );
}
