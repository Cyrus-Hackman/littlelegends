import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { HighlightCards } from "@/components/sections/HighlightCards";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { NewsSection } from "@/components/sections/NewsSection";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-background">
        <HeroSection />
        <MissionSection />
        <HighlightCards />
        <PrincipalMessage />
        <PhotoGallery />
        <UpcomingEvents />
        <NewsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
