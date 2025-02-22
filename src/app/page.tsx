"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Showcasing my AI, Cloud, and DevOps work.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/projects"
          className="bg-blue-600 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-700 transition"
        >
          View My Projects
        </Link>
        <Link
          href="/about"
          className="bg-gray-800 px-6 py-3 rounded-lg text-white font-bold hover:bg-gray-700 transition"
        >
          About Me
        </Link>
      </motion.div>
    </main>
  );
}
