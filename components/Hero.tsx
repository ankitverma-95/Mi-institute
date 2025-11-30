"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
    {
        id: 1,
        title: "Empowering Your Future",
        subtitle: "Join the best institute for NEET, JEE, and UPSC preparation.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Expert Faculty & Guidance",
        subtitle: "Learn from the masters of their fields with personalized attention.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "State-of-the-Art Facilities",
        subtitle: "Experience learning in a modern, tech-enabled environment.",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Hero() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    return (
        <section className="relative w-full overflow-hidden bg-zinc-900">
            <div className="embla" ref={emblaRef}>
                <div className="flex h-[600px] w-full">
                    {slides.map((slide) => (
                        <div className="relative min-w-full flex-[0_0_100%]" key={slide.id}>
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/60" />
                            </div>
                            <div className="relative container mx-auto flex h-full flex-col justify-center px-4 text-white md:px-6">
                                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    {slide.title}
                                </h1>
                                <p className="mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl">
                                    {slide.subtitle}
                                </p>
                                <div className="mt-10 flex gap-4">
                                    <Link
                                        href="#courses"
                                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
                                    >
                                        Explore Courses
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="#callback"
                                        className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white hover:text-black"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
