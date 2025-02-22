
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.link.endsWith(params.slug));

  if (!project) return notFound();

  return (
    <main className="flex flex-col items-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-white">{project.title}</h1>
      <p className="text-lg text-gray-300 mt-4">{project.description}</p>
      
      <p className="mt-2 text-sm text-gray-500">Tech Stack: {project.technologies.join(", ")}</p>

      <div className="mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-700 transition"
        >
          View on GitHub
        </a>
      </div>

      <div className="mt-8">
        <a
          href="/projects"
          className="bg-gray-800 px-6 py-3 rounded-lg text-white font-bold hover:bg-gray-700 transition"
        >
          Back to Projects
        </a>
      </div>
    </main>
  );
}
