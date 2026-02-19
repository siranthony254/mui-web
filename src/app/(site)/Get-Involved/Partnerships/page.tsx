"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function PartnersPage() {
  const params = useSearchParams();
  const isSuccess = params.get("success") === "true";

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-400">
            Partnerships & Collaborations
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Mic’d Up Initiative partners with institutions, leaders, and
            organizations committed to shaping responsible campus culture,
            youth excellence, and meaningful public discourse.
          </p>
        </motion.header>

        {/* Thank You Message */}
        {isSuccess && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-amber-300 mb-2">
              Thank you for reaching out!
            </h3>
            <p className="text-white/70">
              Your partnership inquiry has been received. Our team will review
              your submission and contact you shortly to explore collaboration
              opportunities.
            </p>
          </motion.div>
        )}

        {/* Partnership Form */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
            <h2 className="text-2xl font-medium mb-6">
              Start a Partnership Conversation
            </h2>

            <form
              action="https://formspree.io/f/mdadqbbl"
              method="POST"
              className="space-y-6"
            >
              {/* Redirect back with success flag */}
              <input type="hidden" name="_next" value="?success=true" />

              {/* Organization */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">
                  Organization / Individual Name
                </label>
                <input
                  name="organization"
                  required
                  placeholder="Enter organization name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">Contact Person</label>
                <input
                  name="contact_person"
                  required
                  placeholder="Full name"
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

              {/* Website */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">
                  Website / Social Link
                </label>
                <input
                  name="website"
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <label className="text-sm text-white/70">
                  Partnership Interest
                </label>
                <textarea
                  name="partnership_interest"
                  rows={5}
                  placeholder="Describe the type of partnership you’re interested in..."
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              >
                Start Partnership
              </button>

              <p className="text-xs text-white/50 leading-relaxed">
                © {new Date().getFullYear()} Mic’d Up Initiative. All rights
                reserved.
              </p>
            </form>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
