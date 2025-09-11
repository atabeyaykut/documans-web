import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - FinBuzz",
  description: "Explore our successful projects and client case studies showcasing business transformation and growth achievements.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "TechCorp Digital Transformation",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete digital overhaul resulting in 150% revenue increase and streamlined operations.",
      results: ["150% Revenue Growth", "40% Cost Reduction", "90% Process Efficiency"]
    },
    {
      title: "StartupX Growth Strategy",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strategic planning and market expansion that led to successful Series A funding.",
      results: ["$5M Series A", "300% User Growth", "Market Expansion"]
    },
    {
      title: "GlobalTrade Process Optimization",
      category: "Process Optimization",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Workflow optimization and automation reducing operational costs by 40%.",
      results: ["40% Cost Savings", "60% Faster Processing", "Zero Error Rate"]
    },
    {
      title: "RetailChain Financial Planning",
      category: "Financial Planning",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive financial restructuring and planning for sustainable growth.",
      results: ["25% Profit Increase", "Debt Reduction", "Cash Flow Optimization"]
    },
    {
      title: "ManufacturingCo Team Development",
      category: "Team Development",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Leadership training and team building program improving productivity by 35%.",
      results: ["35% Productivity Boost", "90% Employee Satisfaction", "Leadership Excellence"]
    },
    {
      title: "HealthcarePlus Quality Assurance",
      category: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Implementation of quality management systems achieving industry certifications.",
      results: ["ISO Certification", "99.9% Quality Score", "Compliance Excellence"]
    }
  ];

  const categories = ["All", "Digital Transformation", "Business Strategy", "Process Optimization", "Financial Planning", "Team Development", "Quality Assurance"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses across industries achieve remarkable growth and transformation through our strategic solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Results:</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself with measurable results across all industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", description: "Successful transformations" },
              { number: "98%", label: "Client Satisfaction", description: "Exceptional service delivery" },
              { number: "$50M+", label: "Value Generated", description: "For our clients" },
              { number: "15+", label: "Industries Served", description: "Diverse expertise" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
