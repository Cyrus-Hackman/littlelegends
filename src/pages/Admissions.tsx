import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { 
  ClipboardList, 
  FileText, 
  UserCheck, 
  CalendarCheck, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const inquirySchema = z.object({
  parentName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  childName: z.string().trim().min(2, "Child's name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  gradeLevel: z.string().min(1, "Please select a grade level"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional()
});

type InquiryForm = z.infer<typeof inquirySchema>;

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InquiryForm>({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    gradeLevel: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Inquiry",
      description: "Fill out the online inquiry form or visit our campus to express your interest.",
      icon: ClipboardList
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents including birth certificate, previous school records, and photos.",
      icon: FileText
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Your child will participate in an age-appropriate assessment and family interview.",
      icon: UserCheck
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive admission decision within 5-7 business days after assessment.",
      icon: CalendarCheck
    }
  ];

  const requirements = [
    {
      level: "Pre-Nursery (2-3 years)",
      documents: [
        "Birth Certificate (original + copy)",
        "4 Passport-size photographs",
        "Immunization records",
        "Parent/Guardian ID copies"
      ]
    },
    {
      level: "Nursery & Kindergarten (3-5 years)",
      documents: [
        "Birth Certificate (original + copy)",
        "4 Passport-size photographs",
        "Immunization records",
        "Previous school report (if applicable)",
        "Parent/Guardian ID copies"
      ]
    },
    {
      level: "Primary School (6-11 years)",
      documents: [
        "Birth Certificate (original + copy)",
        "4 Passport-size photographs",
        "Previous school report cards (last 2 years)",
        "Transfer certificate from previous school",
        "Immunization records",
        "Parent/Guardian ID copies"
      ]
    }
  ];

  const handleInputChange = (field: keyof InquiryForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = inquirySchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof InquiryForm, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof InquiryForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our admissions team will contact you within 24-48 hours.",
    });

    setFormData({
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      gradeLevel: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join the Little Legends Family
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Begin your child's journey of discovery, growth, and excellence with us
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined admission process ensures a smooth experience for families
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Documents required for admission based on grade level
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{req.level}</h3>
                  <ul className="space-y-3">
                    {req.documents.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Submit an Inquiry
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our admissions team will get back to you within 24-48 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      placeholder="Enter your name"
                      className={errors.parentName ? "border-destructive" : ""}
                    />
                    {errors.parentName && (
                      <p className="text-sm text-destructive">{errors.parentName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter phone number"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child's Name *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => handleInputChange("childName", e.target.value)}
                      placeholder="Enter child's name"
                      className={errors.childName ? "border-destructive" : ""}
                    />
                    {errors.childName && (
                      <p className="text-sm text-destructive">{errors.childName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gradeLevel">Grade Level Applying For *</Label>
                  <Select
                    value={formData.gradeLevel}
                    onValueChange={(value) => handleInputChange("gradeLevel", value)}
                  >
                    <SelectTrigger className={errors.gradeLevel ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pre-nursery">Pre-Nursery (2-3 years)</SelectItem>
                      <SelectItem value="nursery">Nursery (3-4 years)</SelectItem>
                      <SelectItem value="kindergarten">Kindergarten (4-5 years)</SelectItem>
                      <SelectItem value="grade-1">Grade 1</SelectItem>
                      <SelectItem value="grade-2">Grade 2</SelectItem>
                      <SelectItem value="grade-3">Grade 3</SelectItem>
                      <SelectItem value="grade-4">Grade 4</SelectItem>
                      <SelectItem value="grade-5">Grade 5</SelectItem>
                      <SelectItem value="grade-6">Grade 6</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gradeLevel && (
                    <p className="text-sm text-destructive">{errors.gradeLevel}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Any questions or additional information..."
                    rows={4}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <Card className="bg-primary text-primary-foreground border-none h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Admissions</h3>
                  <p className="opacity-90 mb-8">
                    Have questions about admissions? Our team is here to help you through every step of the process.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="opacity-90">+1 (555) 123-4567</p>
                        <p className="opacity-90">+1 (555) 123-4568</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="opacity-90">admissions@littlelegends.edu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Visit Us</h4>
                        <p className="opacity-90">123 Education Lane</p>
                        <p className="opacity-90">Learning City, LC 12345</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <h4 className="font-semibold mb-3">Office Hours</h4>
                    <p className="opacity-90">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    <p className="opacity-90">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
