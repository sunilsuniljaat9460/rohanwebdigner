// ===============================
// Toggle Day/Night Mode
// ===============================
const toggleBtn = document.getElementById('toggleMode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  body.classList.toggle('day-mode');
  toggleBtn.textContent = body.classList.contains('night-mode') ? '☀️' : '🌙';
});

// ===============================
// Toggle Mobile Menu
// ===============================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
