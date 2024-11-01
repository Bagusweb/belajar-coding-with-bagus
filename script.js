AOS.init();

// JavaScript untuk formulir kontak
const kontakForm = document.getElementById('kontakForm');
const responseMessage = document.getElementById('responseMessage');

kontakForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Menghentikan pengiriman form default

  // Tampilkan pesan sukses
  responseMessage.style.display = 'block';

  // Reset form setelah submit
  kontakForm.reset();
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');

// Tampilkan menu tanpa delay
mobileMenu.classList.toggle('show');
});


const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
const randomDuration = Math.random() * 10 + 10; // Duration between 10-20s
circle.style.animationDuration = `${randomDuration}s`;
});

