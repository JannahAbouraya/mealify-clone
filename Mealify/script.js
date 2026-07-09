const navItems = document.querySelectorAll(".navbar__item");
const hamburgerBtn = document.getElementById("hmbrg-icon");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navItems.forEach((nav) => nav.classList.remove("active"));
  });
}

if (navItems) {
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("show-menu");
      }
      if (window.innerWidth > 992) {
        navItems.forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");
      } else {
        navItems.forEach((nav) => nav.className.remove("active"));
      }
    });
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector("i");

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}
