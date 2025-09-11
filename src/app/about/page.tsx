import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us - FinBuzz",
  description: "Learn about FinBuzz's mission, vision, and team of experts dedicated to helping businesses achieve sustainable growth.",
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "About Us" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About FinBuzz</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are a team of passionate professionals dedicated to transforming businesses through innovative strategies and cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses of all sizes with innovative solutions that drive sustainable growth, optimize operations, and create lasting value in today's rapidly evolving marketplace.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every business has the potential to achieve extraordinary success with the right guidance, tools, and strategic approach.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the leading global partner for business transformation, recognized for our expertise, innovation, and unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where businesses thrive through strategic innovation, operational excellence, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead FinBuzz with vision, expertise, and dedication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "15+ years of experience in strategic business consulting and digital transformation."
              },
              {
                name: "Michael Chen",
                position: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Expert in emerging technologies and innovative solutions for business optimization."
              },
              {
                name: "Emily Rodriguez",
                position: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Specializes in operational excellence and process optimization strategies."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for excellence in every project and interaction."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical practices."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We embrace new ideas and cutting-edge solutions."
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "We are committed to continuous learning and improvement."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
