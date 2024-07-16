import { Footer } from "@/components/footer/Footer";
import { Bg } from "@/components/general/Bg";
import { Topbar } from "@/components/hero-section/Topbar";
import { ContactSection } from "@/components/shared/ContactSection";
import { PortfolioHeroSection } from "@/portfolio-components/PortfolioHeroSection";
import { PortfolioPortfolioSection } from "@/portfolio-components/PortfolioPortfolioSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Vital Socials - Portfolio',
    description: 'See our creative portfolio in a variety of niches.',
    openGraph: {
        title: 'Vital Socials',
        description: 'Unique Ad Creatives on a Biweekly Basis',
        url: 'https://vitalsocials.vercel.app',
        siteName: 'Vital Socials - Portfolio',
        images: [
            {
                url: 'https://vitalsocials.vercel.app/portfolio-OG.png',
                width: 1200,
                height: 630,
                alt: "Vital Socials"
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function Portfolio() {
    return (
        <div className="relative">
            <Topbar />
            <PortfolioHeroSection />
            <PortfolioPortfolioSection />
            <ContactSection />
            <Footer />
            <Bg />
        </div>
    );
}