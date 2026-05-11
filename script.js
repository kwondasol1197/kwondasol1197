// script.js

window.addEventListener("scroll", () => {

  const cards = document.querySelectorAll(
    ".card, .project-card, .skill-card"
  );

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.classList.add("show");
    }

  });

});

console.log("KWONDASOL PORTFOLIO LOADED");
