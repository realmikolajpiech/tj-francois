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
    description: 'Meet our team - the founders, the internal team, and the creators.',
    openGraph: {
        title: 'Vital Socials',
        description: 'Unique Ad Creatives on a Weekly Basis',
        url: 'https://vitalsocials.vercel.app',
        siteName: 'Vital Socials - Meet Our Crew',
        images: [
        {
            url: 'https://vitalsocials.vercel.app/crew-OG.png',
            width: 1200,
            height: 630,
            alt: "Vital Socials"
        },
        ],
        locale: 'en_US',
        type: 'website',
    },

}

export default function MeetOurCrew() {
    return (
        <div className="relative">
            <Topbar />
            <SMMHeroSection />
            <ManagersSection />
            <ContactSection />
            <Footer />
            <Bg size='small' />
        </div>
    );
}