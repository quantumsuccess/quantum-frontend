import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar:React.FC = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
          <span className="text-purple-700 font-bold">QS</span>
        </div>
        <span className="text-lg font-semibold text-purple-700">Quantum Success</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="hidden md:flex gap-3">
        <Link href="/login" className="px-4 py-2 rounded-md text-sm font-medium border border-purple-200">Login</Link>
        <Link href="/signup" className="px-4 py-2 rounded-md bg-purple-700 text-white text-sm font-semibold hover:bg-purple-800">Get Started</Link>
      </div>
    </div>
  </header>
);


export default Navbar