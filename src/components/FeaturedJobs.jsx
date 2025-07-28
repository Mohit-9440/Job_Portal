import { MapPin, Clock, DollarSign } from "lucide-react";

const JobCard = ({ job, isFeatured = false }) => {
  return (
    <div
      className={`rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
        isFeatured
          ? "bg-purple-600 text-white"
          : "bg-white border border-gray-200 text-gray-800"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isFeatured ? "bg-white" : "bg-gray-100"
            }`}
          >
            {job.logoComponent}
          </div>
          <div>
            <p
              className={`text-sm ${
                isFeatured ? "text-white/80" : "text-gray-600"
              }`}
            >
              {job.company}
            </p>
            <p
              className={`text-xs ${
                isFeatured ? "text-white/70" : "text-gray-500"
              }`}
            >
              {job.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p
          className={`font-semibold text-lg mt-1 ${
            isFeatured ? "text-white" : "text-gray-800"
          }`}
        >
          {job.title}
        </p>
        <p
          className={`text-sm leading-relaxed ${
            isFeatured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {job.description}
        </p>
      </div>

      <div
        className={`flex items-center justify-between text-sm ${
          isFeatured ? "text-white/80" : "text-gray-600"
        }`}
      >
        <span className={`${isFeatured ? "text-white" : "text-blue-600"}`}>
          {job.positions} Positions
        </span>
        <span className={`${isFeatured ? "text-white" : "text-orange-500"}`}>
          {job.type}
        </span>
        <span className={`${isFeatured ? "text-white" : "text-green-600"}`}>
          {job.salary}
        </span>
      </div>
    </div>
  );
};

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      company: "Figma",
      title: "Senior Product Designer",
      location: "USA",
      description:
        "Your job role would be to work alongside UX researchers, product managers, and fellow product designers...",
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
      isFeatured: true,
    },
    {
      id: 2,
      company: "Google Inc.",
      title: "Project Manager",
      location: "USA",
      description:
        "As a project manager, your work will cut across areas of judicious planning, operational ",
      positions: "2",
      type: "Full Time",
      salary: "$85,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      company: "Amazon",
      title: "Front-end Developer",
      location: "USA",
      description:
        "We are looking for a qualified front-end developer to join our IT team. You will be responsible for...",
      positions: "20",
      type: "Full Time",
      salary: "$105,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">a</span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      company: "Twitter",
      title: "React.JS Developer",
      location: "USA",
      description:
        "We are actively looking for a front-end web developer who is motivated and able to combine...",
      positions: "6",
      type: "Full Time",
      salary: "$98,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-blue-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">🐦</span>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      company: "Microsoft",
      title: "Python Developer",
      location: "USA",
      description:
        "We are currently hiring a Python developer to join our product development team to...",
      positions: "8",
      type: "Full Time",
      salary: "$80,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      company: "LinkedIn",
      title: "Full Stack Developer",
      location: "Germany",
      description:
        "The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
      positions: "10",
      type: "Full Time",
      salary: "$160,000/Year",
      logoComponent: (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-6 h-6 bg-blue-700 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">in</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Latest and Top
              <span className="text-gray-800"> Job Openings</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Discover the fresh job openings from the giant firms in which you
              might want to apply and take a chance to get hired by top fortune
              companies.
            </p>
          </div>
          <div className="ml-8">
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              View All Jobs
            </a>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} isFeatured={job.isFeatured} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
