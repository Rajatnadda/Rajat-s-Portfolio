import React, { useState, useRef, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from "framer-motion"

import image1 from "../assets/11.png";
import image2 from "../assets/22.png";
import image3 from "../assets/55.png";
import image7 from "../assets/77.png";
import image8 from "../assets/88.png";
import image9 from "../assets/99.png";
import image10 from "../assets/Assignment.png";

const carouselItems = [
  {
    id: 1,
    title: "Portfolio Assignment Project",
    subtitle: "React + Tailwind",
    image: image1,
    liveUrl: "http://ivan-stark-portfolio.vercel.app",
  },
  {
   id:2,
    title: "Portfolio Assignment Project",
    subtitle: "Next.js + Tailwind",
    image: image10,
    liveUrl: "https://grow-therapy-assignment-ivory.vercel.app/",
  },
  {
    id: 3,
    title: "Micgram",
    subtitle: "Social Media App (React)",
    image: image2,
    liveUrl: "https://micgram.netlify.app",
  },
  {
    id: 4,
    title: "Job Links Project",
    subtitle: "Full Stack MERN",
    image: image3,
    liveUrl: "https://job-links.onrender.com",
  },
  {
    id: 5,
    title: "Spotify Home Page",
    subtitle: "Clone UI (React + Tailwind)",
    image: image7,
    liveUrl: "https://home-page-clone-spotify.netlify.app/",
  },
   {
    id: 6,
    title: "To Do App",
    subtitle: "TO Do App (React + Tailwind)",
    image: image8,
    liveUrl: "https://to-do-app-mu-peach.vercel.app/",
  },
  {
    id: 7,
    title: "Assignement Project(Assignments Assign to Students)",
    subtitle: "Assignments To Students (React + Tailwind)",
    image: image9,
    liveUrl: "https://joineazy-assignment.vercel.app/",
  },
];

function Projects() {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? 300 : 420; 
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-violet-900 via-black to-black py-20 px-4 sm:px-8 text-white">
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-16 text-center tracking-wide uppercase bg-gradient-to-r from-yellow-400 to-cyan-400 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => handleScroll("prev")}
          className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 hover:bg-cyan-400/50 hover:scale-110 focus:outline-none ring-1 ring-white/10 hover:ring-cyan-400"
          aria-label="Scroll Left"
        >
          &#x2190;
        </button>

        <motion.div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-4 py-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {carouselItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative w-[280px] sm:w-[380px] h-[220px] sm:h-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gray-900/60 border-2 border-transparent group-hover:border-cyan-400/70 transition-all duration-300 rounded-2xl z-10" />
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-10" loading="lazy" decoding="async" />
              <div className="relative h-full flex flex-col justify-end p-6 space-y-4 z-20">
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-yellow-300">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 text-cyan-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm font-semibold">
                  View Live Demo <FiArrowUpRight />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <button
          onClick={() => handleScroll("next")}
          className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 hover:bg-cyan-400/50 hover:scale-110 focus:outline-none ring-1 ring-white/10 hover:ring-cyan-400"
          aria-label="Scroll Right"
        >
          &#x2192; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
}

export default Projects;
