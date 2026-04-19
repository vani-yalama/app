// ==========================
// NAVIGATION (CUSTOMER)
// ==========================

function goToHome() {
  window.location.href = "home.html";
}

function goToCart() {
  window.location.href = "cart.html";
}

function goToReorder() {
  window.location.href = "reorder.html";
}

function goToAccount() {
  window.location.href = "account.html";
}

function goToItems() {
  alert("Redirecting to items page...");
}


// ==========================
// NAVIGATION (STORE)
// ==========================

function goToStoreHome() {
  window.location.href = "store-dashboard.html";
}

function goToStockAlerts() {
  window.location.href = "stock-alerts.html";
}

function goToOrders() {
  window.location.href = "orders.html";
}

function goToStoreAccount() {
  window.location.href = "store-account.html";
}


// ==========================
// LOGIN PAGE LOGIC
// ==========================

document.addEventListener("DOMContentLoaded", function () {

  const customerTab = document.getElementById("customerTab");
  const storeTab = document.getElementById("storeTab");

  const customerLogin = document.getElementById("customerLogin");
  const storeLogin = document.getElementById("storeLogin");

  const customerRegister = document.getElementById("customerRegister");
  const storeRegister = document.getElementById("storeRegister");

  const showCustomerRegister = document.getElementById("showCustomerRegister");
  const showStoreRegister = document.getElementById("showStoreRegister");

  const backToCustomerLogin = document.getElementById("backToCustomerLogin");
  const backToStoreLogin = document.getElementById("backToStoreLogin");


  // Safe check (only run if elements exist)
  if (customerTab && storeTab) {

    // Tab switching
    customerTab.onclick = () => {
      customerLogin.style.display = "block";
      storeLogin.style.display = "none";
      customerRegister.style.display = "none";
      storeRegister.style.display = "none";
    };

    storeTab.onclick = () => {
      storeLogin.style.display = "block";
      customerLogin.style.display = "none";
      customerRegister.style.display = "none";
      storeRegister.style.display = "none";
    };

    // Show register
    if (showCustomerRegister) {
      showCustomerRegister.onclick = () => {
        customerLogin.style.display = "none";
        customerRegister.style.display = "block";
      };
    }

    if (showStoreRegister) {
      showStoreRegister.onclick = () => {
        storeLogin.style.display = "none";
        storeRegister.style.display = "block";
      };
    }

    // Back to login
    if (backToCustomerLogin) {
      backToCustomerLogin.onclick = () => {
        customerRegister.style.display = "none";
        customerLogin.style.display = "block";
      };
    }

    if (backToStoreLogin) {
      backToStoreLogin.onclick = () => {
        storeRegister.style.display = "none";
        storeLogin.style.display = "block";
      };
    }
  }
});


// ==========================
// BASIC ACTIONS
// ==========================

function reorderItems() {
  alert("Items reordered successfully!");
}

function logout() {
  alert("Logged out!");
  window.location.href = "login.html";
}

function editDetails() {
  alert("Edit user details feature coming soon.");
}

function editStoreDetails() {
  alert("Edit store details feature coming soon.");
}


// ==========================
// SIDEBAR TOGGLE (STORE)
// ==========================

const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

if (toggleBtn && sidebar) {
  toggleBtn.onclick = () => {
    sidebar.classList.toggle("active");
  };
}