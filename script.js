const revealElements = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");
const heroPanel = document.querySelector(".hero-panel");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => observer.observe(element));

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", event => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;

  if (heroPanel && window.innerWidth > 1100) {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * -10;
    heroPanel.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg)`;
  }
});

window.addEventListener("mouseleave", () => {
  if (heroPanel) {
    heroPanel.style.transform = "";
  }
});

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navLinks.forEach(link => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  {
    threshold: 0.45
  }
);

sections.forEach(section => sectionObserver.observe(section));

console.log("[portfolio] developer mode enabled");
