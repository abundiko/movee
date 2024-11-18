import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { staticMetadata } from "@/functions/metadata";

// const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = staticMetadata({
  title: "Movee by abundiko | Home",
  description:
    "Movee is a free movie and TV show streaming app that allows you to watch your favorite movies and TV shows anytime, anywhere. With Movee, you can stream your favorite content instantly without any subscription fees. Download the app now and start watching your favorite movies and TV shows!",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
