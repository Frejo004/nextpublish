"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom right, #5D7052, #3d4a36)'}}>
              <span className="text-white font-bold text-xl">NP</span>
            </div>
            <span className="text-xl font-bold" style={{background: 'linear-gradient(to right, #5D7052, #3d4a36)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              NEXTPUBLISH
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 relative group cursor-pointer hover:bg-[#5D7052]/10"
              style={{'--hover-color': '#5D7052'} as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Accueil
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" style={{backgroundColor: '#5D7052'}}></span>
            </Link>
            <Link
              href="/articles"
              className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 relative group hover:bg-[#5D7052]/10"
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Articles
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" style={{backgroundColor: '#5D7052'}}></span>
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 relative group hover:bg-[#5D7052]/10"
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Dashboard
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" style={{backgroundColor: '#5D7052'}}></span>
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200"
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Connexion
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200" style={{background: 'linear-gradient(to bottom right, #5D7052, #3d4a36)'}}>
              S&apos;inscrire
            </button>
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg transition-all duration-200 cursor-pointer hover:bg-[#5D7052]/10"
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Accueil
            </Link>
            <Link
              href="/articles"
              className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg transition-all duration-200 hover:bg-[#5D7052]/10"
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Articles
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg transition-all duration-200 hover:bg-[#5D7052]/10"
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Dashboard
            </Link>
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <button 
                className="w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = '#5D7052'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Connexion
              </button>
              <button className="w-full px-4 py-3 text-base font-medium text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200" style={{background: 'linear-gradient(to bottom right, #5D7052, #3d4a36)'}}>
                S&apos;inscrire
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}