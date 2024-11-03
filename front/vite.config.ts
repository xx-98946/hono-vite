import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "node:path";
export default defineConfig({
  plugins: [solid()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "^/api": {
        target: "http://localhost:8000",
      },
    },
  },
});
