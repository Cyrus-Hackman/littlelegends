import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StaggeredText } from "@/components/animations/StaggeredText";

// Placeholder data for video categories
const videoCategories = [
  {
    title: "School Events & Performances",
    description: "Highlights from our annual concerts, plays, and talent shows.",
    videos: [
      { id: "v1", title: "Annual Spring Concert 2025", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" },
      { id: "v2", title: "School Play: Peter Pan", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1507676184212-d0330a15673c?q=80&w=2069&auto=format&fit=crop" },
      { id: "v3", title: "Cultural Heritage Week", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1523580494112-071d16940363?q=80&w=2070&auto=format&fit=crop" },
    ]
  },
  {
    title: "Academic Highlights",
    description: "Glimpses into our classrooms and specialized learning programs.",
    videos: [
      { id: "v4", title: "Science Fair Projects 2025", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" },
      { id: "v5", title: "Coding & Robotics Club", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop" },
      { id: "v6", title: "Art Exhibition Walkthrough", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop" },
    ]
  },
  {
    title: "Sports & Athletics",
    description: "Action-packed moments from our sports teams and field days.",
    videos: [
      { id: "v7", title: "Varsity Soccer Championship Game", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1518605368461-1ee125225f27?q=80&w=2070&auto=format&fit=crop" },
      { id: "v8", title: "Annual Sports Day Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" },
      { id: "v9", title: "Basketball Team Practice", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" },
    ]
  }
];

export default function VideoGallery() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 bg-background">
        {/* Hero Section */}
      <section className="bg-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-4 text-foreground">
              <StaggeredText text="Video Gallery" highlightWords={["Gallery"]} />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the vibrant life at Little Legends School. From academic fachievements to spectacular performances and athletic triumphs, see our students shine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Play size={16} />
              Featured Video
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">Welcome to Little Legends</h2>
            <p className="text-muted-foreground max-w-2xl">
              Take a virtual tour of our state-of-the-art campus and hear from our principal about what makes Little Legends School a unique place for your child to grow and learn.
            </p>

            {/* Featured Video Player Container */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-muted/20 relative group">
                <iframe 
                  className="w-full h-full absolute top-0 left-0"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Featured Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teacher Highlights Video */}
      <section className="py-20 px-4 bg-muted/10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
              <Play size={16} />
              Teacher Spotlight
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">Teacher Spotlights</h2>
            <p className="text-muted-foreground max-w-2xl">
              Listen to our passionate educators share their vision, dedication, and what they love most about teaching.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto pt-8">
              {/* Video 1: Goals */}
              <div className="w-full aspect-[480/848] rounded-3xl overflow-hidden shadow-2xl border-4 border-muted/20 relative group bg-black">
                <video 
                  className="w-full h-full object-contain absolute top-0 left-0"
                  controls
                  playsInline
                  src="https://ik.imagekit.io/cyrus/AQNPFkEUeIgIfsRHwFD8Fx3nAMhDVxI39xThx5guElb-jEC_mPLdM2khWeDvLzVXRS5IHZu9holGpkMFgPoyaGQ9kZRQA1duGmi_EN0.mp4"
                  title="Teachers sharing what they love most "
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video 2: What they love */}
              <div className="w-full aspect-[480/848] rounded-3xl overflow-hidden shadow-2xl border-4 border-muted/20 relative group bg-black">
                <video 
                  className="w-full h-full object-contain absolute top-0 left-0"
                  controls
                  playsInline
                  src="https://ik.imagekit.io/cyrus/3b800580cfc94a8b96ace67515eccac8.mp4"
                  title="Teachers sharing their goals"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Content Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Play size={16} />
              Student Content
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">Made by Our Students</h2>
            <p className="text-muted-foreground max-w-2xl">
              Showcasing the creativity and curiosity of our students — from school introductions to interactive learning sessions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto pt-8">
              {/* Video 1: Summer School Introduction */}
              <div className="flex flex-col gap-4 items-center">
                <div className="w-full aspect-[480/848] rounded-3xl overflow-hidden shadow-2xl border-4 border-muted/20 relative group bg-black">
                  <video
                    className="w-full h-full object-contain absolute top-0 left-0"
                    controls
                    playsInline
                    src="https://ik.imagekit.io/cyrus/SnapInsta.to_AQMAWBXNzd7fjfwFTlTkRlyvFAh-VR1ikU97D7DEOfPnqOVQJXhkJL0dsd-lNSx0Kaaty2eR6QVpwJLvytWmAiR98dRQt8qplwvZC7Y.mp4?updatedAt=1771682812778"
                    title="Summer School Introduction by Students"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg">Summer School Introduction</h4>
                  <p className="text-muted-foreground text-sm mt-1">A video introduction of summer school, created by our students.</p>
                </div>
              </div>

              {/* Video 2: Maths Q&A */}
              <div className="flex flex-col gap-4 items-center">
                <div className="w-full aspect-[480/848] rounded-3xl overflow-hidden shadow-2xl border-4 border-muted/20 relative group bg-black">
                  <video
                    className="w-full h-full object-contain absolute top-0 left-0"
                    controls
                    playsInline
                    src="https://ik.imagekit.io/cyrus/SnapInsta.to_AQNAVYdBo_tOcELlLRA5GMnMTLnN9LnvQPZ6NqTuRaaENbYpn4jwUS6zQGMekE3MqnmSnowHQ9NU6YtF_-LM9P17xjqLrCec4O6CH2A.mp4"
                    title="Maths Q&A Session"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg">Maths Q&A Session</h4>
                  <p className="text-muted-foreground text-sm mt-1">Students are asked maths questions in this fun and engaging session.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categorized Video Galleries */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl space-y-24">
          {videoCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-10"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-3xl font-bold tracking-tight">{category.title}</h3>
                  <p className="text-muted-foreground text-lg">{category.description}</p>
                </div>
                <div className="shrink-0">
                  <Button variant="outline" className="group">
                    View All {category.title.split(" ")[0]}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.videos.map((video) => (
                  <div key={video.id} className="group flex flex-col gap-4">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                      {/* We use a thumbnail with a play button overlay for better performance than loading many iframes at once */}
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-out shadow-lg shadow-primary/30 ml-2">
                          <Play size={32} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Want to see more of Little Legends in action?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Follow our official YouTube channel to never miss an update, or schedule a campus tour to see it all in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Subscribe on YouTube
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      </main>
    </div>
  );
}
