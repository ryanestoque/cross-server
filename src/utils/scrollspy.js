const scrollspy = () => {
    if(!document.body.classList.contains("menu") && !document.body.classList.contains("sign-in")) {
      const headerLinks = document.querySelectorAll(".header__link");
      const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");
      const sections = document.querySelectorAll("section");

      window.addEventListener('scroll', () => {
        const currentPosition = window.scrollY + 250;

        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');

          if(currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            headerLinks.forEach((link) => {
              link.classList.remove("active");
            });
            mobileNavLinks.forEach((mlink) => {
              mlink.classList.remove("active");
            });

            document.querySelector(`.header__link[href="#${sectionId}"]`).classList.add("active");

            document.querySelector(`.mobile-nav__link[href="#${sectionId}"]`).classList.add("active");
          }
        });

      });
    }
}

export default scrollspy;