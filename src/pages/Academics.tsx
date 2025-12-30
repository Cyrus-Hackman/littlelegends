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

const gradeLevels = [
  {
    level: "Pre-Primary",
    grades: "Nursery - KG2",
    ages: "3-5 years",
    description:
      "A nurturing environment where young learners develop foundational skills through play-based learning and exploration.",
    features: ["Play-based learning", "Motor skills development", "Early literacy", "Social skills"],
  },
  {
    level: "Primary School",
    grades: "Grade 1 - Grade 5",
    ages: "6-10 years",
    description:
      "Building strong academic foundations while encouraging curiosity and critical thinking through hands-on experiences.",
    features: ["Core subjects mastery", "Project-based learning", "STEM integration", "Creative arts"],
  },
  {
    level: "Middle School",
    grades: "Grade 6 - Grade 8",
    ages: "11-13 years",
    description:
      "Preparing students for advanced learning with a balanced curriculum that develops analytical and research skills.",
    features: ["Subject specialization", "Research projects", "Leadership programs", "Sports excellence"],
  },
  {
    level: "High School",
    grades: "Grade 9 - Grade 12",
    ages: "14-17 years",
    description:
      "Rigorous academic preparation for higher education with career guidance and real-world skill development.",
    features: ["University preparation", "Career counseling", "Advanced courses", "Internship opportunities"],
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
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-accent via-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen size={18} />
                <span>Academic Excellence</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Curriculum That Opens <span className="text-primary">Young Minds</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Powered by Pearson's internationally recognized curriculum, we provide a
                practical, hands-on education that nurtures curiosity and builds lifelong learners.
              </p>
            </div>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Grade Levels
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Education for Every Stage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {gradeLevels.map((level) => (
                <div
                  key={level.level}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{level.level}</h3>
                      <p className="text-primary font-medium">{level.grades}</p>
                      <p className="text-sm text-muted-foreground">Ages {level.ages}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{level.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {level.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pearson Curriculum */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Curriculum
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Pearson Curriculum: Learning That Makes a Difference
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We have adopted the globally acclaimed Pearson curriculum because it
                  transforms education from rote memorization to practical understanding.
                  This approach opens children's minds by connecting classroom learning to
                  real-world applications.
                </p>
                <p className="text-muted-foreground mb-8">
                  Pearson's research-based methodology ensures that students don't just
                  learn facts—they develop critical thinking skills, creativity, and the
                  ability to apply knowledge in meaningful ways.
                </p>
                <Button className="gap-2">
                  Download Curriculum Guide
                  <ArrowRight size={16} />
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {curriculumFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Teaching Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                How We Teach
              </h2>
              <p className="text-muted-foreground">
                Our innovative teaching methods ensure that every child is engaged,
                challenged, and inspired to reach their full potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachingMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
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
      <Footer />
    </div>
  );
};

export default Academics;
