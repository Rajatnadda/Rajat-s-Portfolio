import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Footer = ({ scrollContainerRef }) => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const scrollToTop = () => {
    const container = scrollContainerRef?.current || window;
    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-violet-900 via-black to-black text-white py-6 px-4 sm:px-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        <p className="text-sm text-gray-400 order-2 sm:order-1">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-yellow-400">Rajat'sPortfy</span> — Crafted
          with Care By Rajat.
        </p>
        <p className="text-xs text-gray-500 order-3 sm:order-2">
          Built with React & Tailwind CSS
        </p>
        <motion.button
          onClick={scrollToTop}
          className="bg-cyan-400/20 cursor-pointer text-cyan-300 p-3 rounded-full ring-1 ring-cyan-400/30 order-1 sm:order-3"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.3)" }}
          whileTap={{ scale: 0.8 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </motion.footer>
  );
};
export default Footer;  
