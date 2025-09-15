import React, { useState, useEffect } from "react";
import Home from "./Home";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./Pages/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
