'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Image src="/logo/neox-asia-logo.avif" alt="Logo" width={100} height={100} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-900">NeoX Asia</h1>
            </div>
          </div>

          {/* Desktop Navigation - Only show on large screens */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Trang chủ', href: '#home', active: true },
              { name: 'Xem Dịch Vụ', href: '#services' },
              { name: 'Đối Tác', href: '#partners' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Button - Show on larger screens */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Liên Hệ
            </a>

            {/* Mobile menu button - Only show on small screens */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 space-y-3">
              {[
                { name: 'Trang chủ', href: '#home', active: true },
                { name: 'Xem Dịch Vụ', href: '#services' },
                { name: 'Đối Tác', href: '#partners' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href="#contact"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Liên Hệ
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}