import Link from "next/link";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left section */}
          <div className="text-xl font-semibold">Blogs</div>

          {/* Middle section */}
          <nav className="flex gap-6">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact me
            </Link>
          </nav>

          {/* Right section - Social Links */}
          <div className="flex gap-4">
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

        {/* Bottom text */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Designed & Developed by Zeon Studio
        </div>
      </div>
    </footer>
  );
}
