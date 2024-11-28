import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        signIn: './src/pages/sign-in.html',
        menu: './src/pages/menu.html',
        amarah: './src/pages/amarah.html',
        cafeFerrer: './src/pages/cafe-ferrer.html',
        chicksAhoy: './src/pages/chicks-ahoy.html',
        coffito: './src/pages/coffito.html',
        colil: './src/pages/colil.html',
        kuyaJong: './src/pages/kuya-jong.html',
        santinos: './src/pages/santinos.html',
        titasCatering: './src/pages/titas-catering.html',
        topSpatula: './src/pages/top-spatula.html',
        waffleTime: './src/pages/waffle-time.html',
        zekiah: './src/pages/zekiah.html',
      },
    },
  },
});