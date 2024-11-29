const lazyLoading = () => {
  const lazyContent = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const images = entry.target.querySelectorAll(".lazy__img");
        images.forEach(img => {
          img.src = img.dataset.src;
        });

        const backgrounds = entry.target.querySelectorAll(".lazy__bg");
        backgrounds.forEach(bg => {
          const bgUrl = bg.dataset.bg;
          bg.style.backgroundImage = `url(${bgUrl})`;
        });

        entry.target.classList.remove("loading");
        entry.target.classList.add("loaded");
        observer.unobserve(entry.target);
      }
    });
  });
  
  lazyContent.forEach(content => {
    observer.observe(content);
  });
}

export default lazyLoading;