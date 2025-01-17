import FadeInText from "@/components/animation/FadeInText";
import HeroGrid from "./HeroGrid";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="Home" className="bg-primaryDark md:p-6">
      <div className="app-container md:rounded-t-3xl rounded-b-3xl py-16 min-h-[70vh] bg-gray-100 overflow-hidden">
        <div className="md:grid grid-cols-2 flex flex-col gap-6 md:gap-10 mt-6">
          <div className="flex flex-col items-start justify-center">
            <FadeInText className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold md:mb-2">
              Your Favourite
            </FadeInText>
            <FadeInText
              start={10}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold md:mb-2"
            >
              Movies And Tv-Shows
            </FadeInText>
            <FadeInText
              start={20}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold md:mb-2"
            >
              Completely Free!
            </FadeInText>
            <p className="text-gray-700 py-4">
              Watch unlimited movies and TV shows anytime, anywhere. Stream your
              favorite content instantly without any subscription fees.
            </p>
            <Link href={"https://expo.dev/artifacts/eas/nnzCF4b1DkDjrxHhqnStTR.apk"} className="btn-gradient px-10">
              Get The app
            </Link>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 right-0 blur-[200px] w-full h-full bg-primary rounded-full"></div>
            <div className="absolute bottom-1/2 animate-pulse right-1/2 translate-x-1/2 translate-y-1/2 blur-[20px] aspect-square scale-[0.6] h-full bg-primaryDark/70 rounded-full"></div>
            <HeroGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
