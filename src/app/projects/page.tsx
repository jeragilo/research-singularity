import { projects } from "../../data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6">
      <h1 className="text-4xl font-bold text-white mb-6">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <Link key={project.link} href={project.link} className="group">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">Tech Stack: {project.technologies.join(", ")}</p>
              <span className="text-blue-400 mt-4 block group-hover:underline">View Project →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
