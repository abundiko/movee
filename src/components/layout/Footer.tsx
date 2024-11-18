import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="app-container py-8 bg-black text-gray-200">
      <div className="flex max-md:flex-col justify-between gap-8">
        <div className="flex gap-4 justify-between md:min-w-[300px]">
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"}>
              <Image
                height={80}
                width={80}
                src={"/images/logo-large.png"}
                alt="Movee Logo"
                className="rounded-2xl overflow-hidden aspect-square w-14 "
              />
            </Link>
            <p className="leading-4 pl-2">
              Movee <br /> by{" "}
              <a
                href="https://abundiko.vercel.app"
                className="hover:underline"
                target="_blank"
              >
                abundiko
              </a>
            </p>
          </div>
        </div>
        <div className="flex md:w-fit max-md:justify-center items-center gap-4">
          {socialLinks.map((link, i) => (
            <a key={i} target="_blank" href={link.href} title={link.title}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-neutral-500 mt-8">
        copyright &copy; Movee all rights reserved
      </p>
    </footer>
  );
}

const socialLinks = [
  {
    icon: <FaXTwitter />,
    title: "X, Twitter",
    href: "https://x.com/abundiko",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    href: "https://instagram.com/abundiko",
  },
  {
    icon: <FaFacebook />,
    title: "Facebook",
    href: "https://facebook.com/abundiko",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    href: "https://github.com/abundiko",
  },
];
