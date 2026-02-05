// components/discover/VideoCard.tsx
import Image from "next/image";
import type { Video } from "@/components/media/video";

export function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />

        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs text-white">
            {video.duration}
          </span>
        )}
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium leading-snug">
          {video.title}
        </p>

        <div className="mt-1 flex items-center gap-3 text-xs text-black/60">
          <span>{video.creator}</span>

          {/* PLATFORM LINKS */}
          {video.youtubeUrl && (
            <a href={video.youtubeUrl} target="_blank">YT</a>
          )}
          {video.instagramUrl && (
            <a href={video.instagramUrl} target="_blank">IG</a>
          )}
          {video.tiktokUrl && (
            <a href={video.tiktokUrl} target="_blank">TT</a>
          )}
        </div>
      </div>
    </a>
  );
}
