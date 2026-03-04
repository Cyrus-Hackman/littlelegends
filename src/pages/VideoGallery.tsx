import { useEffect } from "react";
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
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process existing embeds if the script is already loaded
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
            <div className="w-full flex justify-center relative z-10 my-4 lg:my-8">
              <div 
                className="w-full max-w-[540px]"
                dangerouslySetInnerHTML={{ 
                  __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DQ4fGR0jYNj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DQ4fGR0jYNj/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DQ4fGR0jYNj/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Little Legends School (@littlelegendssch)</a></p></div></blockquote>`
                }}
              />
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
