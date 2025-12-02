
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.getElementById("theme-toggle").textContent =
        document.body.classList.contains("light-theme") ? "🌙 Dark" : "🌞 Light";
});


const fortunes = [
    "Great things are coming your way.",
    "Your hard work will pay off soon.",
    "Patience brings rewards.",
    "Someone will appreciate your skills.",
    "An unexpected opportunity is near.",
    "Trust your instincts — they're right.",
    "A new project will excite you.",
    "Your creativity will take you far."
];

document.getElementById("fortune-btn").addEventListener("click", () => {
    const random = Math.floor(Math.random() * fortunes.length);
    alert("🥠 Your Fortune:\n\n" + fortunes[random]);
});
