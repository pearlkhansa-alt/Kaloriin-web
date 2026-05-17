// ================= NAVBAR =================
const wrapper = document.getElementById("nav-wrapper");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// scroll effect
window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        wrapper.classList.add("nav-scrolled");

    } else {

        wrapper.classList.remove("nav-scrolled");
    }

});

// mobile menu
menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


// ================= LIKE BUTTON =================
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const icon = button.querySelector('i');

        // cek apakah sudah like
        if (icon.classList.contains('ri-heart-line')) {

            icon.classList.remove('ri-heart-line', 'text-gray-400');

            icon.classList.add('ri-heart-fill', 'text-red-500');

            button.classList.add('scale-125');

            setTimeout(() => {

                button.classList.remove('scale-125');

            }, 150);

        } else {

            icon.classList.remove('ri-heart-fill', 'text-red-500');

            icon.classList.add('ri-heart-line', 'text-gray-400');

        }

    });

});


// ================= FILTER =================
const filterButtons = document.querySelectorAll('.filter-btn');
const foodCards = document.querySelectorAll('.food-card');

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        // hapus active semua button
        filterButtons.forEach((btn) => {

            btn.classList.remove(
                'active-filter',
                'bg-green-700',
                'text-white'
            );

        });

        // tambahkan active ke button yg diklik
        button.classList.add(
            'active-filter',
            'bg-green-700',
            'text-white'
        );

        // ambil kategori
        const filterValue = button.dataset.filter;

        // loop semua card
        foodCards.forEach((card) => {

            const cardCategory = card.dataset.category;

            // tampilkan semua
            if (filterValue === 'all') {

                card.style.display = 'block';

            }

            // tampilkan sesuai kategori
            else if (cardCategory === filterValue) {

                card.style.display = 'block';

            }

            // sembunyikan yg lain
            else {

                card.style.display = 'none';

            }

        });

    });

});