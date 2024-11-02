// CSS IMPORTS
import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/marquee.css';
import '../styles/components/about.css';
import '../styles/components/mobile-nav.css';

// IMPORT NEXT CSS BELOW
import '../styles/components/sign-in.css';
import '../styles/components/sign-up.css';

// CSS UTILS
import '../styles/utils.css';

// JAVASCRIPT IMPORTS
import header from './utils/header';
import mobileNav from './utils/mobile-nav.js';
import lazyLoading from './utils/lazy-loading.js';
import scrollspy from './utils/scrollspy';

// JAVASCRIPT FUNCTION CALLS
mobileNav();
lazyLoading();
header();
scrollspy();