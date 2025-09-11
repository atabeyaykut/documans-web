import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - FinBuzz",
  description:
    "Review FinBuzz's Terms of Service to understand the rules and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Use of Services</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use our website and services only for lawful purposes and in accordance with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, trademarks, and materials on this site are the property of FinBuzz or its licensors and are protected by applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are provided on an "as-is" and "as-available" basis without warranties of any kind, to the fullest extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              FinBuzz shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of the services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these terms from time to time. Continued use of the services constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, contact us at <a className="text-blue-600 hover:underline" href="mailto:contact@finbuzz.com">contact@finbuzz.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
