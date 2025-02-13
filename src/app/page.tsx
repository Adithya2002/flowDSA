import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { DarkmodeButton } from "@/components/ui/darkmode-button";
import EmailCollection from "@/components/EmailCollection";


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
      <section className="flex flex-col items-center text-center bg-background-primary h-[90vh] pt-12">
        <p className="text-lg text-black-text-secondary font-comfortaa">//Finish your journey now</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-raleway text-black lg:leading-snug mt-4">Complete your unfinished <br /> Data structures and Algorithms Journey</h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-2xl font-quicksand text-black-text-primary font-semibold mt-8">We know how many times you have "started" doing DSA. <br /> Let us help you finish it this time</p>
        <button className="bg-black-background-primary font-quicksand font-semibold rounded-full px-10 text-white flex items-center py-3 mt-10 group transition-all duration-300">
          Get Started
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight />
          </span>
        </button>
        <p className="text-lg text-black-text-secondary font-comfortaa mt-4">#It's about time</p>

        <Marquee className="mt-12">
          <p className="text-black-text-secondary px-12">Prefix Array</p>
          <p className="text-black-text-accent px-12">Sliding Window</p>
          <p className="text-black-text-secondary px-12">Two pointer</p>
          <p className="text-black-text-accent px-12">Fast and slow pointer</p>
          <p className="text-black-text-secondary px-12">K elements</p>

        </Marquee>
        <Marquee direction='right' className="mt-8">
          <p className="text-black-text-secondary px-12">Binary Search</p>
          <p className="text-black-text-accent px-12">Max heap</p>
          <p className="text-black-text-secondary px-12">Min heap</p>
          <p className="text-black-text-accent px-12">Priority Queue</p>
          <p className="text-black-text-secondary px-12">K elements</p>
          <p className="text-black-text-accent px-12">Heap</p>
        </Marquee>
      </section>

      <section className="bg-white border-t border-black flex flex-col items-center font-quicksand py-20 lg:px-12">

        <div className="w-10/12 md:w-8/12 lg:w-6/12">
          <h1 className="font-quicksand text-3xl text-black font-semibold text-left">Why do you need another DSA <br /> platform?</h1>
          <div className="flex justify-center mt-6 mb-6"><hr className="w-1/2 text-black" /></div>
          <h1 className="font-quicksand text-3xl text-black font-semibold text-right">What problem do we solve?</h1>
          <div className="mt-20 flex justify-between items-center">
            <h1 className="text-left text-black text-4xl font-semibold">We Provide <br /> Structure</h1>
            <Image src="/roadmap.png" alt="Brain image" width={280} height={52} />
          </div>
          <p className="mt-12 text-lg text-black-text-primary text-center font-semibold max-w-2xl">Yes, there are lists like Blind 75, LeetCode 150, and Striver’s Sheet—each valuable in their own way. But if you’ve ever tried following them, you know how overwhelming it gets. Too many links, too many sublists, too many distractions. And if you have ADHD (like most of us), you know how hard it is to even start.

            That’s why we are giving you <span className="text-black underline underline-offset-8">one roadmap. One structured path.</span> No noise, no detours—just a clear, focused journey to becoming interview-ready. <br /> #OneSiteToRuleThemAll</p>
          <div className="flex justify-between mt-20 items-center">
            <Image src="/brain.png" alt="Brain image" width={280} height={52} />
            <h1 className="text-right text-black text-4xl font-semibold">We tell you what is wrong with <span className="underline underline-offset-8">your</span> code and how to make it better</h1>
          </div>
          <p className="mt-12 text-lg text-black-text-primary text-center font-semibold max-w-2xl">Looking up solutions is necessary, but fixing your mistakes is where real growth happens. Our AI assistant doesn’t just give you the answer—it guides you. It points out mistakes in your code, builds on your ideas, and nudges you in the right direction while keeping your thought process at the center.
            This way, you gain confidence in your own logic, not just someone else’s solution. And with every small win, you’ll keep moving forward—one step closer to mastering DSA.
          </p>
        </div>



        {/* WHAT IS SPECIAL ABOUT US */}
        {/* <h1 className="font-raleway text-3xl text-black-background-primary text-center mt-20">What is special about us?</h1>
        <p className="mt-12 text-black-text-primary text-center font-semibold max-w-2xl">Our platform uses pattern-based learning to help you recognize problem-solving techniques. By focusing on core patterns, you'll learn to tackle a wide range of problems with confidence—whether you're preparing for coding interviews or strengthening your problem-solving skills.</p>
        <p className="relative overflow-hidden bg-black-background-primary font-quicksand font-semibold rounded-full px-10 text-white flex py-3 mt-10 group">
          Productivity Hacks
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></span>
        </p> */}

        {/* Cards */}

        {/* <div className="flex max-sm:flex-col gap-10  mt-12">
          <Card className="max-w-md bg-background-primary min-h-72">
            <CardHeader className="text-center font-semibold text-xl  text-black-background-primary ">Habit stacking</CardHeader>
            <CardContent className="text-center font-quicksand font-semibold text-black-text-primary">Link problem-solving to an existing habit to make practice effortless. For example, solve one LeetCode problem right after your morning coffee or before starting work. By embedding DSA into your daily routine, it becomes a natural part of your day.</CardContent>
          </Card>
          <Card className="max-w-md bg-background-accent min-h-72">
            <CardHeader className="text-center font-semibold text-xl  text-black-background-primary ">Maintain Streaks</CardHeader>
            <CardContent className="text-center font-quicksand font-semibold text-black-text-primary">Tracking progress with streaks helps reinforce consistency. Whether it’s solving one problem daily or completing a set number of challenges per week, maintaining a streak keeps you accountable and motivated. Small, consistent efforts lead to long-term mastery.</CardContent>
          </Card>
        </div>

        <div className="flex max-sm:flex-col  gap-10  mt-12">
          <Card className="max-w-md bg-brown-accent text-background-accent min-h-72">
            <CardHeader className="text-center font-semibold text-xl">Two-Minute Rule</CardHeader>
            <CardContent className="text-center font-quicksand font-semibold text-yellow-50">Getting started is often the hardest part. The two-minute rule helps overcome procrastination—commit to just reading the problem statement or setting up the code template. Once you begin, momentum naturally carries you forward.</CardContent>
          </Card>
          <Card className="max-w-md min-h-72">
            <CardHeader className="text-center font-semibold text-xl">Deliberate Practice</CardHeader>
            <CardContent className="text-center font-quicksand font-semibold text-black-text-secondary">Instead of solving random problems, focus on deliberate practice—working on progressively harder problems and analyzing patterns. Struggle is essential for growth, so step out of your comfort zone and push your problem-solving skills further</CardContent>
          </Card>
        </div> */}


      </section>

      {/* How will the process work section */}
      <section className="min-h-screen border-t border-black bg-background-secondary font-quicksand flex flex-col items-center">
        <h1 className="font-raleway  mt-16 text-3xl text-black-background-primary">How will our process work?</h1>
        <div className="border-t mt-8 border-black w-80"></div>

        <div className="mt-12 px-16 md:px-32 lg:px-48 xl:px-80">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-8 md:mt-4">
            <p className="text-black-background-primary font-semibold">1. Pick a Data Structure</p>
            <p className="text-black-text-primary max-w-md font-semibold">You can either go through the order decided by us, or if you are already familiar with that DS, you can directly go to the Data structure you want to learn</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-8 md:mt-8">
            <p className="text-black-background-primary font-semibold">2. Understand why and how it is used</p>
            <p className="text-black-text-primary max-w-md font-semibold">It is a pretty simple step but somehow the most missed one. Every DS that came into existence is to satisfy a need. Something which variables, or the current existing Data structures couldnt solve in the required time or memory. So we need to understand what problem a data structure solves and what problem it creates.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-8 md:mt-8">
            <p className="text-black-background-primary font-semibold">3. Work on the common patterns related to that data structure</p>
            <p className="text-black-text-primary max-w-md font-semibold">In mathematics, whenever you learn a new formula, things are not as simple as substituting it and getting the answer. You also need to learn when, where and how to use it. Here comes the algorithms part. We learn about a new data structure, but there are a few common ways to use them. You will be taught the most common ways which will get you through most of the problems.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-8 md:mt-8">
            <p className="text-black-background-primary font-semibold">4. Move on to the next Data structure</p>
            <p className="text-black-text-primary max-w-md font-semibold">Congratulations! You just completed a Data structure. Of course, the process wont be as simple as described here. There will be moments where you will quite literally get a headache. But that is when you know you are learning.</p>
          </div>

          <h1 className="mt-24 text-3xl font-semibold text-center  text-black-background-primary ">So there's just one thing left to do</h1>
          <p className="font-semibold text-center text-lg text-black-text-primary mt-12">
            Stick with us. You will get tempted to try out a new resource or a new video explaining a different technique. We definitely dont mind this and even encourage you to try out several sources of learning. But do come back and stick to the patterns and problems and <span className="text-black underline underline-offset-8">complete the course</span>. We promise you, it will have an impact.
          </p>
        </div>
        <div className="border-t mt-12 border-black w-80"></div>
        <p className="text-md mt-12 mb-8 text-black-text-secondary font-comfortaa">//Let's start learning</p>
      </section>

      {/*Collect Email section*/}
      <section className="h-2/5 bg-background-secondary pb-24">
        <EmailCollection />
      </section>


    </>
  );
}
