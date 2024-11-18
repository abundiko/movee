import { Metadata } from "next";

const HOST = process.env.HOST ?? "https://movee.vercel.app";

export type MetadataProps = {
  title: string;
  description: string;
  img?: string;
  path?: string;
};

export function staticMetadata({
  title,
  description,
  img = "/images/banner.png",
  path,
}: MetadataProps): Metadata {
  const keywords = [
    "movee",
    "movee by abundiko",
    "movee app",
    "free movies app",
    ...title.replace(/[\s\n]+/g, "").split(" "),
    ...description.replace(/[\s\n]+/g, "").split(" "),
  ];
  const buildImg = (img: string) =>
    img ? (img.startsWith("/") ? HOST + img : img) : "/images/banner.png";

  return {
    title,
    description,
    metadataBase: new URL(HOST),
    icons: [
      buildImg("/images/icon.png"),
      buildImg("/images/favicon.ico"),
    ],
    appleWebApp: {
      capable: true,
      title: "Movee",
      startupImage: ["/images/splash.png"],
    },
    applicationName: "Movee",
    keywords: keywords,
    // manifest: "/files/manifest.json",
    twitter: { title, description, images: [buildImg(img)] },
    openGraph: {
      title,
      description,
      images: [buildImg(img)],
      tags: keywords,
    },
  };
}
