import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ["react-redux"],
    },

    optimizeDeps: {
        include: [
            "@mui/material",
            "@mui/icons-material",
            "axios",
            "react-router-dom",
            "@mui/system",
        ],
    },
});
