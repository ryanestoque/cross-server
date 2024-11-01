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
}

export default header;