'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logonav = '/logonav.svg';

  return (
    <nav className="fixed top-0 w-full bg-black z-50 px-[30px] md:px-[70px]">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logonav}
                alt="Growskill Logo"
                width={40}
                height={60}
                className="h-[67px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <button className="bg-[#3B82F6] hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
              Let's Join Our Class
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block text-white hover:text-gray-300 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button className="w-full bg-[#3B82F6] hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition mt-2">
              Let's Join Our class
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
