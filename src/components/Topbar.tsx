"use client";

import Image from "next/image";
import { useState } from "react";

export function Topbar() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleNavbar = (): void => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <nav className="py-4 px-8">
            <div className="flex justify-between items-center">
                <div className="font-bold">Vital Socials</div>
                <button className="md:hidden flex items-center justify-center p-2 rounded=md text-black hover:text-black "
                    onClick={toggleNavbar}
                >
                    {isCollapsed ? (
                        <svg id="x-menu" viewBox="0 0 100 100" width="40" height="40">
                            <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10" />
                            <line x1="10" y1="90" x2="90" y2="10" stroke="black" stroke-width="10" />
                        </svg>
                    ) : (
                            <svg id="hamburger-menu" viewBox="0 0 100 80" width="40" height="40">
                                <rect width="100" height="10" rx="8"></rect>
                                <rect y="30" width="100" height="10" rx="8"></rect>
                                <rect y="60" width="100" height="10" rx="8"></rect>
                            </svg>
                    )}
                </button>
            </div>
            {isCollapsed && (
                <div className="md:hidden flex flex-col gap-10 p-6">
                    <div className="flex flex-col gap-4 w-full justify-center text-center text-xl font-medium">
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="flex gap-10 w-full justify-center">
                        <a href="https://x.com/vitalsocials"><Image src="/socialmedia/x.png" width={25} height={25} alt="X/Twitter" /></a>
                        <a href="https://www.instagram.com/vitalsocials.co"><Image src="/socialmedia/instagram.png" width={25} height={25} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/in/tj-francois"><Image src="/socialmedia/linkedin.png" width={25} height={25} alt="Linkedin" /></a>
                        <a href="https://www.threads.net/@vitalsocials.co"><Image src="/socialmedia/tiktok.png" width={25} height={25} alt="Threads" /></a>
                    </div>
                </div>
            )}
        </nav>
    )
}