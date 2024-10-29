const lazyLoading = () => {
  const lazyContent = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const images = document.querySelectorAll(".marquee__img");
        images.forEach(img => {
          img.src = img.dataset.src;
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
