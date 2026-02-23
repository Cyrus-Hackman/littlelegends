import React from "react";
import { motion, Variants } from "framer-motion";

interface StaggeredTextProps {
  text: string | string[];
  className?: string;
  delay?: number;
  highlightWords?: string[]; // Array of words to highlight in primary color
}

export const StaggeredText = ({ 
  text, 
  className = "", 
  delay = 0,
  highlightWords = []
}: StaggeredTextProps) => {
  
  // Handle both single strings and arrays of strings
  const words = Array.isArray(text) 
    ? text.flatMap(segment => segment.split(" ")) 
    : text.split(" ");

  // Container variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i }
    })
  };

  // Individual word variants
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 50,
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px" }}
      className={className}
    >
      {words.map((word, index) => {
        // Check if the current word should be highlighted (strip punctuation for matching)
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord);
        
        return (
          <React.Fragment key={index}>
            <motion.span
              variants={child}
              className={`inline-block ${isHighlighted ? "text-primary" : ""}`}
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
};
