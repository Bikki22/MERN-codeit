import axiosInstance from "./axios";

const projectServices = {
  getProject: async () => {
    const response = await axiosInstance.get("/projects");
    return response.data;
  },
  getProjectById: async (projectId) => {
    const response = await axiosInstance.get(`/projects/${projectId}`);
    return response.data;
  },
};
