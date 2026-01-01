import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { motion } from "framer-motion";

const newsItems = [
  {
    date: "Dec 28, 2024",
    title: "Annual Sports Day 2024",
    excerpt:
      "Join us for an exciting day of athletic competitions and team spirit as our students showcase their talents.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
  },
  {
    date: "Dec 20, 2024",
    title: "Science Fair Winners Announced",
    excerpt:
      "Congratulations to all participants! Our young scientists impressed judges with innovative projects.",
    category: "Achievements",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
  },
  {
    date: "Dec 15, 2024",
    title: "Winter Break Schedule",
    excerpt:
      "School will be closed from December 23rd to January 2nd. We wish all families a wonderful holiday season.",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Latest News & Events
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 gap-2">
            View All News
            <ArrowRight size={16} />
          </Button>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {newsItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 h-full"
              >
                {/* News Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <motion.span 
                    className="absolute top-4 left-4 text-xs font-medium text-white bg-primary/90 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.category}
                  </motion.span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
