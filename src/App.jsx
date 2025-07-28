import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedJobs from "./components/FeaturedJobs";
import HowItWorks from "./components/HowItWorks";
import TopCompanies from "./components/TopCompanies";
import Footer from "./components/Footer";
import CareerOptions from "./components/CareerOptions";
import WhatWeOffer from "./components/WhatWeOffer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <CareerOptions />
        <FeaturedJobs />
        <WhatWeOffer />
        <TopCompanies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
