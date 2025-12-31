import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Music, Palette, Trophy, Users, Star, Heart, Lightbulb, Target } from "lucide-react";

const StudentLife = () => {
  const clubs = [
    {
      name: "Science Club",
      description: "Explore experiments, inventions, and the wonders of science through hands-on projects.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
    },
    {
      name: "Art & Craft Club",
      description: "Express creativity through painting, sculpture, and various art forms.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop"
    },
    {
      name: "Music & Dance",
      description: "Discover rhythm, melody, and movement through our vibrant performing arts program.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop"
    },
    {
      name: "Debate Club",
      description: "Build confidence and critical thinking through public speaking and debates.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
    }
  ];

  const sports = [
    {
      name: "Football",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
      description: "Team spirit and athletic excellence on the field"
    },
    {
      name: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      description: "Developing coordination, teamwork, and competitive spirit"
    },
    {
      name: "Swimming",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop",
      description: "Building strength and water safety skills"
    },
    {
      name: "Athletics",
      image: "https://images.unsplash.com/photo-1461896836934- voices-running?w=400&h=300&fit=crop",
      description: "Track and field events for all skill levels"
    }
  ];

  const artsPrograms = [
    {
      title: "Visual Arts",
      description: "From drawing to digital art, students explore various mediums to express their creativity and develop artistic skills.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop"
    },
    {
      title: "Performing Arts",
      description: "Theater, dance, and music performances give students the stage to shine and build confidence.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
    },
    {
      title: "Cultural Celebrations",
      description: "Annual events celebrating diverse cultures through art, music, food, and traditional performances.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop"
    }
  ];

  const leadershipOpportunities = [
    {
      title: "Student Council",
      description: "Elected representatives who voice student opinions and organize school events.",
      icon: Star
    },
    {
      title: "Peer Mentors",
      description: "Senior students guiding younger ones through their school journey.",
      icon: Heart
    },
    {
      title: "Club Presidents",
      description: "Leading various clubs and managing activities and events.",
      icon: Target
    },
    {
      title: "Sports Captains",
      description: "Team leaders who inspire and coordinate sports activities.",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Student Life at Little Legends
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Where every child discovers their passion, builds friendships, and creates lasting memories
          </p>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Clubs & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse range of clubs encourages students to explore their interests and develop new skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubs.map((club, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={club.image} 
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <club.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{club.name}</h3>
                  <p className="text-muted-foreground text-sm">{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sports & Athletics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building healthy bodies and team spirit through competitive and recreational sports
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <div key={index} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={sport.image} 
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{sport.name}</h3>
                  <p className="text-sm opacity-90">{sport.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arts Programs Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Arts & Culture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nurturing creativity and self-expression through visual and performing arts
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {artsPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Student Leadership
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Empowering young leaders to take initiative and make a positive impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipOpportunities.map((opportunity, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground hover:bg-white/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <opportunity.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-sm opacity-90">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Life at Little Legends
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of joy, learning, and growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop"
            ].map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-xl group">
                <img 
                  src={image} 
                  alt={`School life ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join the Little Legends Family?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Give your child the opportunity to explore, learn, and grow in a nurturing environment
          </p>
          <Button size="lg" className="text-lg px-8">
            Apply for Admission
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentLife;
