import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        login: './src/pages/login/login.html',
        menu: './src/pages/menu/menu.html',
        amarah: './src/pages/menu/amarah/amarah.html',
        cafeFerrer: './src/pages/menu/cafe-ferrer/cafe-ferrer.html',
        chicksAhoy: './src/pages/menu/chicks-ahoy/chicks-ahoy.html',
        coffito: './src/pages/menu/coffito/coffito.html',
        colil: './src/pages/menu/colil/colil.html',
        kuyaJong: './src/pages/menu/kuya-jong/kuya-jong.html',
        santinos: './src/pages/menu/santinos/santinos.html',
        titasCatering: './src/menu/pages/titas-catering/titas-catering.html',
        topSpatula: './src/pages/menu/top-spatula/top-spatula.html',
        waffleTime: './src/pages/menu/waffle-time/waffle-time.html',
        zekiah: './src/pages/menu/zekiah/zekiah.html',
      },
    },
  },
});