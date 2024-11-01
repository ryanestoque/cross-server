import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'src/pages/index.html',
        signin: 'src/pages/sign-in.html',
        signup: 'src/pages/sign-up.html'
      }
    }
  }
});