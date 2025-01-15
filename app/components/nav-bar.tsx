import Link from "next/link";
import { ModeToggleWrapper } from "./mode-toggle-wrapper";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background border-b">
      <Link href="/" className="text-2xl font-bold">
        Your Name
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact Me
        </Link>
        <ModeToggleWrapper />
      </div>
    </nav>
  );
}
