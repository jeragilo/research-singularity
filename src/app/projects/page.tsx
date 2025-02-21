"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Stock Predictor",
    description: "Machine Learning model for predicting stock trends.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    link: "https://github.com/jeragilo/stock-predictor",
  },
  {
    title: "Blockchain Secure Identity",
    description: "Decentralized identity verification using blockchain.",
    tech: ["Solidity", "Ethereum", "Next.js"],
    link: "https://github.com/jeragilo/blockchain-identity",
  },
  {
    title: "Cloud DevOps Pipeline",
    description: "CI/CD pipeline with AWS & Kubernetes for microservices.",
    tech: ["AWS", "Docker", "Kubernetes"],
    link: "https://github.com/jeragilo/devops-pipeline",
  },
  {
    title: "SQL Data Visualization",
    description: "Interactive data visualization with SQL and Power BI.",
    tech: ["PostgreSQL", "Azure", "Power BI"],
    link: "https://github.com/jeragilo/sql-visualization",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selected));

  return (
    <main className="min-h-screen px-8 py-20 text-white">
      <h1 className="text-4xl font-bold text-center">My Projects</h1>
      <p className="text-center text-gray-400 mt-2">Explore my AI, Cloud, SQL, and DevOps work.</p>

      <div className="flex justify-center mt-6 space-x-4">
        {["All", "Python", "Next.js", "AWS", "SQL"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              selected === category ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex flex-wrap mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs mr-2">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              className="block mt-4 text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
