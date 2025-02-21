"use client";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        A collection of my AI, Cloud, and DevOps work.
      </motion.p>
    </main>
  );
}
