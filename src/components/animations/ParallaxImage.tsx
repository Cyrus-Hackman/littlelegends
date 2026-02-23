import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Higher number = faster movement relative to scroll
}

export const ParallaxImage = ({ 
  src, 
  alt, 
  className = "", 
  speed = 0.5 
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform the scroll progress (0 to 1) into a Y offset
  // Adjust the multiplier to change the intensity of the parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scaledY = useTransform(y, (value) => `calc(${value} * ${speed})`);

  const positionClass = className.includes("absolute") ? "" : "relative";

  return (
    <div ref={ref} className={`${positionClass} overflow-hidden w-full h-full ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y: scaledY }}
        className="absolute top-[-15%] left-0 w-full h-[130%] object-cover origin-center"
      />
    </div>
  );
};
