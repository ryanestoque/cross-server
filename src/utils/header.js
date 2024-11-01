const header = () => {
  // Sticky Navbar bg
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
      header.classList.add("header-sticky");
    }
    else {
      header.classList.remove("header-sticky");
    }
  });

  // Mobile nav fixed anchor landing position
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

export default header;