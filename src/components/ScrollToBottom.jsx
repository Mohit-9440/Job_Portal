import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollToBottom = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToBottom}
      className="fixed bottom-6 right-6 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 1 }}
    >
      <ChevronDown className="h-5 w-5" />
    </motion.button>
  );
};

export default ScrollToBottom; 