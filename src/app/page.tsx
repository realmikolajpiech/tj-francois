import { ContactSection } from "@/components/contact-section/ContactSection";
import { CopySection } from "@/components/copy-section/CopySection";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { PortfolioSection } from "@/components/portfolio-section/PortfolioSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { Topbar } from "@/components/hero-section/Topbar";
import { Bg } from "@/components/general/Bg";
import dynamic from "next/dynamic";

export function Hello() {
  return <p>Hello!</p>
}

const DynamicTestimonialsSection = dynamic(() => import('@/components/testimonials-section/TestimonialsSection'), {
  ssr: false,
  loading: () => <h1>Loading...</h1>
})

export default function Home() {
  return (
    <div className="relative">
      <Topbar />
      <HeroSection />
      <PortfolioSection />
      <CopySection />
      <ProcessSection />
      <DynamicTestimonialsSection />
      <ContactSection />
      <Footer />
      <Bg />
    </div>
  );
}
