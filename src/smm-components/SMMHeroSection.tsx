"use client";

export function SMMHeroSection() {
    return (
        <section className="w-full md:mt-6">
            <div className="md:flex">
                <div className="px-6 md:px-8 lg:px-12 xl:px-20 md:pr-1">
                    <a href="/">
                        <div className="flex gap-2 items-center">
                            <svg width="13px" height="13px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#8B8B8B" /></svg>
                            <h3 className="text-[#8B8B8B]">Go back</h3>
                        </div>
                    </a>
                    <h1 className="mt-2 xl:mt-4 font-bold text-[12vw] sm:text-[52px] md:text-[41px] lg:text-[50px] xl:text-[60px] leading-[50px]">Social Media Managers</h1>
                    <h2 className="mt-[28px] max-w-[650px] text-[16px] md:text-[18px] lg:text-[20px] ">Meet our social media managers.</h2>
                </div>
            </div>
        </section>
    )
}