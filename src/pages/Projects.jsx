import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading)
    return <div className="p-8 text-center">Loading projects...</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      {projects.length === 0 ? (
        <p className="text-gray-500 text-center">No projects yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover rounded"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
                <div className="mt-3 flex gap-4 text-sm">
                  {/* {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )} */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-green-600 hover:underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
