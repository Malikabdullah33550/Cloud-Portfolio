function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggle = document.getElementById("theme-toggle");
let originalStyles = new Map();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const allElements = document.querySelectorAll("*");

  if (document.body.classList.contains("dark-mode")) {
    allElements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const bgColor = computedStyle.backgroundColor;

      // Store original colors if not already stored
      if (!originalStyles.has(element)) {
        originalStyles.set(element, {
          color: color,
          backgroundColor: bgColor,
        });
      }

      // Apply dark mode colors
      if (color !== "rgb(255, 255, 255)") {
        element.style.color = "white";
      }
      if (bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "rgb(255, 255, 255)") {
        element.style.backgroundColor = "#121212";
      }
    });

    themeToggle.textContent = "☀️"; // Light mode icon
  } else {
    // Restore original styles
    allElements.forEach((element) => {
      if (originalStyles.has(element)) {
        element.style.color = originalStyles.get(element).color;
        element.style.backgroundColor =
          originalStyles.get(element).backgroundColor;
      }
    });

    themeToggle.textContent = "🌙"; // Dark mode icon
  }
});
