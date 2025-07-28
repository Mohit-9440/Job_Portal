import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`shadow-sm border-b border-border sticky top-0 z-50 transition-colors duration-200 backdrop-blur-sm w-full ${
        isDarkMode ? "bg-card/95" : "bg-white/95"
      }`}
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold cursor-pointer">
                <img src={logo} alt="JobHunt" className="h-24 w-24" />
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-purple-600 font-medium transition-colors duration-200"
            >
              For Companies
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>
            <motion.button 
              className="btn-outline"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Log in
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Sign up
            </motion.button>
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Post a Job
            </motion.button>
          </div>

          {/* Mobile Header Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#"
                className="block px-3 py-2 text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                For Companies
              </a>
              <div className="pt-4 space-y-2">
                <motion.button 
                  className="w-full btn-outline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Log in
                </motion.button>
                <motion.button 
                  className="w-full btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Sign up
                </motion.button>
                <motion.button 
                  className="w-full btn-primary bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Post a Job
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
