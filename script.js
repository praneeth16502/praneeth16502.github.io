// Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Section reveal animation
const sections = document.querySelectorAll(".section-hidden");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  if (scrollY <= heroHeight) {
    const fadeFactor = Math.min(scrollY / heroHeight, 1);

    hero.style.setProperty("--g-start", 0.9 - fadeFactor * 0.4);
    hero.style.setProperty("--g-mid", 0.55 - fadeFactor * 0.3);
    hero.style.setProperty("--g-light", 0.15 - fadeFactor * 0.1);
  }
});

});

