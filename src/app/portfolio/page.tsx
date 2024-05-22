import { Footer } from "@/components/footer/Footer";
import { Bg } from "@/components/general/Bg";
import { Topbar } from "@/components/hero-section/Topbar";
import { ContactSection } from "@/components/shared/ContactSection";
import { PortfolioHeroSection } from "@/portfolio-components/PortfolioHeroSection";
import { PortfolioPortfolioSection } from "@/portfolio-components/PortfolioPortfolioSection";

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