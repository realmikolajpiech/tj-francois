'use client';

import Image from "next/image";
import { Suspense, useEffect, useRef } from "react";
import Phone from "./Phone";

export function PortfolioSection() {

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const phoneRef = useRef<HTMLDivElement | null>(null);

    const stopCarousel = () => {
        console.log("func")
        if (carouselRef.current) {
            carouselRef.current.classList.add('stop-carousel');
        }
    }

    return (
        <section className="portfolio-section w-[100vw] h-[850px] items-center gap-10 flex overflow-hidden mt-48 mb-16 md:-mt-36 md:-mb-8 lg:-mt-56 xl:-mt-[13rem] lg:pt-[80px] relative">
            <div className="flex overflow-hidden gap-10 relative w-full h-[850px] items-center mt-48 mb-16 md:-mt-36 md:-mb-8 lg:-mt-48 xl:-mt-[0] lg:pt-[0] animate-stop pointer-events-none">
                <div className='flex scale-[70%] md:scale-100 animate-scroll absolute mt-10 sm:mt-16 xl:mt-24 group' ref={carouselRef}>
                    <div className="flex gap-[4.5rem] shrink-0 -translate-x-[11rem]">
                        <Phone imgOrVid="video" video="/creators/betty2.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/healthandwellness3.mp4" />
                        <Phone imgOrVid="video" video="/creators/roby.mp4" />
                        <Phone imgOrVid="video" video="/creators/ericka.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/pet2.mp4" />
                        <Phone imgOrVid="video" video="/creators/betty1.mp4" />
                        <Phone imgOrVid="video" video="/creators/rob.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/beauty2.mp4" />
                    </div>
                    <div className="flex gap-[4.5rem] shrink-0 -rotate-[40deg] -translate-y-[585px] -translate-x-[310px] pointer-events-auto">
                        <Phone imgOrVid="video" video="/creators/betty2.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/healthandwellness3.mp4" />
                        <Phone imgOrVid="video" video="/creators/roby.mp4" />
                        <Phone imgOrVid="video" video="/creators/ericka.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/pet2.mp4" />
                        <Phone imgOrVid="video" video="/creators/betty1.mp4" />
                        <Phone imgOrVid="video" video="/creators/rob.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/beauty2.mp4" />
                    </div>
                    <div className="flex gap-[4.5rem] shrink-0 -rotate-[80deg] -translate-y-[2240px] -translate-x-[1260px] pointer-events-auto">
                        <Phone imgOrVid="video" video="/creators/betty2.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/healthandwellness3.mp4" />
                        <Phone imgOrVid="video" video="/creators/roby.mp4" />
                        <Phone imgOrVid="video" video="/creators/ericka.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/pet2.mp4" />
                        <Phone imgOrVid="video" video="/creators/betty1.mp4" />
                        <Phone imgOrVid="video" video="/creators/rob.mp4" />
                        <Phone imgOrVid="video" video="/portfolio/beauty2.mp4" />
                    </div>
                </div>
            </div>
        </section>
    )
}