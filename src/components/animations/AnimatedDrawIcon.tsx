import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedDrawIconProps {
  icon: React.ElementType;
  className?: string;
}

export function AnimatedDrawIcon({
  icon: Icon,
  className = "",
}: AnimatedDrawIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={isInView ? "animate-draw-icon" : ""}>
      <Icon className={className} />
    </div>
  );
}
