import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        // exclude: ["react-redux"],
        include: [
            "react-redux",
            "@mui/material",
            "@mui/icons-material",
            "axios",
            "react-router-dom",
            "@mui/system",
        ],
    },
  

    // optimizeDeps: {
    //     include: [
    //         "@mui/material",
    //         "@mui/icons-material",
    //         "axios",
    //         "react-router-dom",
    //         "@mui/system",
    //     ],
    // },
});
