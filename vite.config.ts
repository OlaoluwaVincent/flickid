import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, type build } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    // emptyOutDir: true,
  },
});
