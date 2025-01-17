import FadeInText from "@/components/animation/FadeInText";
import Link from "next/link";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

export default function Banner() {
  return (
    <section
      id="Download"
      className="bg-primaryDark app-container py-16 overflow-hidden"
    >
      <div className="bg-white rounded-t-3xl rounded-b-3xl relative">
        <div className="absolute max-[420px]:left-0 px-6 -top-10 md:right-[18%] grid grid-cols-4 w-full min-[420px]:w-[400px] gap-3">
          <div className="aspect-square bg-primaryDark rounded-3xl"></div>
          <div className="aspect-square bg-primaryDark rounded-full"></div>
          <div className="aspect-square bg-primaryDark rounded-bl-[50%] rounded-tr-[50%]"></div>
          <div className="aspect-square bg-primaryDark rounded-0"></div>
        </div>
        <div className="relative grid md:grid-cols-2 pt-10 md:pt-16 items-center">
          <div className=" overflow-hidden relative">
            <div className="aspect-[345/750] absolute top-20 right-[12%] md:right-[20%] bg-red-400 rounded-[30px] w-unset h-96 max-w-[250px] mx-auto">
              <img
                src={"/images/screenshot-dark.jpg"}
                alt={`Image of Movee App`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-[30px] object-top `}
              />
              <img
                src="/images/android-frame.png"
                loading="lazy"
                alt="Movee app on android frame"
                className="scale-[1.02] relative"
              />
            </div>
            <div className="aspect-[345/750] relative top-10 -left-[20%] bg-red-400 rounded-[30px] w-unset h-96 max-w-[250px] mx-auto">
              <img
                src={"/images/screenshot-home.jpg"}
                alt={`Image of Movee App`}
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
          <div className="flex flex-col gap-6 p-4">
            <FadeInText className="text-primaryDark font-semibold text-2xl md:text-4xl">
              Try Movee Today
            </FadeInText>
            <p className="text-base md:text-lg text-gray-500 md:max-w-[80%]">
              Download the movee app today for your prefered platform and start
              enjoying your favourite tvshows for free
            </p>
            <div className="grid md:flex gap-4 grid-cols-2">
              <Link href={"https://expo.dev/artifacts/eas/nnzCF4b1DkDjrxHhqnStTR.apk"} className="btn-dark md:px-6 px-2">
                <BiLogoPlayStore className="text-3xl" />
                <p className="text-start leading-4">
                  <span className="text-xs font-light">Get it on</span> <br />
                  <span>Google Play</span>
                </p>
              </Link>
              <button className="btn-dark md:px-6 px-2">
                <FaAppStore className="text-3xl" />
                <p className="text-start leading-4">
                  <span className="text-xs font-light">Download on</span> <br />
                  <span>AppStore</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
