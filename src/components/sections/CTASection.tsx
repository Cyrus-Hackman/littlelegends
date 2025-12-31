import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/animations/MotionWrapper";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Take the first step towards giving your child an exceptional education.
              Schedule a campus visit or start the application process today.
            </p>
          </FadeIn>

          <ScaleIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base gap-2"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                >
                  Schedule a Visit
                </Button>
              </motion.div>
            </div>
          </ScaleIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-foreground/90">
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </motion.a>
              <motion.a 
                href="mailto:info@littlelegends.edu" 
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                <span>info@littlelegends.edu</span>
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
