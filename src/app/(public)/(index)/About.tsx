import FadeInText from "@/components/animation/FadeInText";
import Image from "next/image";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

export default function About() {
  return (
    <section id="About" className="app-container bg-primaryDark text-gray-200 py-16">
      <div className="flex flex-col items-center gap-6">
        <FadeInText className="text-2xl md:text-3xl lg:text-4xl text-center font-bold sticky top-[12vh]">
          Why is Movee for me
        </FadeInText>

        <div className="flex flex-row gap-2 max-xl:overflow-x-auto hide-scrollbar z-[1] sticky top-[20vh] pb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              height={500}
              width={350}
              src={`/images/image${i}.jpeg`}
              alt="Movee on the playstore and appstore"
              className="aspect-[652/1412] h-72 md:h-96 w-[unset] rounded"
            />
          ))}
        </div>
        <div className="md:p-8 bg-primaryDark/90 z-[2] relative backdrop-blur-sm">
          <div className="max-w-[1000px] flex flex-col gap-4 text-gray-200 sm:p-4 py-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui
              iusto suscipit reiciendis, dicta laboriosam explicabo ipsam non
              voluptatibus voluptatum nulla aliquid fugiat natus perferendis
              fuga sit repellat sunt recusandae, nesciunt, ad vero illo in vel!
              Qui, labore voluptate? Nostrum repudiandae aliquid blanditiis
              doloribus nihil iure, voluptatum velit cum suscipit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui
              iusto suscipit reiciendis, dicta laboriosam explicabo ipsam non
              voluptatibus voluptatum nulla aliquid fugiat natus perferendis
              fuga sit repellat sunt recusandae, nesciunt, ad vero illo in vel!
              Qui, labore voluptate? Nostrum repudiandae aliquid blanditiis
              doloribus nihil iure, voluptatum velit cum suscipit!
            </p>
            <div className="grid md:flex gap-4 grid-cols-2">
              <button className="btn-dark md:px-6 px-2">
                <BiLogoPlayStore className="text-3xl" />
                <p className="text-start leading-4">
                  <span className="text-xs font-light">Get it on</span> <br />
                  <span>Google Play</span>
                </p>
              </button>
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
