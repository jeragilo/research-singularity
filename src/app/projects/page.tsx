"use client";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    { title: "Stock Predictor AI", description: "Machine Learning model for financial forecasting." },
    { title: "Blockchain Identity Verification", description: "Secure identity verification using blockchain and AI." },
    { title: "Azure Cloud Deployment", description: "End-to-end DevOps project with CI/CD pipelines." },
  ];

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

      <div className="mt-6 space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <h2 className="text-2xl font-bold text-blue-400">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
