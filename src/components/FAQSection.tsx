"use client";

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does FinBuzz offer?",
      answer: "FinBuzz offers comprehensive business consulting services including business strategy development, digital transformation, process optimization, financial planning, team development, and quality assurance. We work with companies of all sizes to help them achieve sustainable growth."
    },
    {
      question: "How long does a typical consulting project take?",
      answer: "Project timelines vary depending on scope and complexity. Small optimization projects may take 4-6 weeks, while comprehensive digital transformation initiatives can span 6-12 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with small businesses or only large corporations?",
      answer: "We work with businesses of all sizes, from startups to Fortune 500 companies. Our flexible approach allows us to tailor our services to meet the specific needs and budgets of each client, regardless of company size."
    },
    {
      question: "What makes FinBuzz different from other consulting firms?",
      answer: "Our unique combination of strategic expertise, technical knowledge, and hands-on implementation sets us apart. We don't just provide recommendations – we work alongside your team to ensure successful execution and measurable results."
    },
    {
      question: "How do you measure the success of your consulting projects?",
      answer: "We establish clear KPIs and success metrics at the beginning of each project. These typically include revenue growth, operational efficiency improvements, cost reductions, and other business-specific goals. We provide regular progress reports and final impact assessments."
    },
    {
      question: "Can you help with remote team management and digital workplace setup?",
      answer: "Absolutely! We specialize in helping organizations optimize their remote work capabilities, implement digital collaboration tools, and develop effective remote team management strategies. This has become increasingly important in today's business environment."
    },
    {
      question: "What industries do you have experience in?",
      answer: "Our team has extensive experience across various industries including technology, healthcare, finance, manufacturing, retail, and professional services. We adapt our methodologies to suit industry-specific challenges and regulations."
    },
    {
      question: "How do I get started with FinBuzz?",
      answer: "Getting started is easy! Contact us through our website or call us directly to schedule a free initial consultation. During this meeting, we'll discuss your challenges, goals, and how we can help your business succeed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and approach.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Get in touch for personalized answers to your specific needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Experts
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
