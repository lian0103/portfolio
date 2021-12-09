import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  publicPath: isProduction ? "/vue3Blog/" : "/",
  base: isProduction ? "/vue3Blog/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "./docs",
  },
});
