"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/pricing", label: "PRICING" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/faq", label: "FAQ" },
    { href: "/enquire", label: "ENQUIRE" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-light-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo/logo-horizontal.png"
              alt="It's Zo Delicious"
              width={500}
              height={210}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enquire"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              ORDER NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-light-pink">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-dark text-sm font-medium tracking-wide hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enquire"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-primary-dark transition-colors mt-4"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
