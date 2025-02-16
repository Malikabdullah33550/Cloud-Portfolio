function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = "🌙";
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = "☀️";
  }
});
