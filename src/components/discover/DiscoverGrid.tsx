"use client";

import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import type { Video } from "@/components/media/video";

export function DiscoverGrid() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);

  async function loadMore() {
    const res = await fetch(`/api/videos?cursor=${cursor ?? ""}`);
    const data = await res.json();

    setVideos((v) => [...v, ...data.videos]);
    setCursor(data.nextCursor);
  }

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={loadMore}
          className="px-6 py-3 text-sm font-medium border border-black/20 hover:bg-black hover:text-white"
        >
          Load more
        </button>
      </div>
    </section>
  );
}
