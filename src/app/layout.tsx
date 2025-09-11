import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinBuzz - Corporate Business Solutions",
  description: "Empowering businesses with innovative solutions for sustainable growth and digital transformation in today's competitive market.",
  keywords: "business consulting, digital transformation, corporate solutions, business strategy, financial planning",
  authors: [{ name: "FinBuzz Team" }],
  openGraph: {
    title: "FinBuzz - Corporate Business Solutions",
    description: "Empowering businesses with innovative solutions for sustainable growth and digital transformation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinBuzz - Corporate Business Solutions",
    description: "Empowering businesses with innovative solutions for sustainable growth and digital transformation.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
