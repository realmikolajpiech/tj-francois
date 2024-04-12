"use client";

import Image from "next/image";

export function Footer() {

    return (
        <footer className="text-center mt-36 pb-3">
            <svg className="w-full absolute bottom-12 left-0 -z-10" viewBox="0 0 640 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_113_1010)">
                    <path d="M-400 782.4L-352 776C-304 769.6 -208 756.8 -112 754.08C-16 751.52 80 758.88 176 747.2C272 735.52 368 704.48 464 694.72C560 684.8 656 696 752 712.32C848 728.48 944 749.92 992 760.48L1040 771.2V961.6H992C944 961.6 848 961.6 752 961.6C656 961.6 560 961.6 464 961.6C368 961.6 272 961.6 176 961.6C80 961.6 -16 961.6 -112 961.6C-208 961.6 -304 961.6 -352 961.6H-400V782.4Z" fill="#EDDCC4"/>
                </g>
                <defs>
                    <clipPath id="clip0_113_1010">
                        <rect width="1440" height="960" fill="white" transform="translate(-400)"/>
                    </clipPath>
                </defs>
            </svg>
            <div className="absolute left-0 bottom-0 -z-10 w-full h-12 bg-[#EDDCC4]"/>
            <div className="flex gap-8 w-full justify-center mb-8 font-medium">
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="flex gap-10 w-full justify-center mb-8">
                <a href="https://x.com/vitalsocials"><Image src="/socialmedia/x.png" width={25} height={25} alt="X/Twitter" /></a>
                <a href="https://www.instagram.com/vitalsocials.co"><Image src="/socialmedia/instagram.png" width={25} height={25} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/tj-francois"><Image src="/socialmedia/linkedin.png" width={25} height={25} alt="Linkedin" /></a>
                <a href="https://www.threads.net/@vitalsocials.co"><Image src="/socialmedia/tiktok.png" width={25} height={25} alt="Threads" /></a>
            </div>
            <div className="font-bold text-[20px]">
                Vital Socials
            </div>
            <div className="text-[13px] text-[#5F5F5F] mt-2">
                Copyright &copy; 2024 Vital Socials LLC
            </div>
        </footer>
    )
}