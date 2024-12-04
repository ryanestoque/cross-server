// CSS IMPORTS
import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/home-components/header.css';
import '../styles/home-components/hero.css';
import '../styles/home-components/marquee.css';
import '../styles/home-components/about.css';
import '../styles/home-components/mobile-nav.css';
import '../styles/home-components/teaser.css';
import '../styles/login-components/login.css';
import '../styles/menu-components/menu.css';
import '../styles/menu-components/menu-header.css';
import '../styles/menu-components/menu-mobile-nav.css';
import '../styles/menu-components/menu-stalls.css';
import '../styles/menu-components/menu-stalls-foods.css';
import '../styles/menu-components/menu-order-page.css';

// CSS UTILS
import '../styles/utils.css';

// JAVASCRIPT IMPORTS
import header from './utils/header';
import mobileNav from './utils/mobile-nav';
import menuMobileNav from './utils/menu-mobile-nav';
import lazyLoading from './utils/lazy-loading';
import scrollspy from './utils/scrollspy';
import loadMore from './utils/load-more';

// JAVASCRIPT FUNCTION CALLS
mobileNav();
menuMobileNav();
lazyLoading();
header();
scrollspy();
loadMore();