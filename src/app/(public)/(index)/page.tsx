import Navbar from "@/components/layout/Navbar";
import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import Hero from "./Hero";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Banner />
    </main>
  );
}
