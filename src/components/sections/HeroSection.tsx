import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { StaggeredText } from "@/components/animations/StaggeredText";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-center">
          <iframe 
            src="https://www.youtube.com/embed/kMyzCCxVfkw?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=kMyzCCxVfkw&vq=hd1080"
            className="w-[400vw] h-[225vw] md:w-[200vw] md:h-[112.5vw] lg:w-[150vw] lg:h-[84.375vw] flex-shrink-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Centered Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/90 text-white backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-sm font-bold mb-8 mx-auto shadow-lg"
          >
            <GraduationCap size={18} />
            <span>Admissions Open 2026-27</span>
          </motion.div>

          <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] leading-tight mb-8 max-w-5xl mx-auto">
            <StaggeredText
              text="Educating Minds, Shaping Futures"
              highlightWords={["Shaping", "Futures"]}
              delay={0.2}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-12 max-w-3xl mx-auto font-medium"
          >
            At Little Legends School, we nurture curious minds and build strong
            foundations for lifelong learning in a warm, supportive environment.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/admissions">
              <Button size="lg" className="text-base gap-2 px-8 h-14 shadow-xl">
                Apply Now
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Button size="lg" className="text-base h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
              <Link to="/contact">
                Schedule a Visit
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Section (Brought down image with big text) */}
      <section className="py-24 bg-background relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* The Image (Brought down) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform -rotate-3" />
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <ParallaxImage 
                    src="https://ik.imagekit.io/cyrus/WhatsApp%20Image%202026-02-28%20at%2011.59.11.jpeg"
                    alt="Teacher assisting a seated student with their book"
                    speed={0.2}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* The Big Text & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
                Guided Excellence
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-[1.1]">
                Personalized Care for Every Student
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We believe that every child learns differently. Our dedicated educators provide continuous, one-on-one support—sitting down to guide students through challenges and ensuring they confidently master every lesson with encouraging hands-on attention.
              </p>
              
              {/* Stats moved down here */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {[
                  { icon: Users, value: 250, suffix: "+", label: "Happy Students" },
                  { icon: GraduationCap, value: 25, suffix: "+", label: "Expert Teachers" },
                  { icon: Award, value: 17, suffix: "+", label: "Years of Excellence" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-2">
                      <stat.icon size={24} />
                      <span className="text-2xl font-bold">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
