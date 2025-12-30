import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Take the first step towards giving your child an exceptional education.
            Schedule a campus visit or start the application process today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="text-base gap-2"
            >
              Apply Now
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              Schedule a Visit
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-foreground/90">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={18} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@littlelegends.edu" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={18} />
              <span>info@littlelegends.edu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
