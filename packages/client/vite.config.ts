import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tutor-ai/shared-types": path.resolve(__dirname, "../shared-types/src/index.ts"),
    },
  },
  optimizeDeps: {
    exclude: ["@tutor-ai/shared-types"],
  },
});
