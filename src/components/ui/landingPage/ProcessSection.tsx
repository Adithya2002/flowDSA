import React from 'react'

const ProcessSection = () => {
    return (
        <>
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
        </>
    )
}

export default ProcessSection