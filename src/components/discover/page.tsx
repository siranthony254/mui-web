import  CategoryRail  from "@/components/discover/CategoryRail";

export default function DiscoverPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category ?? "all";

  return (
    <main className="min-h-screen bg-slate-50">
      <CategoryRail />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-2xl font-semibold mb-4">
          {category === "all" ? "All Topics" : `Category: ${category}`}
        </h1>

        <p className="text-gray-500">
          {category === "all"
            ? "No topics yet. Stay tuned!"
            : "No content has been added for this category yet."}
        </p>
      </div>
    </main>
  );
}
