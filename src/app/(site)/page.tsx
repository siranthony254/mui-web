import  HomeHero  from "@/src/components/home/HomeHero";
import  WhyWeExist  from "@/src/components/home/WhyWeExist";
import { WhatWeDo } from "@/src/components/home/WhatWeDo";
import  DiscoverRail  from "@/src/components/home/DiscoverRail";
import  GetInvolved  from "@/src/components/home/GetInvolved";

/* ------------------------------------------------------------------ */
/* Homepage Content Data (temporary – later comes from CMS / API)     */
/* ------------------------------------------------------------------ */

const featuredPlaylists = [
  {
    title: "Voices of the Campus",
    count: "8 talks",
    image: "/playlist-1.jpg",
    href: "/watch/playlists/campus",
  },
  {
    title: "African Futures",
    count: "6 talks",
    image: "/playlist-2.jpg",
    href: "/watch/playlists/futures",
  },
  {
    title: "Faith, Truth & Society",
    count: "10 talks",
    image: "/playlist-3.jpg",
    href: "/watch/playlists/faith",
  },
  {
    title: "Creative Resistance",
    count: "5 talks",
    image: "/playlist-4.jpg",
    href: "/watch/playlists/creative",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyWeExist />
      <WhatWeDo />
      <DiscoverRail />
      <GetInvolved />

    </>
  );
}