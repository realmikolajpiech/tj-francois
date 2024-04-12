import { ContactSection } from "@/components/ContactSection";
import { CopySection } from "@/components/CopySection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Topbar } from "@/components/Topbar";

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
    </div>
  );
}
