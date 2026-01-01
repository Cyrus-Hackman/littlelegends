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
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Campus Life",
    description:
      "A vibrant community where students explore their passions through clubs, sports, arts, and leadership opportunities.",
    link: "/student-life",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
  },
  {
    icon: FileText,
    title: "Admissions",
    description:
      "Begin your journey with us. Learn about our admission process, requirements, and how to apply for the upcoming academic year.",
    link: "/admissions",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
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
                {/* Card Header with Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="text-primary" size={24} />
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
