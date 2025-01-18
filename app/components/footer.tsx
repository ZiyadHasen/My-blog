import Link from "next/link";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-[3rem] bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col px-[2rem] sm:px-[4rem] gap-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 gap-4">
          {/* Left section */}
          <div className="text-xl font-semibold mb-4 md:mb-0 md:flex-1 text-center md:text-left text-gray-800 dark:text-gray-200">
            Blogs
          </div>

          {/* Middle section */}
          <nav className="flex gap-6 mb-4 md:mb-0 flex-wrap justify-center md:justify-center md:flex-1">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              Contact me
            </Link>
          </nav>

          {/* Right section - Social Links */}
          <div className="flex gap-4 justify-center md:justify-end md:flex-1">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 hover:opacity-80 transition-opacity"
            >
              <Twitter className="h-5 w-5 text-white" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 hover:opacity-80 transition-opacity"
            >
              <Github className="h-5 w-5 text-white" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 hover:opacity-80 transition-opacity"
            >
              <Linkedin className="h-5 w-5 text-white" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2 hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-5 w-5 text-white" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex-1"></div>
          <div className="text-center text-sm text-muted-foreground py-3 text-gray-800 dark:text-gray-400">
            Designed & Developed by Zeon Studio
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </footer>
  );
}
