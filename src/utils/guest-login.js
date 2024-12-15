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
      toggleVisibility(guestLoginBtn, false);
      toggleVisibility(headerCart, true);
      toggleVisibility(mobileNavLogin, false);
      toggleVisibility(mobileNavCart, true);
      toggleVisibility(menuLoginBtn, false);
      toggleVisibility(menuHeaderCart, true);
      toggleVisibility(mobileMenuLogin, false);
      toggleVisibility(mobileMenuCart, true);

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
    }

    // Handle logout functionality
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if(confirm("Are sure you want to log out?")) {
          localStorage.removeItem("guestUser");
          localStorage.setItem("loggedIn", "false");
  
          window.location.href = "/index.html";
          alert("You have been logged out as a guest.");
        }
      });
    }

    if (document.body.classList.contains("sign-in")) {
      const guestForm = document.getElementById("guestForm");
      const guestContactInput = document.getElementById("guestContact");

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
    }
  });
};

export default guestLogin;