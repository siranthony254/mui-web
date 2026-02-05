// app/api/videos/route.ts
import { NextResponse } from "next/server";
import type { Video } from "@/components/media/video";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get("cursor");

  // TEMP: mock data (until YouTube API is wired)
  const videos: Video[] = [];

  const nextCursor = "next-id";

  return NextResponse.json({
    videos,
    nextCursor,
  });
}
