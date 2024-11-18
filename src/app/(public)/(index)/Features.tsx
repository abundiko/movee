/* eslint-disable @next/next/no-img-element */
"use client";

import ScrollReveal from "@/components/animation/ScrollRevealText";
import FeatureCard from "@/components/cards/FeatureCard";
import { useMemo, useState } from "react";
import { BsFillGrid3X3GapFill, BsPlayCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import {
  IoCloudDownload,
  IoMoon,
  IoPartlySunny,
  IoSunny,
} from "react-icons/io5";
import { RiHeart2Fill } from "react-icons/ri";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const isDark = theme === "dark";
  const bgClass = useMemo(() => {
    return !isDark ? "bg-white" : "bg-black";
  }, [isDark]);

  return (
    <section
      id="Features"
      className={`app-container pb-16 ${bgClass} ${
        isDark ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <div className={`md:sticky top-0 z-10 ${bgClass} pt-16`}>
        <ScrollReveal coverClass={bgClass}>
          <h3 className="font-bold text-3xl md:text-5xl">Features Built</h3>
        </ScrollReveal>
        <ScrollReveal coverClass={bgClass}>
          <h4 className="font-bold text-3xl md:text-5xl">With You In Mind</h4>
        </ScrollReveal>
        <div
          className={`absolute max-md:hidden -bottom-10 left-0 w-full h-10 bg-gradient-to-t from-transparent ${
            isDark ? "to-black" : "to-white"
          }`}
        ></div>
      </div>
      <div className="grid md:grid-cols-2 pt-6">
        <div className="flex flex-col gap-4">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              {...feature}
              onReachActive={() => {
                setActiveIndex(i);
              }}
              active={i === activeIndex}
              extra={
                i === 0 && (
                  <div className="flex gap-2 rounded-3xl border w-fit p-0.5 mt-2">
                    {themes.map(([_theme, icon]) => (
                      <button
                        key={_theme}
                        title={`toggle theme ${_theme}`}
                        onClick={() => setTheme(_theme as "light" | "dark")}
                        className={`w-8 h-8 !rounded-full btn border ${
                          theme === _theme
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                )
              }
            />
          ))}
          <div className="md:h-40" />
        </div>
        <div className="z-20 max-md:hidden">
          <div className="aspect-[345/750] top-[10vh] sticky bg-red-400 rounded-[30px] w-full max-w-[250px] mx-auto">
            <img
              src={`/images/screenshot-${theme}-${features[activeIndex].image}.jpg`}
              alt={`Image of Movee feature: ${features[activeIndex].title}`}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-[30px] object-top `}
            />
            <img
              src="/images/android-frame.png"
              loading="lazy"
              alt="Movee app on android frame"
              className="scale-[1.02] relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const themes = [
  ["light", <IoSunny key="light-icon" />],
  ["dark", <IoMoon key="dark-icon" />],
] as const;

const features = [
  {
    title: "Customizable Themes",
    description:
      "customize your app to your liking with our theme system. Choose from a variety of themes to fit your style.",
    icon: <IoPartlySunny />,
    image: "theme",
  },
  {
    title: "Easy Search",
    description:
      "Easily search for movies, tv shows, and series that you enjoy. Search by title, genre, or person.",
    icon: <FiSearch />,
    image: "search",
  },
  {
    title: "Variety of Genres",
    description:
      "Discover a wide variety of movies, tv shows, and series from a variety of genres.",
    icon: <BsFillGrid3X3GapFill />,
    image: "genres",
  },
  {
    title: "Save Your Favorites",
    description:
      "Save your favorite movies, tv shows, and series to your device for easy access anytime, anyday.",
    icon: <RiHeart2Fill />,
    image: "saved",
  },
  {
    title: "Stream or Download",
    description:
      "Stream or download your favorite movies, tv shows, and series to your device for sharing and offline viewing.",
    icon: (
      <div className="relative">
        <BsPlayCircleFill className="scale-[0.6] origin-top-left" />
        <IoCloudDownload className="absolute top-0 left-0 scale-[0.6] origin-bottom-right" />
      </div>
    ),
    image: "movie",
  },
];
