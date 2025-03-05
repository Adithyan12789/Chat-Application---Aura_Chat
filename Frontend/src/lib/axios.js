import axios from "axios";
import { toast } from "react-hot-toast";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true,
    maxContentLength: 50 * 1024 * 1024, // 50MB
    maxBodyLength: 50 * 1024 * 1024, // 50MB
    headers: {
        'Content-Type': 'application/json',
    }
});

// Add response interceptor for better error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ERR_NETWORK') {
            toast.error('Network error. Please check your connection.');
        } else if (error.response?.status === 413) {
            toast.error('File size too large. Please try a smaller file.');
        }
        return Promise.reject(error);
    }
);
