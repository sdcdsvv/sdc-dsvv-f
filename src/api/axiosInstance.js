import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use((config) => {
  const admin = localStorage.getItem("admin");
  if (admin) {
    const { token } = JSON.parse(admin);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
