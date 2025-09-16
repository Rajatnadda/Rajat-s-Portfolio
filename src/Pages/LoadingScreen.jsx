import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const name = "Rajat";
  const letters = Array.from(name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 },
    },
  };

  const letterVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 180 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-200" />
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.h1
        className="flex overflow-hidden text-5xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg tracking-widest"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            whileHover={{
              scale: 1.3,
              y: -10,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="mx-1"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
