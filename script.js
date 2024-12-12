// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Button für die Einführung
const enterBtn = document.getElementById("enter-btn");
const introSection = document.getElementById("intro");

enterBtn.addEventListener("click", () => {
    introSection.style.display = "none"; // Entfernt die Einführung
});
