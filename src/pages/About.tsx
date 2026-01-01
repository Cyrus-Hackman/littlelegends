import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations/MotionWrapper";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  GraduationCap, 
  Calendar,
  Award,
  Users,
  BookOpen,
  Linkedin,
  Mail
} from "lucide-react";

const timelineEvents = [
  {
    year: "2009",
    title: "Foundation",
    description: "Little Legends School was founded with a vision to provide quality education to young minds."
  },
  {
    year: "2012",
    title: "First Expansion",
    description: "Added new classrooms and a state-of-the-art science laboratory."
  },
  {
    year: "2015",
    title: "Sports Complex",
    description: "Inaugurated our sports complex with basketball courts and swimming pool."
  },
  {
    year: "2018",
    title: "Arts Center",
    description: "Opened the creative arts center for music, drama, and visual arts."
  },
  {
    year: "2021",
    title: "Digital Learning",
    description: "Implemented smart classrooms and digital learning infrastructure."
  },
  {
    year: "2024",
    title: "15 Years of Excellence",
    description: "Celebrating 15 years of nurturing young minds and shaping futures."
  }
];

const leadershipTeam = [
  {
    name: "Dr. Jane Doe",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "20+ years in education leadership. PhD in Educational Administration."
  },
  {
    name: "Mr. Robert Smith",
    role: "Vice Principal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "15+ years experience. Specializes in curriculum development."
  },
  {
    name: "Mrs. Sarah Johnson",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Expert in child psychology and innovative teaching methods."
  }
];

const facultyMembers = [
  {
    name: "Ms. Emily Chen",
    role: "Head of Science",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    department: "Science"
  },
  {
    name: "Mr. David Williams",
    role: "Head of Mathematics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    department: "Mathematics"
  },
  {
    name: "Ms. Maria Garcia",
    role: "Head of Languages",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    department: "Languages"
  },
  {
    name: "Mr. James Brown",
    role: "Head of Arts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    department: "Arts"
  },
  {
    name: "Ms. Lisa Anderson",
    role: "Head of Sports",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    department: "Physical Education"
  },
  {
    name: "Mr. Michael Lee",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    department: "Computer Science"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Students" },
  { icon: GraduationCap, value: "50+", label: "Teachers" },
  { icon: Award, value: "100+", label: "Awards" },
  { icon: BookOpen, value: "15+", label: "Years" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/20 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                  Building Futures, One Legend at a Time
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  For over 15 years, Little Legends School has been a beacon of educational 
                  excellence, nurturing young minds and helping them discover their unique potential 
                  in a supportive and innovative learning environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    Schedule a Visit
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} direction="left">
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop"
                      alt="Little Legends School Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-3xl font-bold">15+</p>
                    <p className="text-sm opacity-90">Years of Excellence</p>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center text-primary-foreground">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                    <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Vision & Mission
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScaleIn>
                <Card className="h-full border-2 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a leading institution that inspires lifelong learning, fosters innovation, 
                      and develops compassionate global citizens who positively impact their communities 
                      and the world.
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>

              <ScaleIn delay={0.1}>
                <Card className="h-full border-2 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide a holistic, student-centered education that nurtures intellectual 
                      curiosity, emotional intelligence, and ethical values, preparing every child 
                      to thrive in an ever-changing world.
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>
            </div>

            {/* Core Values */}
            <FadeIn delay={0.2} className="mt-16">
              <Card className="max-w-5xl mx-auto border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Core Values</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {["Excellence", "Integrity", "Compassion", "Innovation"].map((value) => (
                      <div key={value} className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                School History
              </h2>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />
                
                <StaggerContainer className="space-y-12" staggerDelay={0.15}>
                  {timelineEvents.map((event, index) => (
                    <StaggerItem key={event.year}>
                      <div className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Timeline Dot */}
                        <motion.div 
                          className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 z-10"
                          whileInView={{ scale: [0, 1.2, 1] }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* Content */}
                        <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                          <Card className="inline-block hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span className="text-primary font-bold text-lg">{event.year}</span>
                              </div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                              <p className="text-muted-foreground text-sm">{event.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Meet the dedicated leaders who guide our school towards excellence
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
              {leadershipTeam.map((member) => (
                <StaggerItem key={member.name}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                        <p className="text-primary font-medium mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                        <div className="flex justify-center gap-3">
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Faculty & Staff
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our dedicated educators bring passion and expertise to inspire every student
              </p>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {facultyMembers.map((member) => (
                <StaggerItem key={member.name}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 p-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{member.name}</h3>
                            <p className="text-primary text-sm">{member.role}</p>
                            <p className="text-muted-foreground text-xs">{member.department}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3} className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Faculty
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Join Our Community
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Become part of the Little Legends family and give your child the foundation for a bright future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
