"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmailCollection from "@/components/EmailCollection";

const PricingSection = () => {
    return (
        <section className="px-6 font-quicksand flex flex-col items-center text-center bg-background-primary min-h-screen pt-12">
            <p className="text-lg text-black-text-primary font-comfortaa">#Enter your email now, Sign up early, save more</p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-raleway text-black lg:leading-snug mt-4">
                Exclusive Early Access Pricing
            </h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-2xl font-quicksand text-black-text-primary font-semibold mt-8">
                Lock in your discounted price before it increases!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full max-w-6xl mb-20">
                {/* Pricing Card 1 - Base */}
                <Card className="p-8 shadow-lg bg-background-secondary border-0  text-center">
                    <CardHeader>
                        <CardTitle className="text-2xl text-black-background-primary font-bold">Trail</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <p className="text-black-text-accent text-gray-800 text-lg">Perfect if you want to try all <br />the features of the site out</p>
                        <p className="text-black-text-accent line-through text-lg mt-2">₹69</p>
                        <p className="text-4xl font-bold text-black">₹49</p> <span className="text-black">/ 1 Day</span>
                        <div className="flex flex-col items-start">
                            <p className="text-black-text-primary mt-2">✅ Access to fundamental DSA topics</p>
                            <p className="text-black-text-primary">✅ Less intelligent AI Assistant to help you out</p>
                            <p className="text-black-text-primary">❌ No Structured path</p>
                        </div>

                    </CardContent>
                </Card>

                {/* Pricing Card 2 - Standard (Highlighted) */}
                <Card className="p-10 shadow-xl text-center border-0 bg-black-background-primary">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">Standard</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <p className="text-black-text-secondary text-lg">Best if you are already familiar with DSA and want <br />a structured path to revise and cover everything</p>
                        <p className="text-black-text-secondary line-through text-lg mt-2">₹999</p>
                        <p className="text-5xl font-bold text-white">₹699</p> <span className="text-white">/ 3 Months</span>
                        <div className="flex flex-col items-start mt-2">
                            <p>✅ Everything in Base plan</p>
                            <p>✅ In-depth explanations</p>
                            <p>✅ Structured path</p>
                            <p>✅ Fine Tuned AI assistant for debugging and teaching</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Pricing Card 3 - Ultimate */}
                <Card className="p-8 shadow-lg border-0 text-center">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">Ultimate</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <p className="text-black-text-secondary text-lg">Perfect if you want a strong foundation and want<br /> to  start and finish your journey without missing anything</p>
                        <p className="text-black-text-secondary line-through text-lg mt-2">₹1799</p>
                        <p className="text-4xl font-bold text-background-primary">₹1399</p> <span className="text-white">/6 Months</span>
                        <div className="flex flex-col items-start mt-2">

                            <p className=" ">✅ Everything in Standard plan</p>
                            <p className="">✅ The best AI model for teaching </p>
                            <p className="">✅ Create groups with friends to maintain competetion</p>
                            <p className="">✅ Habit maintaining UI changes for consistency</p>
                        </div>

                    </CardContent>
                </Card>
            </div>

            <div className="h-2/5 mb-24">
                <EmailCollection />
            </div>
        </section>
    );
};

export default PricingSection;
