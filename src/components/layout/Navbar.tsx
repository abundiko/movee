import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="p-2 flex rounded-b-3xl bg-white/80 border-gray-500/50 backdrop-blur-md border shadow-lg z-30 fixed left-1/2 max-md:-translate-x-1/2 md:left-[calc(10vw)] top-0 md:top-0 w-fit">
        <Link href={"/"} className="flex-shrink-0 w-9">
          <Image
            height={80}
            width={80}
            src={"/images/logo-large.png"}
            alt="Movee Logo"
            className="rounded-2xl overflow-hidden aspect-square w-8 "
          />
        </Link>
        <div className="flex gap-4 md:pl-8 px-4 items-center">
          {navLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`hover:text-primary hover:underline ${
                i < 1 ? "max-md:hidden" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}

const navLinks = [
  {
    title: "Home",
    href: "/#Home",
  },
  {
    title: "About",
    href: "/#About",
  },
  {
    title: "Features",
    href: "/#Features",
  },
  {
    title: "Download",
    href: "/#Download",
  },
];
