import React, { useState, useRef } from "react";
import Home from "./Home";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./Pages/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  return (
    <div className="h-screen bg-black text-white"> {/* Consistent background */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <LoadingScreen onFinish={() => setLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            ref={scrollContainerRef}
            className="h-screen overflow-y-scroll scroll-smooth"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Home scrollContainerRef={scrollContainerRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
