const mobileNav = () => {
  if (document.body.classList.contains("menu")) {
    const headerBars = document.querySelector(".menu-header__bars");
    const headerOpenBtn = document.querySelector(".menu-header__bars-open");
    const headerCloseBtn = document.querySelector(".menu-header__bars-close");
    const mobileNav = document.querySelector(".menu-mobile-nav");
    const headerTitle = document.querySelector(".menu-header__title");
    const mobileLinks = document.querySelectorAll(".menu-mobile-nav__link");
    const mobileNavCart = document.querySelector(".menu-mobile-nav__cart");

    let isMobileNavOpened = false;

    headerBars.addEventListener('click', () => {
      if(!isMobileNavOpened) {
        headerOpenBtn.style.display = "none";
        headerCloseBtn.style.display = "inline";
        mobileNav.style.display = "flex";
        document.body.style.overflow = "hidden";
        isMobileNavOpened = true;
      }
      else {
        headerOpenBtn.style.display = "inline";
        headerCloseBtn.style.display = "none";
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
        isMobileNavOpened = false;
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', e => {
        headerOpenBtn.style.display = "inline";
        headerCloseBtn.style.display = "none";
        isMobileNavOpened = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    });

    headerTitle.addEventListener('click', () => {
      headerOpenBtn.style.display = "inline";
      headerCloseBtn.style.display = "none";
      isMobileNavOpened = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });

    mobileNavCart.addEventListener('click', () => {
      headerOpenBtn.style.display = "inline";
      headerCloseBtn.style.display = "none";
      isMobileNavOpened = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });

    mobileNav.addEventListener('click', () => {
      headerOpenBtn.style.display = "inline";
      headerCloseBtn.style.display = "none";
      isMobileNavOpened = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });

    window.addEventListener('resize', () => {
      if(window.innerWidth >= 768) {
        headerOpenBtn.style.display = "inline";
        headerCloseBtn.style.display = "none";
        isMobileNavOpened = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      }
    });
  } else if (!document.body.classList.contains("menu") && !document.body.classList.contains("sign-in")){
    const headerBars = document.querySelector(".header__bars");
    const headerOpenBtn = document.querySelector(".header__bars-open");
    const headerCloseBtn = document.querySelector(".header__bars-close");
    const mobileNav = document.querySelector(".mobile-nav");
    const headerTitle = document.querySelector(".header__title");
    const mobileLinks = document.querySelectorAll(".mobile-nav__link");
    const mobileNavCart = document.querySelector(".mobile-nav__cart");
  
    let isMobileNavOpened = false;
  
    headerBars.addEventListener('click', () => {
      if(!isMobileNavOpened) {
        headerOpenBtn.style.display = "none";
        headerCloseBtn.style.display = "inline";
        mobileNav.style.display = "flex";
        document.body.style.overflow = "hidden";
        isMobileNavOpened = true;
      }
      else {
        headerOpenBtn.style.display = "inline";
        headerCloseBtn.style.display = "none";
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
        isMobileNavOpened = false;
      }
    });
  
    mobileLinks.forEach((link) => {
      link.addEventListener('click', e => {
        headerOpenBtn.style.display = "inline";
        headerCloseBtn.style.display = "none";
        isMobileNavOpened = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    });
  
    headerTitle.addEventListener('click', () => {
      headerOpenBtn.style.display = "inline";
      headerCloseBtn.style.display = "none";
      isMobileNavOpened = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  
    mobileNavCart.addEventListener('click', () => {
      headerOpenBtn.style.display = "inline";
      headerCloseBtn.style.display = "none";
      isMobileNavOpened = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  
    mobileNav.addEventListener('click', () => {
      headerOpenBtn.style.display = "inline";
      headerCloseBtn.style.display = "none";
      isMobileNavOpened = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 768) {
        headerOpenBtn.style.display = "inline";
        headerCloseBtn.style.display = "none";
        isMobileNavOpened = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      }
    });
  }
}

export default mobileNav;