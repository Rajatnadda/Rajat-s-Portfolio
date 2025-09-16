import React, { useState, useEffect } from "react";
import Home from "./Home";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./Pages/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
