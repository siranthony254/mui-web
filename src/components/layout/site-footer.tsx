// src/components/layout/site-footer.tsx
import Link from "next/link";
import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://youtube.com/@micdupinitiative",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/micdupinitiative",
    icon: Instagram,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/micdupinitiative",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/micdupinitiative",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/micdupinitiative",
    icon: Facebook,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* Identity */}
        <div>
          <h3 className="text-white font-semibold">
            Mic’d Up Initiative
          </h3>
          <p className="mt-3 leading-relaxed">
            A youth-driven platform amplifying authentic campus voices,
            cultivating leadership, and shaping responsible cultural influence.
          </p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Mic’d Up Initiative
          </p>
        </div>

        {/* Programs & Media */}
        <div>
          <h4 className="text-white font-medium mb-3">
            Programs & Media
          </h4>
          <ul className="space-y-2">
            <li><Link href="" className="hover:underline">Talent & Mentorship</Link></li>
            <li><Link href="" className="hover:underline">Leadership Formation</Link></li>
            <li><Link href="/Media/Podcast" className="hover:underline">Campus Podcast</Link></li>
            <li><Link href="/Media/Talks" className="hover:underline">Campus Talks</Link></li>
            <li><Link href="/Media/stories" className="hover:underline">Voices & Stories</Link></li>
          </ul>
        </div>

        {/* Research & Governance */}
        <div>
          <h4 className="text-white font-medium mb-3">
            Research & Governance
          </h4>
          <ul className="space-y-2">
            <li><Link href="" className="hover:underline">Campus Reports</Link></li>
            <li><Link href="" className="hover:underline">Policy Briefs</Link></li>
            <li><Link href="" className="hover:underline">Youth Trends</Link></li>
            <li><Link href="About/MUI-Leardership" className="hover:underline">Governance & Ethics</Link></li>
            <li><Link href="" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Updates */}
        <div>
          <h4 className="text-white font-medium mb-3">
            Stay Connected
          </h4>
          <p className="mb-3">
            Receive campus insights, stories, and research updates.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="
                w-full rounded-md px-3 py-2
                bg-white/10 border border-white/20
                text-white placeholder:text-white/50
                focus:outline-none focus:border-white
              "
            />
            <button
              type="submit"
              className="
                px-4 py-2 rounded-md
                bg-white text-black
                text-sm font-medium
                hover:bg-neutral-200 transition
              "
              
            >
              Join
            </button>
          </form>

          {/* Social Platforms */}
          <div className="mt-6">
          <p className="mb-3 text-xs uppercase tracking-wide text-white/50">
            Follow MUI
          </p>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  p-2 rounded-full
                  border border-white/20
                  text-white/60
                  hover:text-white
                  hover:border-white
                  transition
                   "
                    >
                      <Icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>


          <div className="mt-4 flex gap-4 text-xs">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="@/GetInvolved" className="hover:underline">Get Involved</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
