import { Headphones, Megaphone, Briefcase, Car, Truck, Monitor, Building, TrendingUp } from "lucide-react";

const CategoryCard = ({ category, isFeatured = false }) => {
  return (
    <div className={`rounded-lg p-6 transition-all duration-300 hover:shadow-lg cursor-pointer ${
      isFeatured 
        ? 'bg-purple-600 text-white shadow-md' 
        : 'bg-card border border-border text-card-foreground hover:shadow-md'
    }`}>
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isFeatured ? 'bg-white' : 'bg-muted'
        }`}>
          <category.icon className={`w-8 h-8 ${
            isFeatured ? 'text-purple-600' : category.iconColor
          }`} />
        </div>
        
        <h3 className={`font-semibold text-lg mb-2 ${
          isFeatured ? 'text-white' : 'text-card-foreground'
        }`}>
          {category.name}
        </h3>
        
        <p className={`text-sm ${
          isFeatured ? 'text-white/80' : 'text-muted-foreground'
        }`}>
          {category.jobCount} jobs openings
        </p>
      </div>
    </div>
  );
};

const CareerOptions = () => {
  const categories = [
    {
      id: 1,
      name: "Design",
      jobCount: "200+",
      icon: Headphones,
      iconColor: "text-orange-500"
    },
    {
      id: 2,
      name: "Sales",
      jobCount: "350+",
      icon: TrendingUp,
      iconColor: "text-purple-600",
      isFeatured: true
    },
    {
      id: 3,
      name: "Marketing",
      jobCount: "500+",
      icon: Megaphone,
      iconColor: "text-red-500"
    },
    {
      id: 4,
      name: "Finance",
      jobCount: "200+",
      icon: Briefcase,
      iconColor: "text-yellow-500"
    },
    {
      id: 5,
      name: "Automobile",
      jobCount: "250+",
      icon: Car,
      iconColor: "text-blue-500"
    },
    {
      id: 6,
      name: "Logistics/ Delivery",
      jobCount: "1k+",
      icon: Truck,
      iconColor: "text-green-500"
    },
    {
      id: 7,
      name: "Admin",
      jobCount: "100+",
      icon: Monitor,
      iconColor: "text-blue-600"
    },
    {
      id: 8,
      name: "Construction",
      jobCount: "500+",
      icon: Building,
      iconColor: "text-blue-400"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 dark:text-purple-400 mb-2">
            Countless Career Options
            <span className="text-foreground ml-2">Are Waiting</span>
          </h2>
          <p className="text-xl font-bold text-foreground">
            For You to Explore
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} isFeatured={category.isFeatured} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-colors duration-200">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerOptions;
