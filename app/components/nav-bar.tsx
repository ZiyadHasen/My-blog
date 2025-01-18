"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ModeToggleWrapper } from "./mode-toggle-wrapper";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for the mobile menu

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the mobile menu

  return (
    <nav className="sticky top-0 z-50 flex items-center pt-4 justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 bg-background border-b h-[80px]">
      <Link href="/" className="text-2xl font-bold">
        Ziyad Hasen
      </Link>

      {/* Desktop & Tablet Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </div>

      {/* ModeToggleWrapper and Contact Me (both outside the mobile menu) */}
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
        {/* Adjusted spacing for mobile to desktop */}
        <ModeToggleWrapper />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="text-2xl" />
            ) : (
              <Menu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-background p-4 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="/blog"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Separator orientation="horizontal" className="my-4 bg-slate-300" />
            <Link
              href="/contact"
              className="hover:bg-slate-300 dark:hover:bg-slate-700 border border-black dark:border-white bg-white dark:bg-black px-3 py-1 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
