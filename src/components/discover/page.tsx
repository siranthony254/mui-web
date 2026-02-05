import { DiscoverGrid } from "@/components/discover/DiscoverGrid";
import { DiscoverHero } from "@/components/discover/DiscoverHero";
import { CategoryRail } from "@/components/discover/CategoryRail";

export default function DiscoverPage() {
  return (
    <main className="bg-white text-black">
      <DiscoverHero />
      <CategoryRail />
      <DiscoverGrid />
    </main>
  );
}
