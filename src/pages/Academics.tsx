import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Users,
  Lightbulb,
  Target,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { StaggeredText } from "@/components/animations/StaggeredText";

const gradeLevels = [
  {
    level: "Pre-Primary",
    grades: "Nursery - KG2",
    ages: "3-5 years",
    description:
      "A nurturing environment where young learners develop foundational skills through play-based learning and exploration.",
    features: ["Play-based learning", "Motor skills development", "Early literacy", "Social skills"],
    image: "/images/grade_preprimary.png",
  },
  {
    level: "Primary School",
    grades: "Grade 1 - Grade 5",
    ages: "6-10 years",
    description:
      "Building strong academic foundations while encouraging curiosity and critical thinking through hands-on experiences.",
    features: ["Core subjects mastery", "Project-based learning", "STEM integration", "Creative arts"],
    image: "/images/grade_primary.png",
  },
  {
    level: "Middle School",
    grades: "Grade 6 - Grade 8",
    ages: "11-13 years",
    description:
      "Preparing students for advanced learning with a balanced curriculum that develops analytical and research skills.",
    features: ["Subject specialization", "Research projects", "Leadership programs", "Sports excellence"],
    image: "/images/grade_middle.png",
  },
  {
    level: "High School",
    grades: "Grade 9 - Grade 12",
    ages: "14-17 years",
    description:
      "Rigorous academic preparation for higher education with career guidance and real-world skill development.",
    features: ["University preparation", "Career counseling", "Advanced courses", "Internship opportunities"],
    image: "/images/grade_high.png",
  },
];

const curriculumFeatures = [
  {
    icon: Brain,
    title: "Cognitive Development",
    description:
      "Pearson curriculum focuses on developing critical thinking and problem-solving skills that open children's minds to new possibilities.",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description:
      "Emphasis on hands-on activities and real-world applications that make learning meaningful and memorable.",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description:
      "Adaptive learning paths that cater to each student's unique pace and learning style for optimal growth.",
  },
  {
    icon: Users,
    title: "Collaborative Skills",
    description:
      "Group projects and peer learning activities that develop teamwork and communication abilities.",
  },
];

const teachingMethods = [
  {
    title: "Inquiry-Based Learning",
    description:
      "Students are encouraged to ask questions, explore, and discover answers through guided investigation.",
  },
  {
    title: "Project-Based Learning",
    description:
      "Real-world projects that integrate multiple subjects and develop practical problem-solving skills.",
  },
  {
    title: "Technology Integration",
    description:
      "Smart classrooms with interactive tools that enhance learning and prepare students for the digital age.",
  },
  {
    title: "Differentiated Instruction",
    description:
      "Teaching strategies adapted to meet diverse learning needs and ensure every student succeeds.",
  },
  {
    title: "Experiential Learning",
    description:
      "Field trips, lab experiments, and hands-on activities that bring concepts to life.",
  },
  {
    title: "Formative Assessment",
    description:
      "Continuous feedback and assessment to track progress and address learning gaps promptly.",
  },
];

const academicCalendar = [
  { term: "Term 1", period: "August - December", weeks: "18 weeks", exams: "Mid-term: October | Final: December" },
  { term: "Term 2", period: "January - April", weeks: "16 weeks", exams: "Mid-term: February | Final: April" },
  { term: "Term 3", period: "May - July", weeks: "10 weeks", exams: "Final: July" },
];

const keyDates = [
  { date: "August 1", event: "Academic Year Begins" },
  { date: "October 15-20", event: "Term 1 Mid-term Exams" },
  { date: "December 1-10", event: "Term 1 Final Exams" },
  { date: "December 15 - Jan 5", event: "Winter Break" },
  { date: "February 20-25", event: "Term 2 Mid-term Exams" },
  { date: "April 10-20", event: "Term 2 Final Exams" },
  { date: "April 21 - May 5", event: "Spring Break" },
  { date: "July 1-10", event: "Term 3 Final Exams" },
  { date: "July 15", event: "Academic Year Ends" },
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen size={18} />
                  <span>Academic Excellence</span>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  <StaggeredText text="A Curriculum That Opens Young Minds" highlightWords={["Young", "Minds"]} />
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Powered by Pearson Edexcel's internationally recognized curriculum, we provide a
                  practical, hands-on education that nurtures curiosity and builds lifelong learners.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="rounded-full gap-2">
                    Explore Curriculum
                    <ArrowRight size={16} />
                  </Button>
                  <div className="bg-white/95 backdrop-blur-sm py-2 px-6 rounded-full shadow-sm border border-border/50">
                    <img 
                      src="https://logo.clearbit.com/pearson.com" 
                      alt="Pearson Edexcel Logo" 
                      className="h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-border/50">
                  <img
                    src="/images/academics_hero.png"
                    alt="Students engaged in a vibrant classroom"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Grade Levels
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
                Education for Every Stage
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
                We provide a continuous, comprehensive learning journey tailored to each developmental stage of your child's life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {gradeLevels.map((level) => (
                <div
                  key={level.level}
                  className="group rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={level.image} 
                      alt={level.level} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{level.level}</h3>
                        <p className="text-white/90 font-medium">{level.grades}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                        <GraduationCap size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4 inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Ages {level.ages}
                    </div>
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-medium bg-primary/5 text-primary border border-primary/10 px-3 py-1.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pearson Curriculum */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/curriculum_hands_on.png"
                    alt="Hands-on learning experience"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-8 -right-8 md:-right-12 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[240px] hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-foreground">100%</h4>
                      <p className="text-sm text-muted-foreground font-medium">Hands-on Learning</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Brain size={16} />
                  <span>Our Curriculum</span>
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Learning That Makes a Difference
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We have adopted the globally acclaimed Pearson curriculum because it
                  transforms education from rote memorization to practical understanding.
                  This approach opens children's minds by connecting classroom learning to
                  real-world applications.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {curriculumFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-5 rounded-2xl bg-background/50 border border-border/50 hover:bg-card hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="text-primary" size={20} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button size="lg" className="rounded-full gap-2 shadow-lg hover:shadow-primary/25 transition-all">
                    Download Curriculum Guide
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-primary/5 -z-20"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-secondary/10 to-transparent -z-10 blur-3xl rounded-full"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border/50 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                <Target size={16} className="text-primary" />
                <span>Teaching Methodology</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                How We Inspire Minds
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our innovative teaching methods ensure that every child is engaged,
                challenged, and inspired to reach their full potential in a supportive environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {teachingMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="group p-8 rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <CheckCircle className="text-primary group-hover:text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Academic Calendar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                2024-2025 School Year
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Terms Overview */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Calendar className="text-primary" size={24} />
                  Term Structure
                </h3>
                <div className="space-y-4">
                  {academicCalendar.map((term) => (
                    <div
                      key={term.term}
                      className="p-6 rounded-xl bg-card border border-border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">{term.term}</h4>
                        <span className="text-sm text-primary font-medium">{term.weeks}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">{term.period}</p>
                      <p className="text-sm text-muted-foreground">{term.exams}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Dates */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="text-primary" size={24} />
                  Important Dates
                </h3>
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  {keyDates.map((item, index) => (
                    <div
                      key={item.event}
                      className={`flex items-center gap-4 p-4 ${
                        index !== keyDates.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <div className="w-24 flex-shrink-0">
                        <span className="text-sm font-medium text-primary">{item.date}</span>
                      </div>
                      <span className="text-foreground">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="gap-2">
                Download Full Calendar
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Give Your Child the Best Education?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Schedule a campus visit to see our classrooms in action and learn more about
              our academic programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Academics;
