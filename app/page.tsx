import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import Tickets from "@/components/Tickets";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Lineup />
        <Tickets />
        <Schedule />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
