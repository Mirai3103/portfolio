import { defineConfig } from "vite";
export default defineConfig({
  build: {
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
  base: "/portfolio/",
});
