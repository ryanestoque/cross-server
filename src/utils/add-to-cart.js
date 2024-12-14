const addToCart = () => {
  if(document.body.classList.contains("menu")) {
    const addToCartButtons = document.querySelectorAll(".order-page__add");

    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        if(localStorage.getItem("loggedIn") === "false") {
          window.alert("Log in to continue");
    
          window.location.href = "/src/pages/login/login.html";
        } else {
          const foodItem = button.closest(".order-page__container");

          const foodData = {
            id: foodItem.getAttribute("data-id"),
            name: foodItem.getAttribute("data-name"),
            stall: foodItem.getAttribute("data-stall"),
            price: parseFloat(foodItem.getAttribute("data-price")),
            quantity: parseInt(foodItem.querySelector(".order-quantity").value),
            fldr: foodItem.getAttribute("data-fldr"),
            img: foodItem.getAttribute("data-img"),
            href: foodItem.getAttribute("data-href"),
          };

          const addedSuccessfully = addFood(foodData);
          if (addedSuccessfully) {
            alert(`${foodData.name} added to cart!`);
          }
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
          return false;
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
      return true;
    }
    
    const cardItemsContainer = document.querySelector(".cart__orders");

    if (!cardItemsContainer) {
      console.warn("Cart container not found. Skipping cart rendering.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0) {
      cardItemsContainer.innerHTML = `<div class="cart__empty">
      <svg class="cart__empty-icon" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0009 21.3201H8.43094C7.33237 21.2923 6.27951 20.8746 5.4606 20.1418C4.64169 19.409 4.11011 18.4088 3.96094 17.3201L2.96094 9.32007" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.9992 9.32007L20.6992 11.8201" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 9.32004C8.81444 7.20973 15.1856 7.20973 21 9.32004" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.42969 8.34006L9.0797 3.32007" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5699 8.34006L14.9199 3.32007" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 21.8201L22 15.8201" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 15.8201L22 21.8201" stroke="#1d4ed8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <h2 class="cart__empty-text">Your cart is currently empty</h2>
    </div>
    <a class="cart__empty-btn btn" href="/src/pages/menu/menu.html">CONTINUE TO MENU</a>`;
      document.getElementById("placeOrder").classList.remove("btn");
      document.getElementById("placeOrder").classList.add("btn-disabled");
      document.getElementById("placeOrder").disable = true;
      document.getElementById("placeOrder").style.opacity = "0.5";
      document.getElementById("placeOrder").style.cursor = "not-allowed";

      return;

    } else {
      document.getElementById("placeOrder").classList.remove("btn-disabled");
      document.getElementById("placeOrder").classList.add("btn");
      document.getElementById("placeOrder").disable = false;
      document.getElementById("placeOrder").style.opacity = "1";
      document.getElementById("placeOrder").style.cursor = "pointer";
    }

    cart.forEach(item => {
      const cartItem = document.createElement("div");
    
      cartItem.classList.add("cart__item");
      cartItem.innerHTML = `
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
              data-src="/${item.fldr}/${item.img}"
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

        updateCartTotal();
      });

      document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(this.getAttribute("data-id"));
            this.parentElement.remove();

            updateCartTotal();
        });
      });
    });

    function removeFromCart(id) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));

      if(cart.length < 1) {
        window.location.reload();
      }
    }

    function updateCartTotal() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
      document.querySelector(".cart__total-list-right p:nth-child(1)").textContent = `₱${subtotal.toFixed(2)}`;
      document.querySelector(".cart__total-price").textContent = `₱${subtotal.toFixed(2)}`;
    }

    updateCartTotal();
  }
}

export default addToCart;