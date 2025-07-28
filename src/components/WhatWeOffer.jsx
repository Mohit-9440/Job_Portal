import React from "react";

const ServiceCard = ({ number, title, description, imageSrc, imageAlt }) => {
  return (
    <div className="text-center">
      {/* Service Image */}
      <div className="mb-6">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Service Content */}
      <div className="flex flex-row items-center justify-center">
        {/* Number Label with Purple Line */}
        <div className="flex items-start justify-center mb-4 mr-4">
          <div className="relative">
            <span className="text-6xl font-bold text-gray-300 w-16 h-16 flex items-center justify-center">
              {number}
            </span>
            {/* Purple vertical line */}
            {/* <div className="absolute left-16 transform -translate-x-1/2 top-full w-0.5 bg-purple-600 h-16"></div> */}
          </div>
        </div>

        {/* Title and Description */}
        <div className="border-l-2 border-purple-600 p-4 pt-0 pb-0">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          {description && (
            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Job Recommendation",
      description:
        "Set your job preferences and get countless of your best-fit job recommendations.",
      imageSrc:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Professional workspace with laptop and coffee",
    },
    {
      id: 2,
      number: "02",
      title: "Create & Build Profile",
      description:
        "Build your professional profile and showcase your skills to potential employers.",
      imageSrc:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Two people collaborating on laptops",
    },
    {
      id: 3,
      number: "03",
      title: "Career Consultation",
      description:
        "Get expert career advice and guidance from industry professionals.",
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Man consulting on laptop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mt-2">
            Job Portal is the right platform for you to get various job
            recommendations, get career counseling, and find your ideal job
            profile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
