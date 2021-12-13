import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  publicPath: isProduction ? "/portfolio/" : "/",
  base: isProduction ? "/portfolio/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  }
});
