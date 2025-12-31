import { Heart, Lightbulb, Target, Shield } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We foster kindness, empathy, and respect for all members of our community.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative thinking and modern teaching methodologies.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in academics and character development.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We build trust through honesty, transparency, and ethical behavior.",
  },
];

export function MissionSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Nurturing Tomorrow's Leaders Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Little Legends School is dedicated to providing a holistic education that
            develops intellectual curiosity, emotional intelligence, and social
            responsibility in every child.
          </p>
        </FadeIn>

        {/* Values Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
