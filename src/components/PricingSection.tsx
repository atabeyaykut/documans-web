export default function PricingSection() {
  const plans = [
    {
      name: "Lorem",
      price: "$99",
      period: "per month",
      description: "Lorem ipsum dolor sit amet consectetur",
      features: [
        "Lorem Ipsum Dolor",
        "Consectetur Adipiscing",
        "Sed Do Eiusmod",
        "Tempor Incididunt",
        "Ut Labore Dolore"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Ipsum",
      price: "$299",
      period: "per month",
      description: "Consectetur adipiscing elit sed do",
      features: [
        "Magna Aliqua Ut",
        "Enim Ad Minim",
        "Veniam Quis Nostrud",
        "Exercitation Ullamco",
        "Laboris Nisi Aliquip",
        "Ex Ea Commodo",
        "Consequat Duis Aute"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Dolor",
      price: "$599",
      period: "per month",
      description: "Irure dolor in reprehenderit voluptate",
      features: [
        "Velit Esse Cillum",
        "Dolore Eu Fugiat",
        "Nulla Pariatur Excepteur",
        "Sint Occaecat Cupidatat",
        "Non Proident Sunt",
        "In Culpa Qui",
        "Officia Deserunt Mollit",
        "Anim Id Est"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lorem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Ipsum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular 
                  ? 'border-2 border-blue-500 transform scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact us for enterprise pricing
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
