"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">FinBuzz</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link href="/kategoriler" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kategoriler
            </Link>
            <Link href="/portfolyo" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Portföy
            </Link>
            <Link href="/referanslar" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Referanslar
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              İletişim
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Hemen Başla
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hakkimizda"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/kategoriler"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kategoriler
              </Link>
              <Link
                href="/portfolyo"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portföy
              </Link>
              <Link
                href="/referanslar"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Referanslar
              </Link>
              <Link
                href="/iletisim"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
