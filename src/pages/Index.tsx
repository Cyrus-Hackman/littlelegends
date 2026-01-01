import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { HighlightCards } from "@/components/sections/HighlightCards";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { NewsSection } from "@/components/sections/NewsSection";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <HighlightCards />
        <PrincipalMessage />
        <PhotoGallery />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
