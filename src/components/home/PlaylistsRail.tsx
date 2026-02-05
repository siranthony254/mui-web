import Image from "next/image";
import Link from "next/link";

interface Playlist {
  title: string;
  count: string;
  image: string;
  href: string;
  category?: string;
  meta?: string;
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
    <section className="bg-slate-200 text-black">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* =======================
            EDITORIAL HERO
        ======================= */}
        <div className="mb-14 grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-600">
              Recommended
            </p>

            <h1 className="text-4xl font-semibold tracking-tight leading-tight">
              Big ideas. Real Campus Conversations.
            </h1>

            <p className="mt-4 text-base text-black/70 leading-relaxed">
              This podcast episode marks the start of a new era of campus dialogue. We are 
              thrilled to share this milestone with you and invite you to listen, share, 
              and join the conversation.
              Join the community helping ideas — and the voices behind them — travel further.
            </p>
          </div>

          {/* Right: Image + Stat */}
          <div className="relative aspect-[16/9] overflow-hidden bg-black">
            <Image
              src="/images/background-2.jpg" // replace
              alt="Editorial feature"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <p className="text-5xl md:text-6xl font-semibold text-white">
                Mic'd Up Initiative
              </p>
              <p className="mt-2 text-lg text-white/80">
                Vision Launch Podcast — 1M+ streams
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-12 border-t border-black/10" />

        {/* =======================
            SECTION HEADER
        ======================= */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            {subtitle && (
              <p className="mt-1 text-sm text-black/60">
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

        {/* =======================
            CONTENT GRID
        ======================= */}
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />

                <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                  {item.count}
                </span>
              </div>

              <div className="mt-3">
                {item.category && (
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                    {item.category}
                  </p>
                )}

                <h3 className="text-base font-medium leading-snug group-hover:underline">
                  {item.title}
                </h3>

                {item.meta && (
                  <p className="mt-1 text-xs text-black/60">
                    {item.meta}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
