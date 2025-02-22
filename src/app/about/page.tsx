"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I am a software engineer specializing in AI, cloud computing, and DevOps. My portfolio showcases
        projects in machine learning, blockchain, and high-performance computing.
      </motion.p>

      <motion.div
        className="mt-8 space-y-4 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p><strong>💻 Expertise:</strong> AI, Machine Learning, DevOps, Cloud Computing (Azure, AWS), SQL, Cybersecurity</p>
        <p><strong>🎓 Education:</strong> Master’s in Computer Science & Applied Mathematics</p>
        <p><strong>📜 EB2 NIW:</strong> Contributing to AI innovation & research in cybersecurity and fintech</p>
      </motion.div>

      <motion.div
        className="mt-8 flex gap-4"
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
          href="/"
          className="bg-gray-800 px-6 py-3 rounded-lg text-white font-bold hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
