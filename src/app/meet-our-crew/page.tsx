'use client';

import { Footer } from "@/components/footer/Footer";
import { Bg } from "@/components/general/Bg";
import { Topbar } from "@/components/hero-section/Topbar";
import { ContactSection } from "@/components/shared/ContactSection";
import { SMMHeroSection } from "@/smm-components/SMMHeroSection";
import ManagersSection from "../../smm-components/ManagersSection";
import { useState } from "react";
import gsap from "gsap";
import SMMServices from "@/smm-components/SMMServices";

export default function MeetOurCrew() {
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
            <SMMServices />
            <ManagersSection />
            <ContactSection />
            <Footer />
            <Bg size='small' />
        </div>
    );
}