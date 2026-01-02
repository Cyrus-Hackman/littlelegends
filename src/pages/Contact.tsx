import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Education Lane", "Learning City, LC 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@littlelegends.edu", "admissions@littlelegends.edu"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:00 AM - 4:00 PM", "Sat: 9:00 AM - 12:00 PM"],
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-secondary to-accent overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Get In Touch
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Contact Us
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Have questions? We'd love to hear from you. Send us a message 
                  and we'll respond as soon as possible.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <FadeIn>
                <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (234) 567-890"
                            value={formState.phone}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium text-foreground">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Write your message here..."
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className="min-h-[150px] resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-12 text-base">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </FadeIn>

              {/* Contact Information */}
              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <FadeIn key={info.title} delay={0.15 + index * 0.05}>
                      <div className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Quick Contact CTA */}
                <FadeIn delay={0.4}>
                  <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                    <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      Call us directly for urgent inquiries about admissions or school programs.
                    </p>
                    <a href="tel:+1234567890">
                      <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now: +1 (234) 567-890
                      </Button>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Location
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Find Us on the Map
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're conveniently located in the heart of Learning City, 
                  easily accessible by public transportation and with ample parking.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <div className="aspect-[16/9] md:aspect-[21/9]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256349542!2d-73.98823492404069!3d40.75797623440235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699891234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                    className="absolute inset-0"
                  />
                </div>

                {/* Map Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm">
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Little Legends School</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          123 Education Lane, Learning City, LC 12345
                        </p>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary font-medium hover:underline"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="bg-gradient-to-br from-accent via-secondary to-primary/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Have More Questions?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Check out our frequently asked questions or schedule a campus tour 
                  to learn more about Little Legends School.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-base">
                    Schedule a Tour
                  </Button>
                  <Button variant="outline" size="lg" className="text-base">
                    View FAQs
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
