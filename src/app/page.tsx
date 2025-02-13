import { DarkmodeButton } from "@/components/ui/darkmode-button";
import EmailCollection from "@/components/EmailCollection";
import HeroSection from "@/components/ui/landingPage/HeroSection";
import AboutUsSection from "@/components/ui/landingPage/AboutUsSection";
import ProcessSection from "@/components/ui/landingPage/ProcessSection";


export default function Home() {
  return (
    <>
      <nav className="flex px-6 justify-between items-center py-4 bg-background-primary">
        <span className="font-quicksand font-bold text-2xl text-black-background-primary ">FlowDSA</span>
        <ul className="hidden lg:flex lg:text-lg items-center font-comfortaa gap-8 text-base">
          <DarkmodeButton />
        </ul>
        <button className="bg-black-background-primary rounded-full px-10 py-2 text-white">Sign up</button>
      </nav>

      {/* Hero Section */}

      <HeroSection/>

      {/* About us section */}

      <AboutUsSection/>

      {/* How will the process work section */}

      <ProcessSection/>

      {/*Collect Email section*/}
      <section className="h-2/5 bg-background-secondary pb-24">
        <EmailCollection />
      </section>


    </>
  );
}
