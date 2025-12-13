/* ===============================
   Portfolio Interactivity Script
   Author: Testimony Abiola
================================ */

/* --------- Dark Mode Toggle --------- */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

/* --------- Footer Year --------- */

const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

/* --------- Optional: Subtle Reveal Effect ---------
   Keeps it minimal and internship-safe
-------------------------------------------------- */

const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

// Initial hidden state (handled here, not CSS-heavy)
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load
