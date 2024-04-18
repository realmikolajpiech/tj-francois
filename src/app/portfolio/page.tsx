import { Footer } from "@/components/footer/Footer";
import { Bg } from "@/components/general/Bg";
import { Topbar } from "@/components/hero-section/Topbar";
import { PortfolioContactSection } from "@/portfolio-components/PortfolioContactSection";
import { PortfolioHeroSection } from "@/portfolio-components/PortfolioHeroSection";
import { PortfolioPortfolioSection } from "@/portfolio-components/PortfolioPortfolioSection";

export default function Portfolio() {
    return (
        <div className="relative">
            <Topbar />
            <PortfolioHeroSection />
            <PortfolioPortfolioSection />
            <PortfolioContactSection />
            <Footer />
            <Bg />
        </div>
    );
}