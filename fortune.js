const fortunes = [
    "Good things are coming your way.",
    "Your hard work will pay off soon.",
    "Patience is the key to success.",
    "You will meet someone important this week.",
    "A pleasant surprise is waiting for you.",
    "Your creativity will open new doors.",
    "Trust yourself — you are capable of great things.",
    "New opportunities are on the horizon."
];

document.getElementById("fortune-btn").addEventListener("click", () => {
    const random = Math.floor(Math.random() * fortunes.length);
    alert("🥠 Fortune Cookie:\n\n" + fortunes[random]);
});
