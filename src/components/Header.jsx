import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`shadow-sm border-b border-border sticky top-0 z-50 transition-colors duration-200 ${
        isDarkMode ? "bg-card" : "bg-white"
      }`}
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
            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button className="btn-outline">Log in</button>
            <button className="btn-secondary">Sign up</button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
              Post a Job
            </button>
          </div>

          {/* Mobile Header Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
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
                <button className="w-full btn-outline">Log in</button>
                <button className="w-full btn-secondary">Sign up</button>
                <button className="w-full btn-primary bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">Post a Job</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
