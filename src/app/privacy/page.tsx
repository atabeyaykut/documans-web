import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FinBuzz",
  description:
    "Read FinBuzz's Privacy Policy to learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy matters to us. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information such as your name, email, company, and any details you provide through our contact forms. We also collect usage data like page views and interaction events to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use your information to provide and improve our services, respond to inquiries, personalize content, and communicate updates. We do not sell your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Cookies & Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use cookies and similar technologies to remember your preferences and analyze site performance. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your data. However, no method of transmission over the Internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You may request access to, correction of, or deletion of your personal data, subject to applicable laws. To exercise these rights, contact us at <a className="text-blue-600 hover:underline" href="mailto:contact@finbuzz.com">contact@finbuzz.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this policy, contact us at <a className="text-blue-600 hover:underline" href="mailto:contact@finbuzz.com">contact@finbuzz.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
