export type MediaPlatform =
  | "YouTube"
  | "Spotify"
  | "Apple Podcasts"
  | "Instagram"
  | "TikTok";

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  campus: string;
  duration?: string;
  thumbnail: string;
  platform: MediaPlatform;
  externalUrl: string;
  comingSoon?: boolean;
}
