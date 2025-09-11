export default function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Businesses trust us worldwide"
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Projects completed successfully"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our numbers speak for themselves. We've helped hundreds of businesses achieve their goals and exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-200">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional content */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how we can help your business achieve similar results and exceed your growth targets.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
