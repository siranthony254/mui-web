"use client";

import Link from "next/link";

const categories = [
  "Talent & Creativity",
  "Research & Insights",
  "Sustainability",
  "Panels & Forums",
  "Mental Health",
  "Personal Growth",
  "Policies & Governance",
  "Education",
  "Debates & Dialogues",
  "Leadership & Influence",
  "Innovation & Entrepreneurship",
];

export default function DiscoverRail() {
  return (
    <section className="bg-black text-white border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center gap-6">
          {/* Left label */}
          <h2 className="text-2xl font-semibold tracking-tight shrink-0">
            Discover
          </h2>

          {/* Scroll rail */}
          <div
            className="
              flex gap-3 overflow-x-auto scrollbar-hide
              flex-1
            "
          >
            {categories.map((label) => (
              <Link
                key={label}
                href={`/media/${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="
                  shrink-0
                  rounded-md
                  bg-white/20
                  px-4 py-2
                  text-sm font-medium
                  text-white
                  hover:bg-white hover:text-black
                  transition-colors
                "
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              aria-label="Scroll categories"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                bg-white/20
                hover:bg-white hover:text-black
                transition
              "
            >
              →
            </button>

            <Link
              href="/media"
              className="text-sm font-medium hover:underline"
            >
              See all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
