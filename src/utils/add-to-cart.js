const addToCart = () => {
  if(document.body.classList.contains("menu")) {
    const addToCartButtons = document.querySelectorAll(".order-page__add");

    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        const foodItem = button.closest(".order-page__container");

        const foodData = {
          id: foodItem.getAttribute("data-id"),
          name: foodItem.getAttribute("data-name"),
          stall: foodItem.getAttribute("data-stall"),
          price: parseFloat(foodItem.getAttribute("data-price")),
          quantity: parseInt(foodItem.querySelector(".order-quantity").value),
          img: foodItem.getAttribute("data-img"),
          href: foodItem.getAttribute("data-href"),
        };

        const addedSuccessfully = addFood(foodData);
        if (addedSuccessfully) {
          alert(`${foodData.name} added to cart!`);
        }
        
      });
    });

    function addFood(foodData) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItemIndex = cart.findIndex(item => item.id === foodData.id);
    
      if (existingItemIndex > -1) {
        const existingItem = cart[existingItemIndex];
        const newQuantity = existingItem.quantity + foodData.quantity;
    
        if (newQuantity > 9) {
          alert(`${existingItem.name} quantity cannot exceed 9. Adding only ${9 - existingItem.quantity} more.`);
          existingItem.quantity = 9;
          localStorage.setItem("cart", JSON.stringify(cart));
          return false; // Addition restricted
        } else {
          existingItem.quantity = newQuantity;
        }
      } else {
        if (foodData.quantity > 9) {
          alert(`You can only add up to 9 of ${foodData.name}. Adding 9.`);
          foodData.quantity = 9;
        }
        cart.push(foodData);
      }
    
      localStorage.setItem("cart", JSON.stringify(cart));
      return true; // Addition successful
    }
    
    const cardItemsContainer = document.querySelector(".cart__orders");

    if (!cardItemsContainer) {
      console.warn("Cart container not found. Skipping cart rendering.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0) {
      cardItemsContainer.innerHTML = "<p>Your cart is empty</p>";
      return;
    }

    cart.forEach(item => {
      const cartItem = document.createElement("div");
    
      cartItem.classList.add("cart__item");
      cartItem.innerHTML = `
        <input type="checkbox" class="cart-item__checkbox" value="item1">
        <button class="remove-item" data-id=${item.id}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="cart__x">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>            
        </button>
        <div class="cart__item-img">
          <a href="${item.href}">
            <img 
              class="lazy__img"
              data-src="/amarah-foods/${item.img}"
            >
          </a>
        </div>
        <div class="cart__item-info">
          <a href="${item.href}">
            <h1 id="cartFoodName" class="cart__item-name">
              ${item.name}
            </h1>
          </a>
          <a href="${item.href}">
            <p id="cartStallName" class="cart__item-stall">
              ${item.stall}
            </p>
          </a>
          <div class="cart__select select-wrap">
            <label for="qty">Qty:&nbsp;</label>
            <select class="select" name="qty" id="qty">
              ${[...Array(9)].map((_, i) => `
                <option value="${i + 1}" ${item.quantity === i + 1 ? "selected" : ""}>${i + 1}</option>
              `).join("")}
            </select>
          </div>
        </div>
        <p class="cart__item-price">
          ₱${(item.price * item.quantity).toFixed(2)}
        </p>
      `;
    
      cardItemsContainer.appendChild(cartItem);

      document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
          const confirmDelete = window.confirm("Are you sure you want to remove this item from the cart?");
    
          if (confirmDelete) {
            removeFromCart(this.getAttribute("data-id"));
            this.parentElement.remove();
          }
        });
      });
    
      const quantitySelect = cartItem.querySelector(".select");
      const priceElement = cartItem.querySelector(".cart__item-price");
    
      quantitySelect.addEventListener("change", (event) => {
        const newQuantity = parseInt(event.target.value);
        const newPrice = (item.price * newQuantity).toFixed(2);
        priceElement.textContent = `₱${newPrice}`;
    
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
        if (existingItemIndex > -1) {
          cart[existingItemIndex].quantity = newQuantity;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    });    

    function removeFromCart(id) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));

      window.location.reload();
    }
  }
}

export default addToCart;