"use client";

import { useParams } from "next/navigation";

export default function Home() {
  const { url } = useParams();
  return (
    <iframe
      className="w-screen h-screen"
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}
