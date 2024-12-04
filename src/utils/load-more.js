const loadMore = () => {
  const loadMoreButton = document.getElementById("loadMore");
  const foodGrid = document.getElementById("foodGrid");
  const foodCards = Array.from(foodGrid.querySelectorAll(".all-food"));

  let cardsPerPage = window.innerWidth < 1024 ? 6 : 8;
  let currentPage = 1;

  const updateDisplayedCards = () => {
    foodCards.forEach((card) => {
      card.style.display = "none";
    });
    
    const visibleCards = foodCards.slice(0, currentPage * cardsPerPage);
    visibleCards.forEach((card) => {
      card.style.display = "flex";
    });

    if (visibleCards.length >= foodCards.length) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "flex";
    }
  };

  updateDisplayedCards();

  loadMoreButton.addEventListener("click", () => {
    currentPage++;
    updateDisplayedCards();
  });

  window.addEventListener("resize", () => {
    const newCardsPerPage = window.innerWidth < 1024 ? 6 : 8;

    if (newCardsPerPage !== cardsPerPage) {
      cardsPerPage = newCardsPerPage;
      currentPage = 1;
      updateDisplayedCards();
    }
  });
};

export default loadMore;