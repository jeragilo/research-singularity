"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 fixed top-0 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1
            className="text-2xl font-bold text-white cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My Portfolio
          </motion.h1>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-700 px-6 py-4">
          <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
          <Link href="/projects" className="block text-gray-300 hover:text-white">Projects</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white">About</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
}
