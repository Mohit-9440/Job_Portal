import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with third profile selected

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "The job portal helped me find my dream role in UX design. The platform is incredibly user-friendly and the job recommendations were spot-on.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "I was struggling to find the right product management position. This platform connected me with amazing opportunities I never knew existed.",
    },
    {
      id: 3,
      name: "Peter Parkinson",
      role: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "I was just a graduate of computer science from not so well-known university and even didn't have any internship experience in full-stack development. However, my knowledge in the domain, excitement to learn new things, and the help from the Job Portal for quick job finding gave me a chance to boost my career at a full-stack developer in the rapidly evolving IT industry.",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "The career counseling feature was invaluable. It helped me understand my strengths and find the perfect marketing role that matches my skills.",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "As a data scientist, I needed a platform that understood technical roles. This portal exceeded my expectations with relevant job matches.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Now, let's know what our career aspirants have to say about our
            evolving community and career finding services.
          </p>
        </div>

        {/* Profile Carousel */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mr-4"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? "ring-4 ring-blue-500 ring-offset-2"
                    : "ring-2 ring-gray-200 hover:ring-gray-300"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-4"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-600 rounded-lg p-8 relative">
            {/* Speech bubble pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-600"></div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-white text-lg leading-relaxed mb-6">
                {activeTestimonial.testimonial}
              </p>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div>
                <h4 className="text-white font-bold text-lg">
                  {activeTestimonial.name}
                </h4>
                <p className="text-white/80 text-sm">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
