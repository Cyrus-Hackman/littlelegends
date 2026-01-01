import { Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/MotionWrapper";
import { motion } from "framer-motion";

export function PrincipalMessage() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Principal Image */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="relative">
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                    alt="Dr. Jane Doe - Principal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </motion.div>
                {/* Decorative Element */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
            </FadeIn>

            {/* Message Content */}
            <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="absolute -top-4 -left-4 text-primary/20" size={64} />
                </motion.div>
                
                <div className="relative z-10">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Welcome Message
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                    From the Principal's Desk
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Dear Parents and Students,
                    </p>
                    <p>
                      Welcome to Little Legends School! For over 15 years, we have been
                      committed to providing an exceptional educational experience that
                      prepares students for success in an ever-changing world.
                    </p>
                    <p>
                      Our dedicated team of educators works tirelessly to create a
                      nurturing environment where every child can discover their unique
                      talents and develop the skills they need to become confident,
                      compassionate leaders.
                    </p>
                    <p>
                      I invite you to explore our campus and discover why Little Legends
                      School is the perfect place for your child to learn, grow, and thrive.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-semibold text-foreground">Dr. Jane Doe</p>
                    <p className="text-sm text-muted-foreground">
                      Principal, Little Legends School
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
