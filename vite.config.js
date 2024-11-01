import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        signin: 'src/pages/sign-in.html',
        signup: 'src/pages/sign-up.html',
      },
    },
  },
});