// components/discover/CategoryRail.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "All",
  "Talent & Creativity",
  "Research & Insights",
  "Panels & Forums",
  "Mental Health",
  "Personal Growth",
  "Policies & Education",
  " Content & Media",
  "Debates & Dialogues",
  "Leadership & Influence",
];

export function CategoryRail() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("category") ?? "All";

  return (
    <div className="mx-auto max-w-7xl px-6 py-6 flex gap-3 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() =>
            router.push(`/discover?category=${cat === "All" ? "" : cat}`)
          }
          className={`px-5 py-2 rounded-full text-sm font-medium border
            ${
              active === cat
                ? "bg-black text-white"
                : "border-black/20 text-black/70 hover:bg-black hover:text-white"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
