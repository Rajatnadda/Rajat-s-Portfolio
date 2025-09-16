import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume, FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Contactus = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => setStatusMessage(""), 5000); // Hide after 5 seconds
        },
        (error) => {
          console.error("Error:", error.text);
          setStatusMessage("❌ Failed to send message. Please try again.");
          setIsSubmitting(false);
          setTimeout(() => setStatusMessage(""), 5000); // Hide after 5 seconds
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contactus"
      className="bg-gradient-to-b from-black via-gray-900 to-violet-900 text-white py-20 px-4 sm:px-8"
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-widest text-yellow-400 uppercase drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            I’d love to connect! Feel free to reach out for collaboration,
            project ideas, or any opportunities.
          </p>

          <div className="space-y-6 text-gray-200">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <ImLocation2 className="text-2xl text-yellow-400" />
              <div>
                <span className="font-semibold block">Address:</span>
                Bilaspur (H.P), India
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <MdEmail className="text-2xl text-yellow-400" />
              <div>
                <span className="font-semibold block">Email:</span>
                <a
                  href="mailto:Rjt.kumar345@gmail.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Rjt.kumar345@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaPhoneVolume className="text-2xl text-yellow-400" />
              <div>
                <span className="font-semibold block">Phone No.:</span>
                <a
                  href="tel:8219652044"
                  className="hover:text-yellow-400 transition-colors"
                >
                  +91 8219652044
                </a>
              </div>
            </div>
             <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaLinkedin  className="text-2xl text-yellow-400" />
              <div>
                <span className="font-semibold block">Linkdin:</span>
                <a
                  href="https://www.linkedin.com/in/rjt345"
                  className="hover:text-yellow-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 www.linkedin.com/in/rjt345
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-700">
            <p className="text-lg font-semibold mb-4">Follow Me</p>
            <div className="flex gap-6 justify-center lg:justify-start text-3xl">
              <a
                href="https://github.com/Rajatnadda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/Rajatnadda18711"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-transform hover:scale-110"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.instagram.com/rajat_rnadda01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-transform hover:scale-110"
              >
                <FaSquareInstagram />
              </a>
              <a
                href="https://www.facebook.com/rajat.nadda.77"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-transform hover:scale-110"
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 p-8 sm:p-12 rounded-3xl shadow-2xl"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-extrabold mb-8 text-yellow-400 text-center">
            Send a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+91 1234567890"
              className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300"
            />
            <textarea
              name="comment"
              rows="4"
              placeholder="Enter your comments or questions here"
              required
              className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none resize-none transition-all duration-300"
            ></textarea>
            {statusMessage && (
              <p
                className={`text-center text-sm font-medium ${
                  statusMessage.includes("Failed")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {statusMessage}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "🚀 Submit"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contactus;
