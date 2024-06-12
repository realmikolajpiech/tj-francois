'use client';

import { useRef } from "react";
import Phone from "./Phone";

export default function PortfolioSection() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const pauseCarousel = () => {
        if (carouselRef.current) {
            carouselRef.current.style.animationPlayState = 'paused';
        }
    }

    const resumeCarousel = () => {
        if (carouselRef.current) {
            carouselRef.current.style.animationPlayState = 'running';
        }
    }

    return (
        <section className="portfolio-section w-[100vw] h-[850px] items-center gap-10 flex overflow-hidden mt-48 mb-16 md:-mt-36 md:-mb-8 lg:-mt-56 xl:-mt-[13rem] lg:pt-[80px] relative">
            <div className="flex overflow-hidden gap-10 relative w-full h-[850px] items-center mt-48 mb-16 md:-mt-36 md:-mb-8 lg:-mt-48 xl:-mt-[0] lg:pt-[0] animate-stop pointer-events-none" onMouseEnter={() => { pauseCarousel() }} onMouseLeave={() => { resumeCarousel() }}>
                <div className='flex scale-[70%] md:scale-100 animate-scroll absolute mt-10 sm:mt-16 xl:mt-24 group' ref={carouselRef}>
                    <div className="flex gap-[4.5rem] shrink-0 -translate-x-[11rem] pointer-events-auto">
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/betty2.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/tommi.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/roby.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/ericka.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/sierra.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/britney.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/rob.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/portfolio/beauty2.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                    </div>
                    <div className="flex gap-[4.5rem] shrink-0 -rotate-[40deg] -translate-y-[585px] -translate-x-[310px] pointer-events-auto">
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/betty2.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/tommi.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/roby.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/ericka.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/sierra.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/britney.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/rob.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/portfolio/beauty2.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                    </div>
                    <div className="flex gap-[4.5rem] shrink-0 -rotate-[80deg] -translate-y-[2240px] -translate-x-[1260px] pointer-events-auto">
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/betty2.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/tommi.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/roby.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/ericka.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/sierra.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/britney.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/creators/rob.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                        <Phone imgOrVid="video" video="https://cdn.vitalsocials.co/portfolio/beauty2.mp4" pauseCarousel={pauseCarousel} resumeCarousel={resumeCarousel} />
                    </div>
                </div>
            </div>
        </section>
    )
}