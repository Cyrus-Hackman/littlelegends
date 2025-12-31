import { Button } from "@/components/ui/button";
import { BookOpen, Users, FileText, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: BookOpen,
    title: "Academics",
    description:
      "A rigorous curriculum designed to challenge and inspire students at every level, blending traditional learning with modern approaches.",
    link: "/academics",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Campus Life",
    description:
      "A vibrant community where students explore their passions through clubs, sports, arts, and leadership opportunities.",
    link: "/student-life",
    color: "from-accent to-secondary",
  },
  {
    icon: FileText,
    title: "Admissions",
    description:
      "Begin your journey with us. Learn about our admission process, requirements, and how to apply for the upcoming academic year.",
    link: "/admissions",
    color: "from-secondary to-accent",
  },
];

export function HighlightCards() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Explore
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Discover What Makes Us Special
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <motion.a
                href={item.link}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group block relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 h-full"
              >
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="text-primary" size={32} />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Button variant="ghost" className="gap-2 text-primary hover:text-primary p-0">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
