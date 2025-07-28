import { topCompanies } from "../data/mockData";

const CompanyCard = ({ company }) => {
  return (
    <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
      <div className="mb-4">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="h-12 mx-auto object-contain transition-all duration-300"
        />
      </div>
      <h3 className="font-semibold text-card-foreground mb-2">{company.name}</h3>
      <p className="text-sm text-muted-foreground">
        {company.jobs} open positions
      </p>
    </div>
  );
};

const TopCompanies = () => {
  // Flatten the nested array structure
  const companies = topCompanies[0] || topCompanies;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Companies Hiring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals working at the world's leading
            companies
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {companies.map((company) => (
              <div key={company.id} className="flex-shrink-0 w-48">
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline px-8 py-3 text-lg">
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
