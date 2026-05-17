// NAVBAR & MOBILE MENU
const wrapper = document.getElementById("nav-wrapper");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let ticking = false;

// Scroll navbar effect
window.addEventListener("scroll", () => {
  if (!ticking) {

    window.requestAnimationFrame(() => {

      if (window.scrollY > 20) {

        wrapper.classList.add(
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


// ACTIVE NAVBAR
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        navLinks.forEach((link) => {

          link.classList.remove(
            "text-orange-500",
            "font-semibold"
          );

          link.classList.add(
            "text-gray-500"
          );

          if (
            link.getAttribute("href") === `#${entry.target.id}`
          ) {

            link.classList.remove("text-gray-500");

            link.classList.add(
              "text-orange-500",
              "font-semibold"
            );
          }
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});