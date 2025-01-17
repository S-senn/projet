import axios from "axios";

// Configurer axios avec l'URL du backend
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
});

export default axiosInstance;
