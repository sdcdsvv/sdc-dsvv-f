import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProjectsManager from "./ProjectsManager";

export default function Dashboard() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) navigate("/admin/login");
  }, [admin]);

  if (!admin) return null;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">SDC Admin Dashboard</h1>
        <button
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <p>Welcome, {admin.username}</p>
      <ProjectsManager />
      {/* Next: add CRUD tabs for Projects, Internships, Workshops */}
    </div>
  );
}
