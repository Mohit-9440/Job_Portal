import { useState, useRef } from "react";

const JobCard = ({ job, isFeatured = false }) => {
  return (
    <div className={`rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
      isFeatured 
        ? 'bg-purple-600 text-white' 
        : 'bg-card border border-border text-card-foreground'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isFeatured ? 'bg-white/20' : 'bg-muted'
          }`}>
            {job.logoComponent}
          </div>
          <div>
            <p className={`text-sm ${
              isFeatured ? 'text-white/80' : 'text-muted-foreground'
            }`}>
              {job.company}
            </p>
            <p className={`text-xs ${
              isFeatured ? 'text-white/70' : 'text-muted-foreground'
            }`}>
              {job.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
      <p className={`font-semibold text-lg mt-1 ${
              isFeatured ? 'text-white' : 'text-card-foreground'
            }`}>
              {job.title}
            </p>
        
        <p className={`text-sm leading-relaxed ${
          isFeatured ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {job.description}
        </p>
      </div>

      <div className={`flex items-center justify-between text-sm ${
        isFeatured ? 'text-white/80' : 'text-muted-foreground'
      }`}>
        <span className={`${
          isFeatured ? 'text-white' : 'text-purple-600'
        }`}>
          {job.positions} Positions
        </span>
        <span className={`${
          isFeatured ? 'text-white' : 'text-orange-500'
        }`}>
          {job.type}
        </span>
        <span className={`${
          isFeatured ? 'text-white' : 'text-green-600'
        }`}>
          {job.salary}
        </span>
      </div>
    </div>
  );
};

const FeaturedJobs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);
  
  const jobs = [
    {
      id: 1,
      company: "Figma",
      title: "Senior Product Designer",
      location: "USA",
      description: "Your job role would be to work alongside UX researchers, product managers,...",
      positions: "12",
      type: "Full Time",
      salary: "$148,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-purple-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
        </div>
      ),
      isFeatured: true
    },
    {
      id: 2,
      company: "Google Inc.",
      title: "Project Manager",
      location: "USA",
      description: "As a project manager, your work will cut across areas of judicious planning, operational excellenc...",
      positions: "2",
      type: "Full Time",
      salary: "$85,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-purple-500 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      company: "Amazon",
      title: "Front-end Developer",
      location: "USA",
      description: "We are looking for a qualified front-end developer to join our IT team. You will be responsible for...",
      positions: "20",
      type: "Full Time",
      salary: "$105,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">a</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      company: "Twitter",
      title: "React.JS Developer",
      location: "USA",
      description: "We are actively looking for a front-end web developer who is motivated and able to combine...",
      positions: "6",
      type: "Full Time",
      salary: "$98,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-purple-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">🐦</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      company: "Microsoft",
      title: "Python Developer",
      location: "USA",
      description: "We are currently hiring a Python developer to join our product development team to...",
      positions: "8",
      type: "Full Time",
      salary: "$80,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-purple-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
        </div>
      )
    },
    {
      id: 6,
      company: "LinkedIn",
      title: "Full Stack Developer",
      location: "Germany",
      description: "The ideal candidate will be responsible for conceptualizing and executing clear, quality.",
      positions: "10",
      type: "Full Time",
      salary: "$160,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-purple-700 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">in</span>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % jobs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + jobs.length) % jobs.length);
  };

  const totalSlides = jobs.length;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
    setCurrentX(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setCurrentX(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum distance to trigger slide change
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }
  };

  const handleTouchStart = (e) => {
    handleMouseDown(e);
  };

  const handleTouchMove = (e) => {
    handleMouseMove(e);
  };

  const handleTouchEnd = (e) => {
    handleMouseUp();
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest and Top Job Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover the fresh job openings from the giant firms in which you might want to apply and take a chance to get hired by top fortune companies.
            </p>
          </div>
          <div className="md:ml-8">
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
              View All Jobs
            </a>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} isFeatured={job.isFeatured} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                userSelect: isDragging ? 'none' : 'auto'
              }}
            >
              {jobs.map((job, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <JobCard job={job} isFeatured={job.isFeatured} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-purple-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
