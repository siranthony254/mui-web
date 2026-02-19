"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function PartnersPage() {
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

        {/* Why Partner */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm">
            <h2 className="text-2xl font-medium mb-5">
              Why Partner With Mic’d Up Initiative
            </h2>
            <ul className="space-y-3 text-white/75 list-disc list-inside">
              <li>Direct access to authentic campus communities</li>
              <li>Credible, values-driven youth engagement</li>
              <li>Research-informed media and programming</li>
              <li>Long-term institutional impact beyond one-off campaigns</li>
            </ul>
          </div>
        </motion.section>

        {/* Partnership Areas */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-24 space-y-10"
        >
          <h2 className="text-2xl font-medium">Partnership Areas</h2>

          <div className="grid gap-8">
            {[
              {
                title: "Educational Institutions",
                points: [
                  "Universities & colleges (public & private)",
                  "Student unions & campus clubs",
                  "Alumni associations",
                ],
                purpose:
                  "Facilitate campus programs, mentorship, leadership development, and student engagement initiatives.",
              },
              {
                title: "Media & Content Platforms",
                points: [
                  "Journalism schools",
                  "Filmmakers & documentary producers",
                  "Youth-focused media houses",
                ],
                purpose:
                  "Co-produce podcasts, documentaries, and visual storytelling that elevates youth perspectives responsibly.",
              },
              {
                title: "Government & Policy Makers",
                points: [
                  "Ministry of Education & higher education commissions",
                  "Local education boards & student welfare departments",
                  "National youth councils",
                ],
                purpose:
                  "Conduct policy-influencing research, convene national youth forums, and inform education reform.",
              },
              {
                title: "Influencers & Thought Leaders",
                points: [
                  "Student leaders & notable alumni",
                  "Youth motivational speakers",
                  "Global youth leaders & content creators",
                ],
                purpose:
                  "Guest podcast features, masterclasses, mentorship sessions, and campaigns promoting values and excellence.",
              },
              {
                title: "Research Institutions & Think Tanks",
                points: [
                  "Campus research centers",
                  "Media & communication institutes",
                  "Youth-focused policy think tanks",
                ],
                purpose:
                  "Provide data-driven insights, institutional credibility, and policy influence across youth ecosystems.",
              },
              {
                title: "NGOs & Nonprofit Organizations",
                points: [
                  "Mental health organizations",
                  "Literacy & education-focused NGOs",
                ],
                purpose:
                  "Co-host mentorship programs, workshops, awareness campaigns, and student support initiatives.",
              },
              {
                title: "International Youth Movements",
                points: [
                  "Global media & content regulation bodies",
                  "International leadership & research networks",
                ],
                purpose:
                  "Co-create global youth research, enable cross-cultural learning, and promote ethical media standards.",
              },
            ].map((area, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm hover:border-amber-400/40 transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {idx + 1}. {area.title}
                </h3>
                <ul className="list-disc list-inside text-white/75 space-y-2">
                  {area.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <p className="mt-4 text-white/60 leading-relaxed">
                  <span className="font-medium text-white/80">Purpose:</span>{" "}
                  {area.purpose}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
              action="https://formspree.io/f/mykprovo"
              method="POST"
              className="space-y-6"
            >
              {/* Organization */}
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm text-white/70">
                  Organization / Individual Name
                </label>
                <input
                  id="organization"
                  name="organization"
                  required
                  placeholder="Enter organization name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <label htmlFor="contact_person" className="text-sm text-white/70">
                  Contact Person
                </label>
                <input
                  id="contact_person"
                  name="contact_person"
                  required
                  placeholder="Full name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/70">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm text-white/70">
                  Website / Social Link
                </label>
                <input
                  id="website"
                  name="website"
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <label htmlFor="partnership_interest" className="text-sm text-white/70">
                  Partnership Interest
                </label>
                <textarea
                  id="partnership_interest"
                  name="partnership_interest"
                  rows={5}
                  placeholder="Describe the type of partnership you’re interested in..."
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              >
                Start Partnership
              </button>

              <p className="text-xs text-white/50 leading-relaxed">
                © {new Date().getFullYear()} Mic’d Up Initiative. All rights reserved.
              </p>
            </form>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
