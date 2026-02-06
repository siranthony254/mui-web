import { ExternalMediaCard } from "@/components/media/ExternalMediaCard";
import { MediaItem } from "@/components/media/types/media";

async function getDocumentaries(): Promise<MediaItem[]> {
  const res = await fetch(`/api/videos?section=documentary`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch documentaries");
  }

  const data = await res.json();

  return data.videos.map((v: any) => ({
    id: v.id,
    title: v.title || "Untitled",
    youtubeId: v.youtubeId || "",
    duration: v.duration || "0 min",
    campus: v.campus || "",
    social: v.social || {},
    category: v.category || "",
    featured: v.featured || false,
    type: v.type || "documentary",
  }));
}

export default async function DocumentariesPage() {
  const documentaries = await getDocumentaries();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 bg-slate-900 min-h-screen">
      <header className="max-w-3xl mb-14">
        <h1 className="text-4xl font-semibold mb-4 text-amber-300">Documentaries</h1>
        <p className="text-white/70">
          Deep-dive visual stories capturing real campus challenges, movements, and transformative journeys.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {documentaries.map((item) => (
          <ExternalMediaCard
            key={item.id}
            id={item.id}
            title={item.title}
            youtubeId={item.youtubeId}
            duration={item.duration}
            description={item.campus}
            thumbnail={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
            social={item.social}
          />
        ))}
      </div>
    </section>
  );
}
