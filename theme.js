const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "🌙 Dark";
} else {
    toggleBtn.textContent = "☀️ Light";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Light";
    }
});
