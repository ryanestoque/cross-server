const guestLogin = () => {
  if(document.body.classList.contains("sign-in")) {
    document.getElementById("guestContact").addEventListener("input", (e) => {
      const input = e.target;
      const contactRegex = /^[0-9]+$/;
    
      if (!contactRegex.test(input.value)) {
        input.setCustomValidity(`Please input numeric characters only.`);
      } else {
        input.setCustomValidity("");
      }
      input.reportValidity();
    });
      
    document.getElementById("guestForm").addEventListener('submit', (e) => {
      e.preventDefault();

      const guestName = document.getElementById("guestName").value;
      const guestEmail = document.getElementById("guestEmail").value;
      const guestAddress = document.getElementById("guestAddress").value;
      const guestContact = document.getElementById("guestContact").value;
  
      const guestData = {
        name: guestName,
        email: guestEmail,
        address: guestAddress,
        contact: guestContact
      };
  
      localStorage.setItem("guestUser", JSON.stringify(guestData));
      localStorage.setItem("loggedIn", "true");
  
      window.history.back();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const guestLoginBtn = document.querySelector(".header__signin");
    const headerCart = document.querySelector(".header__cart");
    const mobileNavLogin = document.querySelector(".mobile-nav__signin");
    const mobileNavCart = document.querySelector(".mobile-nav__cart");
    const menuLoginBtn = document.querySelector(".menu-header__signin");
    const menuHeaderCart = document.querySelector(".menu-header__cart");
    const mobileMenuLogin = document.querySelector(".menu-mobile-nav__signin");
    const mobileMenuCart = document.querySelector(".menu-mobile-nav__cart");

    const cartName = document.getElementById("cartName");
    const cartEmail = document.getElementById("cartEmail");
    const cartAddress = document.getElementById("cartAddress");
    const cartContact = document.getElementById("cartContact");
    
    const guestUser = JSON.parse(localStorage.getItem("guestUser"));
    const loggedIn = localStorage.getItem("loggedIn");

    if(loggedIn === "true") {
      if(guestLoginBtn) {
        guestLoginBtn.style.display = "none";
      }

      if(headerCart) {
        headerCart.style.display = "flex";
      }

      if(mobileNavLogin) {
        mobileNavLogin.style.display = "none";
      }

      if(mobileNavCart) {
        mobileNavCart.style.display = "flex";
      }

      if(menuLoginBtn) {
        menuLoginBtn.style.display = "none";
      }

      if(menuHeaderCart) {
        menuHeaderCart.style.display = "flex";
      }

      if(mobileMenuLogin) {
        mobileMenuLogin.style.display = "none";
      }

      if(mobileMenuCart) {
        mobileMenuCart.style.display = "flex";
      }

      if(cartName) {
        cartName.textContent = guestUser.name;
      }
      
      if(cartEmail) {
        cartEmail.textContent = guestUser.email;
      }
      
      if(cartAddress) {
        cartAddress.textContent = guestUser.address;
      }
      
      if(cartContact) {
        cartContact.textContent = guestUser.contact;
      }
    }
  });
}

export default guestLogin;