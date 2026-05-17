// NAVBAR & MOBILE MENU
const wrapper = document.getElementById("nav-wrapper");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let ticking = false;

// Scroll navbar
window.addEventListener("scroll", () => {
  if (!ticking) {

    window.requestAnimationFrame(() => {

      if (window.scrollY > 20) {

        wrapper.classList.add(
          "bg-white/90",
          "backdrop-blur-xl",
          "shadow-lg",
          "translate-y-1",

          // desktop only
          "md:max-w-[1100px]",
          "md:mx-auto",
          "md:mt-2",
          "md:rounded-full",

          // mobile tetap full
          "border-b",
          "border-gray-100"
        );

      } else {

        wrapper.classList.remove(
          "bg-white/90",
          "backdrop-blur-xl",
          "shadow-lg",
          "translate-y-1",

          "md:max-w-[1100px]",
          "md:mx-auto",
          "md:mt-2",
          "md:rounded-full",

          "border-b",
          "border-gray-100"
        );
      }

      ticking = false;
    });

    ticking = true;
  }
});

// Mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});