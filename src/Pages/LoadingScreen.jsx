import React from "react";
import { motion } from "framer-motion";

const letters = "Rajat Kumar".split(""); // Your name

export default function LoadingScreen({ onFinish }) {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.4, ease: "easeOut" }}
          className="text-5xl font-bold"
        >
          {letter}
        </motion.span>
      ))}

      {/* Trigger finish after last letter animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: letters.length * 0.2 + 0.8, duration: 0.6 }}
        onAnimationComplete={onFinish}
      />
    </div>
  );
}
