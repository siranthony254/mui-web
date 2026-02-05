import Image from "next/image";
import Link from "next/link";

interface Playlist {
  title: string;
  count: string;
  image: string;
  href: string;
  category?: string;
}

interface PlaylistsRailProps {
  title: string;
  subtitle?: string;
  playlists: Playlist[];
  viewAllHref?: string;
}

export function PlaylistsRail({
  title,
  subtitle,
  playlists,
  viewAllHref,
}: PlaylistsRailProps) {
  return (
    <section className="bg-slate-200 text-black border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 text-base text-black/70">
                {subtitle}
              </p>
            )}
          </div>

          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="text-sm font-medium text-black hover:underline"
            >
              See all
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />

                {/* Duration / Count */}
                <span
                  className="
                    absolute bottom-2 right-2
                    rounded bg-black/80
                    px-2 py-0.5
                    text-xs font-medium text-white
                  "
                >
                  {item.count}
                </span>
              </div>

              {/* Meta */}
              <div className="mt-3">
                {item.category && (
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                    {item.category}
                  </p>
                )}

                <h3 className="text-base font-medium leading-snug group-hover:underline">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
