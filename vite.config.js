import { defineConfig } from "vite";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      template: "/index.html",
    }),
  ],
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "/@/": path.resolve(__dirname, "./src"),
      "/index/": path.resolve(__dirname, "./src/index.ts"),
      "/components/": path.resolve(__dirname, "./src/components"),
      "/utils/": path.resolve(__dirname, "./src/utils"),
      "/pages/": path.resolve(__dirname, "./src/pages"),
      "/api/": path.resolve(__dirname, "./src/api"),
      "/assets/": path.resolve(__dirname, "./src/assets"),
      "/controllers/": path.resolve(__dirname, "./src/controllers"),
      "/core/": path.resolve(__dirname, "./src/core"),
      "/mockData/": path.resolve(__dirname, "./src/mockData"),
      "/handlebars/": "handlebars/dist/handlebars.min.js",
    },
  },
  optimizeDeps: {
    include: ["dependency-package"],
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        app: "src/index.html",
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    hmr: {
      overlay: true,
    },
  },
});
