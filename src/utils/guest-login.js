const guestLogin = () => {
  if (!localStorage.getItem("loggedIn")) {
    localStorage.setItem("loggedIn", "false");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const guestLoginBtn = document.querySelector(".header__signin");
    const headerCart = document.querySelector(".header__cart");
    const mobileNavLogin = document.querySelector(".mobile-nav__signin");
    const mobileNavCart = document.querySelector(".mobile-nav__cart");
    const menuLoginBtn = document.querySelector(".menu-header__signin");
    const menuHeaderCart = document.querySelector(".menu-header__cart");
    const mobileMenuLogin = document.querySelector(".menu-mobile-nav__signin");
    const mobileMenuCart = document.querySelector(".menu-mobile-nav__cart");
    const headerCartIndicator = document.querySelector(".header__cart-indicator");

    const cartName = document.getElementById("cartName");
    const cartEmail = document.getElementById("cartEmail");
    const cartAddress = document.getElementById("cartAddress");
    const cartContact = document.getElementById("cartContact");

    const guestUser = JSON.parse(localStorage.getItem("guestUser"));
    const loggedIn = localStorage.getItem("loggedIn");

    const toggleVisibility = (element, show) => {
      if (element) {
        element.style.display = show ? "flex" : "none";
      }
    };

    if (loggedIn === "true") {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

      toggleVisibility(guestLoginBtn, false);
      toggleVisibility(headerCart, true);
      toggleVisibility(mobileNavLogin, false);
      toggleVisibility(mobileNavCart, true);
      toggleVisibility(menuLoginBtn, false);
      toggleVisibility(menuHeaderCart, true);
      toggleVisibility(mobileMenuLogin, false);
      toggleVisibility(mobileMenuCart, true);
      toggleVisibility(headerCartIndicator, true);

      if(document.body.classList.contains("menu")) {
        if(totalQuantity < 1) {
          menuHeaderCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">0</div>`);
          mobileMenuCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">0</div>`);
        } 
        
        else if(totalQuantity >= 1 && totalQuantity <= 99) {
          menuHeaderCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">${totalQuantity}</div>`);
          mobileMenuCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">${totalQuantity}</div>`);
        } 
        
        else {
          menuHeaderCart.insertAdjacentHTML("beforeend", `<div  class="header__cart-indicator">99+</div>`);
          mobileMenuCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">99+</div>`);
        }

      } 
      
      else if(!document.body.classList.contains("menu") && !document.body.classList.contains("sign-in")) {
        if(totalQuantity < 1) {
          headerCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">0</div>`);
          mobileNavCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">0</div>`);
        } 
        
        else if(totalQuantity >= 1 && totalQuantity <= 99) {
          headerCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">${totalQuantity}</div>`);
          mobileNavCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">${totalQuantity}</div>`);
        } 
        
        else if(totalQuantity > 99){
          headerCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">99+</div>`);
          mobileNavCart.insertAdjacentHTML("beforeend", `<div class="header__cart-indicator">99+</div>`);
        }
      }

      if (cartName) cartName.textContent = guestUser?.name || "";
      if (cartEmail) cartEmail.textContent = guestUser?.email || "";
      if (cartAddress) cartAddress.textContent = guestUser?.address || "";
      if (cartContact) cartContact.textContent = guestUser?.contact || "";
    } else {
      toggleVisibility(guestLoginBtn, true);
      toggleVisibility(headerCart, false);
      toggleVisibility(mobileNavLogin, true);
      toggleVisibility(mobileNavCart, false);
      toggleVisibility(menuLoginBtn, true);
      toggleVisibility(menuHeaderCart, false);
      toggleVisibility(mobileMenuLogin, true);
      toggleVisibility(mobileMenuCart, false);
      toggleVisibility(headerCartIndicator, false);
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if(confirm("Are you sure you want to log out?")) {
          localStorage.removeItem("guestUser");
          localStorage.removeItem("cart");
          localStorage.setItem("loggedIn", "false");
  
          window.location.href = "/index.html";
          alert("You have been logged out as a guest.");
        }
      });
    }

    if (document.body.classList.contains("sign-in")) {
      const guestForm = document.getElementById("guestForm");
      const guestContactInput = document.getElementById("guestContact");
      const editForm = document.getElementById("editForm");

      if (guestContactInput) {
        guestContactInput.addEventListener("input", (e) => {
          const input = e.target;
          const contactRegex = /^[0-9]+$/;

          if (!contactRegex.test(input.value)) {
            input.setCustomValidity("Please input numeric characters only.");
          } else {
            input.setCustomValidity("");
          }
          input.reportValidity();
        });
      }

      if (guestForm) {
        guestForm.addEventListener("submit", (e) => {
          e.preventDefault();

          const guestName = document.getElementById("guestName").value;
          const guestEmail = document.getElementById("guestEmail").value;
          const guestAddress = document.getElementById("guestAddress").value;
          const guestContact = document.getElementById("guestContact").value;

          const guestData = {
            name: guestName,
            email: guestEmail,
            address: guestAddress,
            contact: guestContact,
          };

          localStorage.setItem("guestUser", JSON.stringify(guestData));
          localStorage.setItem("loggedIn", "true");

          window.location = document.referrer;
        });
      }

      if (editForm) {
        const guestUser = JSON.parse(localStorage.getItem("guestUser")) || {};
      
        document.getElementById("guestName").value = guestUser.name || "";
        document.getElementById("guestEmail").value = guestUser.email || "";
        document.getElementById("guestAddress").value = guestUser.address || "";
        document.getElementById("guestContact").value = guestUser.contact || "";
      
        editForm.addEventListener("submit", (e) => {
          e.preventDefault();
      
          const guestName = document.getElementById("guestName").value;
          const guestEmail = document.getElementById("guestEmail").value;
          const guestAddress = document.getElementById("guestAddress").value;
          const guestContact = document.getElementById("guestContact").value;
      
          const guestData = {
            name: guestName,
            email: guestEmail,
            address: guestAddress,
            contact: guestContact,
          };
      
          localStorage.setItem("guestUser", JSON.stringify(guestData));
      
          window.location = document.referrer;
        });
      }
      
    }
  });
};

export default guestLogin;