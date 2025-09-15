import React, { useState } from "react";
import image from "../assets/Rajat.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import MobileSidebar from "../Components/MobileSidebar";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contactus" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 bg-gradient-to-b from-gray-900 via-black to-purple-900 text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-end md:justify-between items-center p-6">
          <h1 className="hidden md:block text-3xl font-extrabold tracking-wider text-white hover:text-yellow-400 transition-all cursor-pointer">
            <span className="text-yellow-400"></span>
          </h1>
          <div className="hidden md:flex gap-8 text-base font-medium">
            {links.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="relative group cursor-pointer transition-all"
              >
                <span className="hover:text-yellow-300 transition-colors">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-3xl cursor-pointer hover:text-yellow-300 transition-all"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 z-10 max-w-7xl mx-auto mt-20 md:mt-32 text-center md:text-left">
        <motion.div
          variants={itemVariants}
          className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden shadow-2xl ring-4 ring-cyan-400/40 bg-gray-800"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={image}
            alt="Rajat Kumar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-blue-400/20 to-purple-500/20 blur-xl opacity-40"></div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
              Rajat Kumar
            </span>
          </h1>
          <p className="text-gray-300 sm:text-lg md:text-xl max-w-xl">
            I build modern, responsive, and user-friendly web applications. I
            specialize in{" "}
            <span className="text-cyan-400 font-semibold">
              React, JavaScript, & Tailwind CSS
            </span>
            , turning complex ideas into elegant solutions.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">
            I am{" "}
            <TypeAnimation
              sequence={[
                "a Frontend Developer",
                2000,
                "an MCA Graduate",
                2000,
                "a Responsive Design Advocate",
                2000,
               
              ]}
              wrapper="span"
              speed={50}
              className="text-cyan-400 font-semibold"
              repeat={Infinity}
            />
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <motion.a
              href="#contactus"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              💼 Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-300 font-bold rounded-lg text-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#22d3ee",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              🚀 View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob-2"></div>
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-blob-3"></div>
      <MobileSidebar isOpen={menuOpen} setIsOpen={setMenuOpen} links={links} />
    </motion.section>
  );
};

export default Hero;
