// components/home/PlaylistsRail.tsx

import Link from "next/link";
import { headers } from "next/headers";
import { ExternalMediaCard } from "@/components/media/ExternalMediaCard";

interface PlaylistsRailProps {
  title: string;
  subtitle?: string;
  type: "podcast" | "talk" | "documentary";
  category?: string;
  viewAllHref?: string;
}

interface Video {
  id: string;
  title: string;
  duration: string;
  youtubeId: string;
  category?: string;
  campus?: string;
  social?: Record<string, string>;
  featured?: boolean;
}

async function getVideos(type: string, category?: string) {
  const params = new URLSearchParams();
  params.set("section", type);
  if (category) params.set("category", category);

  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/videos?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch videos");

  return res.json();
}

export async function PlaylistsRail({
  title,
  subtitle,
  type,
  category,
  viewAllHref,
}: PlaylistsRailProps) {
  const data = await getVideos(type, category);

  const playlists: Video[] = data.videos.map((video: any) => ({
    id: video.id,
    title: video.title,
    duration: video.duration,
    youtubeId: video.youtubeId,
    category: video.category,
    campus: video.campus,
    social: video.social,
    featured: video.featured || false,
  }));

  // Pick a single editorial hero
  const editorialVideo = playlists.find((v) => v.featured) || playlists[0];

  // Grid videos exclude the hero
  const gridVideos = playlists.filter((v) => v.id !== editorialVideo.id);

  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* ===== EDITORIAL HERO ===== */}
        {editorialVideo && (
          <div className="mb-14 grid gap-10 lg:grid-cols-2 items-center">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                Recommended
              </p>
              <h1 className="text-4xl font-semibold tracking-tight leading-tight">
                Big ideas. Real Campus Conversations.
              </h1>
              <p className="mt-4 text-base text-white/80 leading-relaxed">
                This episode marks the start of a new era of campus dialogue.
                Listen, reflect, and join the conversation.
              </p>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${editorialVideo.youtubeId}`}
                title={editorialVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/40" />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end px-8 pb-8">
                <p className="text-3xl md:text-4xl font-semibold text-white">
                  {editorialVideo.title}
                </p>
                {editorialVideo.category && (
                  <p className="mt-1 text-sm md:text-base text-white/80">
                    {editorialVideo.category}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-12 border-t border-black/10" />

        {/* ===== SECTION HEADER ===== */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-white/80">{subtitle}</p>}
          </div>

          {viewAllHref && (
            <Link href={viewAllHref} className="text-sm font-medium text-white hover:underline">
              See all
            </Link>
          )}
        </div>

        {/* ===== GRID OF VIDEOS ===== */}
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {gridVideos.map((video) => (
            <ExternalMediaCard
              key={video.id}
              id={video.id}
              title={video.title}
              description={video.campus}
              duration={video.duration}
              thumbnail={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              youtubeId={video.youtubeId}
              social={video.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
