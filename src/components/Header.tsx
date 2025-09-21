'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <header className="w-full bg-gray-900 text-white shadow-xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200">
              だんじり協奏曲
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link
              href="/minimum-journey"
              className="px-6 py-3 text-white bg-gray-800 hover:bg-blue-600 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              ゲーム
            </Link>
            <Link
              href="/minimum-journey/faq"
              className="px-6 py-3 text-white bg-gray-800 hover:bg-purple-600 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-white bg-gray-800 hover:bg-green-600 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              お問い合わせ
            </Link>
            <Link
              href="/en"
              className="px-6 py-3 text-white bg-gray-800 hover:bg-orange-600 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center"
            >
              <img src="/images/en.png" className="w-4 h-3 mr-2" alt="EN" />
              English
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-gray-800 focus:outline-none transition-colors"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                href="/minimum-journey"
                className="block px-4 py-3 text-white bg-gray-800 hover:bg-blue-600 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ゲーム
              </Link>
              <Link
                href="/minimum-journey/faq"
                className="block px-4 py-3 text-white bg-gray-800 hover:bg-purple-600 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-white bg-gray-800 hover:bg-green-600 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <Link
                href="/en"
                className="flex items-center px-4 py-3 text-white bg-gray-800 hover:bg-orange-600 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src="/images/en.png" className="w-4 h-3 mr-2" alt="EN" />
                English
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}