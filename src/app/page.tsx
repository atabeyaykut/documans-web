import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import CounterSection from "@/components/CounterSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <CounterSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
}
