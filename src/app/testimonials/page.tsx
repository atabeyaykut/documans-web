import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - FinBuzz",
  description: "Read what our clients say about their experience working with FinBuzz and the results they achieved.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "FinBuzz transformed our business operations completely. Their strategic insights and implementation expertise helped us increase revenue by 150% in just 18 months. The team's dedication and professionalism exceeded our expectations.",
      rating: 5,
      results: ["150% Revenue Growth", "18 Month Timeline", "Complete Digital Transformation"]
    },
    {
      name: "Michael Chen",
      position: "Founder",
      company: "StartupX Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The team at FinBuzz provided exceptional guidance during our scaling phase. Their data-driven approach and industry expertise were invaluable to our success. We couldn't have achieved our Series A funding without their strategic support.",
      rating: 5,
      results: ["$5M Series A Funding", "300% User Growth", "Market Expansion"]
    },
    {
      name: "Emily Rodriguez",
      position: "COO",
      company: "GlobalTrade Partners",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "Working with FinBuzz was a game-changer. They helped us streamline our processes and implement technologies that reduced costs by 40% while improving efficiency. Their team became an extension of our organization.",
      rating: 5,
      results: ["40% Cost Reduction", "60% Efficiency Improvement", "Process Automation"]
    },
    {
      name: "David Kim",
      position: "President",
      company: "RetailChain Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "FinBuzz's financial planning expertise saved our company during a critical period. Their comprehensive analysis and strategic recommendations helped us restructure our operations and achieve sustainable profitability.",
      rating: 5,
      results: ["25% Profit Increase", "Debt Restructuring", "Sustainable Growth"]
    },
    {
      name: "Lisa Thompson",
      position: "VP Operations",
      company: "ManufacturingCo",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "The team development program designed by FinBuzz transformed our workplace culture. Employee satisfaction increased dramatically, and our productivity soared. It was exactly what our organization needed.",
      rating: 5,
      results: ["35% Productivity Boost", "90% Employee Satisfaction", "Cultural Transformation"]
    },
    {
      name: "Robert Martinez",
      position: "Quality Director",
      company: "HealthcarePlus",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      content: "FinBuzz helped us achieve ISO certification and implement quality management systems that exceeded industry standards. Their attention to detail and expertise in quality assurance is unmatched.",
      rating: 5,
      results: ["ISO Certification", "99.9% Quality Score", "Industry Recognition"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders have to say about their experience working with FinBuzz and the remarkable results they achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center pt-6 border-t border-gray-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our expert guidance and innovative solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Get Your Free Consultation
          </button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["TechCorp", "StartupX", "GlobalTrade", "RetailChain"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
