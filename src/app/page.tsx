import { ContactSection } from "@/components/contact-section/ContactSection";
import { CopySection } from "@/components/copy-section/CopySection";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { PortfolioSection } from "@/components/portfolio-section/PortfolioSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { TestimonialsSection } from "@/components/testimonials-section/TestimonialsSection";
import { Topbar } from "@/components/hero-section/Topbar";
import { Bg } from "@/components/general/Bg";

export default function Home() {
  return (
    <div className="relative">
      <Topbar />
      <HeroSection />
      <PortfolioSection />
      <CopySection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Bg />
    </div>
  );
}
