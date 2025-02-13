import React from 'react'
import Image from "next/image";

const AboutUsSection = () => {
    return (
        <>
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
            </section>
        </>
    )
}

export default AboutUsSection