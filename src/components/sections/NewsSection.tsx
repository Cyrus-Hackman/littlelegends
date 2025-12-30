import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "Dec 28, 2024",
    title: "Annual Sports Day 2024",
    excerpt:
      "Join us for an exciting day of athletic competitions and team spirit as our students showcase their talents.",
    category: "Events",
  },
  {
    date: "Dec 20, 2024",
    title: "Science Fair Winners Announced",
    excerpt:
      "Congratulations to all participants! Our young scientists impressed judges with innovative projects.",
    category: "Achievements",
  },
  {
    date: "Dec 15, 2024",
    title: "Winter Break Schedule",
    excerpt:
      "School will be closed from December 23rd to January 2nd. We wish all families a wonderful holiday season.",
    category: "Announcements",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
                <span className="text-xs font-medium text-primary bg-background/80 px-3 py-1 rounded-full">
                  {item.category}
                </span>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
