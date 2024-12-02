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
        dynamite: './src/pages/menu/chicks-ahoy/dynamite.html',  
        chow: './src/pages/menu/chicks-ahoy/chow.html', 
        chickenPoppers: './src/pages/menu/chicks-ahoy/chicken-poppers.html', 
        chickenFingers: './src/pages/menu/chicks-ahoy/chicken-fingers.html',
        ahoy: './src/pages/menu/chicks-ahoy/ahoy.html',
        konnichiwa: './src/pages/menu/chicks-ahoy/konnichiwa.html',

        coffito: './src/pages/menu/coffito/coffito.html',

        colil: './src/pages/menu/colil/colil.html',

        kuyaJong: './src/pages/menu/kuya-jong/kuya-jong.html',
        friedChicken: './src/pages/menu/kuya-jong/fried-chicken.html',
        beefSteak: './src/pages/menu/kuya-jong/beef-steak.html',
        porkMenudo: './src/pages/menu/kuya-jong/pork-menudo.html',
        porkChop: './src/pages/menu/kuya-jong/pork-chop.html',
        chickenAdobo: './src/pages/menu/kuya-jong/chicken-adobo.html',
        friedBangus: './src/pages/menu/kuya-jong/fried-bangus.html',

        santinos: './src/pages/menu/santinos/santinos.html',

        titasCatering: './src/pages/menu/titas-catering/titas-catering.html',

        topSpatula: './src/pages/menu/top-spatula/top-spatula.html',
        dewberry: './src/pages/menu/top-spatula/dewberry.html',
        skyflakes: './src/pages/menu/top-spatula/skyflakes.html',
        rebisco: './src/pages/menu/top-spatula/rebisco.html',
        gummyWorms: './src/pages/menu/top-spatula/gummy-worms.html',
        nagaraya: './src/pages/menu/top-spatula/nagaraya.html',
        chichacorn: './src/pages/menu/top-spatula/chichacorn.html',

        waffleTime: './src/pages/menu/waffle-time/waffle-time.html',
        americanHotdog: './src/pages/menu/waffle-time/american-hotdog.html',
        hamCheese: './src/pages/menu/waffle-time/ham-cheese.html',
        belgian: './src/pages/menu/waffle-time/belgian.html',
        cheeseDelight: './src/pages/menu/waffle-time/cheese-delight.html',
        bavarian: './src/pages/menu/waffle-time/bavarian.html',
        ultimateUbe: './src/pages/menu/waffle-time/ultimate-ube.html',

        zekiah: './src/pages/menu/zekiah/zekiah.html',
        sisigWithRice: '././src/pages/menu/zekiah/sisig-with-rice.html',
        shrimps: '././src/pages/menu/zekiah/shrimps.html',
        kwek: '././src/pages/menu/zekiah/kwek.html',
        bananaCake: '././src/pages/menu/zekiah/banana-cake.html',
        hotcake: '././src/pages/menu/zekiah/hotcake.html',
        cinnamon: '././src/pages/menu/zekiah/cinnamon.html',
      },
    },
  },
});