// src/app/discover/page.tsx
import { CategoryRail } from "@/components/discover/CategoryRail";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <CategoryRail />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-semibold mb-4">
          Discover
        </h1>
        <p className="text-white/60">
          No topics yet for this category.
        </p>
      </div>
    </div>
  );
}
