import { Footer } from "@/components/footer/Footer";
import { Bg } from "@/components/general/Bg";
import { Topbar } from "@/components/hero-section/Topbar";
import { ContactSection } from "@/components/shared/ContactSection";
import { SMMHeroSection } from "@/smm-components/SMMHeroSection";
import ManagersSection from "../../smm-components/ManagersSection";
import SMMServices from "@/smm-components/SMMServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Vital Socials - Meet Our Crew',
    description: 'Meet our team - the founders, the internal team, and the creators.'
}

export default function MeetOurCrew() {
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