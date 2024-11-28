import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        signIn: './src/pages/sign-in.html',
        menu: './src/pages/menu.html',
      },
    },
  },
});