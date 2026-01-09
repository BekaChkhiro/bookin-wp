"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import TradieLoginModal from "@/components/ui/TradieLoginModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTradieLoginOpen, setIsTradieLoginOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/booking-logo.png"
              alt="All Sorted"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Center - Availability (hidden on mobile) */}
          <div className="hidden md:flex items-center text-slate-blue">
            <div className="w-2 h-2 rounded-full bg-soft-teal mr-2 animate-pulse" />
            <span className="text-sm font-medium">The next plumber available is in 5 mins</span>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Tradie Portal Button (hidden on mobile) */}
            <div className="hidden sm:block">
              <Button variant="outline" size="sm" onClick={() => setIsTradieLoginOpen(true)}>
                Tradie Portal
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-slate-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-slate-blue">
                <div className="w-2 h-2 rounded-full bg-soft-teal mr-2 animate-pulse" />
                <span className="text-sm font-medium">The next plumber available is in 5 mins</span>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={() => setIsTradieLoginOpen(true)}>
                Tradie Portal
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Tradie Login Modal */}
      <TradieLoginModal isOpen={isTradieLoginOpen} onClose={() => setIsTradieLoginOpen(false)} />
    </header>
  );
}
