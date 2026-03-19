import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://ik.imagekit.io/cyrus/WhatsApp%20Image%202026-03-02%20at%2010.16.55.jpeg",
    alt: "Students in classroom",
    category: "Academics"
  },
  {
    src: "https://ik.imagekit.io/cyrus/WhatsApp%20Image%202026-03-02%20at%2012.20.45.jpeg?updatedAt=1772454133106",
    alt: "Science Practical session",
    category: "Academics"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.07.23.jpeg?updatedAt=1773901025416",
    alt: "Independence Day Celebration",
    category: "Events"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.08.51%20(1).jpeg?updatedAt=1773901025724",
    alt: "Independence Day Celebration",
    category: "Events"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.06.26%20(1).jpeg?updatedAt=1773901025354",
    alt: "Independence Day Celebration",
    category: "Events"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.06.24%20(2).jpeg?updatedAt=1773901025432",
    alt: "Independence Day Celebration",
    category: "Events"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.06.24.jpeg?updatedAt=1773901025393",
    alt: "Independence Day Celebration",
    category: "Events"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.06.25.jpeg?updatedAt=1773901025410",
    alt: "Independence Day Celebration",
    category: "Events"
  },
  {
    src: "https://ik.imagekit.io/cyrus/independence%20LLS/WhatsApp%20Image%202026-03-06%20at%2021.08.49.jpeg?updatedAt=1773901025388",
    alt: "Independence Day Celebration",
    category: "Events"
  }
];

const categories = ["All", "Academics", "Facilities", "Events"];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore memorable moments from our school events, facilities, and academic life
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </FadeIn>

        {/* Gallery Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <StaggerItem key={image.src}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium">{image.alt}</p>
                      <span className="text-white/80 text-sm">{image.category}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 rounded-xl transition-all duration-300" />
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent 
            className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none"
            onKeyDown={handleKeyDown}
          >
            {selectedImage !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-50 text-white hover:bg-white/20 h-12 w-12"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-50 text-white hover:bg-white/20 h-12 w-12"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex items-center justify-center p-12"
                  >
                    <img
                      src={filteredImages[selectedImage].src}
                      alt={filteredImages[selectedImage].alt}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Info */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-white font-medium text-lg">
                    {filteredImages[selectedImage].alt}
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedImage + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
