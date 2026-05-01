const button = document.getElementById("themeToggle");
const root = document.documentElement;

// Verifica preferência salva ou do sistema
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  root.setAttribute("data-theme", "light");
}

if (button) {
    button.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
}
