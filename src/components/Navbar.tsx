"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-400">
            My Portfolio
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
