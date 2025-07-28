import { motion } from "framer-motion";
import { User, Search, FileText, Briefcase, Send } from "lucide-react";

const StepCard = ({ step, index }) => {
  const icons = {
    "user": User,
    "search": Search,
    "file-text": FileText,
    "briefcase": Briefcase,
  };

  const IconComponent = icons[step.icon];
  const iconColors = [
    "text-orange-500", 
    "text-purple-500", 
    "text-teal-500",  
    "text-yellow-500", 
  ];

  // Different heights for cards to create staggered effect
  const cardHeights = [
    "transform -translate-y-4", // First card - up
    "transform translate-y-4",  // Second card - down
    "transform -translate-y-2", // Third card - slightly up
    "transform translate-y-6",  // Fourth card - more down
  ];

  return (
    <motion.div 
      className={`text-center group bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 ${cardHeights[index]} relative z-20`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
    >
      <div className="relative mb-4">
        {/* Icon Container */}
        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-muted/80 transition-colors duration-200">
          <IconComponent className={`h-6 w-6 ${iconColors[index]}`} />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-card-foreground mb-3">
        {step.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {step.description}
      </p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Signup for the job applicant profile, mention your qualifications, past experiences, and expertise, and scope your interests. Voila! You're all set to find your dream jobs.",
      icon: "user"
    },
    {
      id: 2,
      title: "Search Job",
      description: "Once you set your job hunting parameters, you'll find many openings related to your career interest on the home page and even filter out some of the best job openings.",
      icon: "search"
    },
    {
      id: 3,
      title: "Upload CV/ Resume",
      description: "From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/ Resume and answering a couple of questions, if any.",
      icon: "file-text"
    },
    {
      id: 4,
      title: "Get Job",
      description: "After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods.",
      icon: "briefcase"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Hired in
            <span className="text-purple-600 dark:text-purple-400 ml-2">4 Quick Easy Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The quickest and most effective way to get hired by the top firm working in your career interest areas.
          </p>
        </div>
      </div>

      {/* Main content area with connecting line */}
      <div className="relative">
        {/* Connecting curved dotted line */}
        <div className="absolute inset-0 h-32 flex items-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            {/* Curved dotted line - connecting to send icon */}
            <path
              d="M 0,120 Q 400,100 600,160 T 1150,20"
              stroke="#8b5cf6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,8"
              opacity="1"
            />
          </svg>
        </div>
        
        {/* Paper Airplane Icon - positioned with gap from right */}
        <div className="hidden lg:block absolute top-0 right-8 transform -translate-y-1/2 z-30">
          <motion.div 
            className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          >
            <Send className="h-4 w-4 text-white" />
          </motion.div>
        </div>

        {/* Cards positioned in staggered heights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12">
          <motion.button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
