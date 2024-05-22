'use client';

import { Footer } from "@/components/footer/Footer";
import { Bg } from "@/components/general/Bg";
import { Topbar } from "@/components/hero-section/Topbar";
import { ContactSection } from "@/components/shared/ContactSection";
import { SMMHeroSection } from "@/smm-components/SMMHeroSection";
import ManagersSection from "../../smm-components/ManagersSection";
import { useState } from "react";
import gsap from "gsap";

export default function SMM() {
    const [pdf, setPdf] = useState('');

    const showPopUp = (url: string) => {
        setPdf(url);

        gsap.to('#popup', {
            opacity: 1,
            display: 'block',
        })
    }

    return (
        <div className="relative">
            <Topbar />
            <SMMHeroSection />
            <ManagersSection />
            <ContactSection />
            <Footer />
            <Bg size='small' />
            {/* <div id='popup' className='opacity-0 hidden absolute bg-white z-50 h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] rounded-xl shadow-sm overflow-hidden'>
                <div className="bg-white w-full flex justify-between">
                    <div className="ml-6 py-2"><b>Shianne</b> - Portfolio / Packages</div>
                    <div className="flex">
                        <div className=" font-medium px-4 flex items-center cursor-pointer">Download</div>
                        <div className="bg-[#73091D] text-white font-medium px-4 flex items-center cursor-pointer">Close</div>
                    </div>
                </div>
                <object data={pdf} type="application/pdf" width="100%" height="100%">
                    <p>Unable to display PDF file. <a href={pdf}>Download</a> instead.</p>
                </object>
            </div> */}
        </div>
    );
}