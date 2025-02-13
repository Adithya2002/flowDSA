import React from 'react'
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <>
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
        </>
    )
}

export default HeroSection