import { useState, useEffect } from "react";
import axios from "../../api/axiosInstance";
import toast from "react-hot-toast";

export default function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    liveDemo: "",
  });
  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState(null);

  const fetchProjects = async () => {
    const res = await axios.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const uploadImage = async () => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("/upload", formData);
    // console.log("Upload result:", res.data);
    return res.data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imgUrl = form.imageUrl;

      if (file) {
        toast.loading("Uploading image...");
        imgUrl = await uploadImage();
        toast.dismiss();
      }

      const payload = {
        title: form.title,
        description: form.description,
        imageUrl: imgUrl,
        githubLink: form.githubLink,
        liveLink: form.liveLink,
      };

      if (editing) {
        await axios.put(`/projects/${editing}`, payload);
        toast.success("Project updated");
      } else {
        await axios.post("/projects", payload);
        toast.success("Project added");
      }

      setForm({
        title: "",
        description: "",
        imageUrl: "",
        githubLink: "",
        liveLink: "",
      });
      setFile(null);
      setEditing(null);
      fetchProjects();
    } catch (err) {
      toast.dismiss();
      toast.error(err.response?.data?.message || "Error");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    await axios.delete(`/projects/${id}`);
    toast.success("Deleted");
    fetchProjects();
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Manage Projects</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-4 rounded shadow mb-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Title"
            className="p-2 border rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="GitHub Link"
            value={form.githubLink}
            onChange={(e) => setForm({ ...form, githubLink: e.target.value })}
          />
          <input
            type="text"
            placeholder="Live Link"
            value={form.liveLink}
            onChange={(e) => setForm({ ...form, liveLink: e.target.value })}
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 border rounded"
          />
        </div>
        <textarea
          placeholder="Description"
          className="w-full mt-4 p-2 border rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editing ? "Update Project" : "Add Project"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p._id} className="p-4 bg-white shadow rounded">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded"
              />
            )}
            <h3 className="font-semibold mt-2">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  setForm(p);
                  setEditing(p._id);
                }}
                className="bg-yellow-400 px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
