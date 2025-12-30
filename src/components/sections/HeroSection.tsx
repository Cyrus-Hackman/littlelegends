import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap size={18} />
              <span>Admissions Open 2025-26</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Educating Minds,{" "}
              <span className="text-primary">Shaping Futures</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              At Little Legends School, we nurture curious minds and build strong
              foundations for lifelong learning in a warm, supportive environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base gap-2">
                Apply Now
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Schedule a Visit
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Users size={20} />
                  <span className="text-2xl md:text-3xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Students</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <GraduationCap size={20} />
                  <span className="text-2xl md:text-3xl font-bold">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Expert Teachers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Award size={20} />
                  <span className="text-2xl md:text-3xl font-bold">15+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <GraduationCap size={64} className="text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    Where Little Legends Begin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
