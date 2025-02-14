import EmailCollection from "@/components/EmailCollection";
import HeroSection from "@/components/ui/landingPage/HeroSection";
import AboutUsSection from "@/components/ui/landingPage/AboutUsSection";
import ProcessSection from "@/components/ui/landingPage/ProcessSection";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="flex px-6 justify-between items-center py-4 bg-background-primary">
        <span className="font-quicksand font-bold sm:text-lg md:text-xl lg:text-2xl text-black-background-primary ">FlowDSA</span>
        <Link href='/signup'>
          <button className="font-quicksand font-semibold bg-black-background-primary rounded-full px-5 md:px-10 py-1 md:py-2 text-sm md:text-lg text-white">Sign up</button>

        </Link>
      </header>
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}

        <HeroSection />

        {/* About us section */}

        <AboutUsSection />

        {/* How will the process work section */}

        <ProcessSection />

        {/*Collect Email section*/}
        <section className="h-2/5 bg-background-secondary pb-24">
          <EmailCollection />
        </section>
      </main>


    </>
  );
}
