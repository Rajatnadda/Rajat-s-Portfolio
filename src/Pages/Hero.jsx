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
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
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
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-900 via-black to-purple-900 text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
     <header className="absolute top-0 left-0 right-0 z-20">
  <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sm:px-8">
    
    {/* Mobile Menu Button (Left) */}
    <button
      className="md:hidden text-3xl hover:text-yellow-300 transition-all"
      onClick={() => setMenuOpen(true)}
      aria-label="Open Menu"
    >
      <FaBars />
    </button>

    {/* Logo (optional, you can add text/logo here) */}
    <h1 className="hidden md:block text-3xl font-extrabold tracking-wider text-white hover:text-yellow-400 transition-all cursor-pointer">
      {/* Your Logo */}
    </h1>

    {/* Desktop Navigation (Right) */}
    <nav className="hidden fixed right-12 md:flex gap-6 text-base font-medium">
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="relative group transition-all"
        >
          <span className="hover:text-yellow-300">{item.name}</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
        </a>
      ))}
    </nav>
  </div>
</header>


      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl mx-auto text-center md:text-left mt-20 md:mt-0">
        {/* Image Card */}
        <motion.div
          variants={itemVariants}
          className="relative w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 ring-4 ring-cyan-400/30 hover:ring-cyan-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={image}
            alt="Rajat Kumar"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-blue-400/20 to-purple-500/20 blur-xl opacity-40 pointer-events-none rounded-2xl" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start space-y-4 sm:space-y-6 max-w-xl px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
              Rajat Kumar
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            I build modern, responsive, and user-friendly web applications. I
            specialize in{" "}
            <span className="text-cyan-400 font-semibold">
              React, JavaScript, & Tailwind CSS
            </span>
            , turning complex ideas into elegant solutions.
          </p>

          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200">
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
            <motion.a
              href="#contactus"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              💼 Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-cyan-400 text-cyan-300 font-bold rounded-lg text-center"
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

      {/* Background Blobs (scaled down for mobile) */}
      <div className="absolute top-1/3 left-1/4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob-1 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob-2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-28 sm:w-44 md:w-56 h-28 sm:h-44 md:h-56 bg-purple-500/10 rounded-full blur-3xl animate-blob-3 pointer-events-none"></div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={menuOpen} setIsOpen={setMenuOpen} links={links} />
    </motion.section>
  );
};

export default Hero;
