import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { MdWork } from "react-icons/md";
import  Resume from  "../assets/Rajat's Resume.pdf"
const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-purple-900 via-black to-violet-900 text-white py-20 px-6 sm:px-12 lg:px-20"
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-20">
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I’m a passionate{" "}
            <span className="text-cyan-300 font-semibold">
              Frontend Developer
            </span>{" "}
            skilled in creating modern, responsive, and interactive web
            applications. Here are some of the technologies I work with:
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 justify-items-center"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col cursor-pointer items-center space-y-2 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaHtml5 className="text-6xl text-orange-500" />
            <p className="text-lg font-semibold group-hover:text-yellow-300">
              HTML
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col cursor-pointer items-center space-y-2 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCss3Alt className="text-6xl text-blue-500" />
            <p className="text-lg font-semibold group-hover:text-yellow-300">
              CSS
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col cursor-pointer items-center space-y-2 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiJavascript className="text-6xl text-yellow-400" />
            <p className="text-lg font-semibold group-hover:text-yellow-300">
              JavaScript
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col cursor-pointer items-center space-y-2 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <FaReact className="text-6xl text-cyan-400" />
            </motion.div>
            <p className="text-lg font-semibold group-hover:text-yellow-300">
              React
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col  cursor-pointer items-center space-y-2 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiTailwindcss className="text-6xl text-sky-400" />
            <p className="text-lg font-semibold group-hover:text-yellow-300">
              Tailwind
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col cursor-pointer items-center space-y-2 group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiNextdotjs className="text-6xl text-gray-300" />
            <p className="text-lg font-semibold group-hover:text-yellow-300">
              Next.js
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 p-10 rounded-2xl shadow-lg max-w-3xl mx-auto text-left space-y-5"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-yellow-400 flex items-center gap-3">
            <MdWork className="text-4xl text-cyan-400" />
            Experience
          </h3>
          <div className="space-y-3">
            <h4 className="text-2xl font-semibold text-white">
              Intern at Callsmaster Services LLP
            </h4>
            <p className="text-gray-300 text-sm font-medium">
              From <span className="text-yellow-300">March 2024</span> – Present
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-white">Address:</span> A-54,
              Block H-3, Keshopur Industrial Area, Vikaspuri, New Delhi, Delhi,
              110018
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              At Callsmaster Services LLP, I am gaining hands-on experience in{" "}
              <span className="text-cyan-300">frontend development</span>,
              focusing on building responsive UIs, integrating modern
              frameworks, and improving real-world project workflows.
            </p>
          </div>
        </motion.div>
        <motion.div className="text-center space-y-6" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-yellow-400">📄 My Resume</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href={Resume}
              download="Rajat_Kumar_Resume.pdf"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-300 font-bold rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#22d3ee", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
