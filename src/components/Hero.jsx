import { useState } from "react";
import { Search, MapPin, Building } from "lucide-react";
import { suggestedKeywords } from "../data/mockData";
import BackgroundLines from "./BackgroundLines";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    keyword: "",
    location: "",
    company: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchData);
    // Handle search logic here
  };

  const handleInputChange = (field, value) => {
    setSearchData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-background">
      <BackgroundLines />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-orange-600 text-sm bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 px-3 py-2 rounded-full">
            No.1 Job Hunt Website
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 mt-4">
            Search, Apply &
            <div className="mt-4">
              <span className="text-foreground">Get Your</span>
              <span className="text-purple-600 dark:text-purple-400 ml-4">
                Dream Job
              </span>
            </div>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your hunt for the best life-changing career opportunities from
            here in your selected areas conveniently and get hired quickly.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Job Title/Keyword */}
              <div className="md:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job title"
                    value={searchData.keyword}
                    onChange={(e) =>
                      handleInputChange("keyword", e.target.value)
                    }
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="md:col-span-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={searchData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="md:col-span-1">
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Company"
                    value={searchData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Suggested Keywords */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestedKeywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleInputChange("keyword", keyword)}
                className="px-4 py-2 bg-muted hover:bg-purple-400 hover:text-primary-foreground text-muted-foreground rounded-full text-sm transition-colors duration-200"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
