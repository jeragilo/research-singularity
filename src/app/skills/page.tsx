"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SkillsPage() {
  const skills = [
    { category: "Programming", list: ["Python", "JavaScript", "TypeScript", "SQL", "C++"] },
    { category: "Machine Learning & AI", list: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas"] },
    { category: "Cloud & DevOps", list: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD Pipelines"] },
    { category: "Cybersecurity", list: ["Blockchain Security", "Zero Trust", "Network Security"] },
    { category: "Mathematics & Finance", list: ["Applied Mathematics", "Stock Prediction", "Financial Modeling"] },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills & Resume
      </motion.h1>

      <div className="mt-6 space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <h2 className="text-2xl font-bold text-blue-400">{skill.category}</h2>
            <p className="text-gray-300 mt-2">{skill.list.join(", ")}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
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
