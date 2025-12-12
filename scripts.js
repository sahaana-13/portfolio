document.addEventListener("DOMContentLoaded", () => {

  /* SCROLL REVEAL */
  const revealElems = document.querySelectorAll('.card, .section-title, .proj, .skill-card, .flashcard-horizontal');
  revealElems.forEach(e => {
    e.style.opacity = 0;
    e.style.transform = "translateY(20px)";
    e.style.transition = "0.8s ease";
  });

  function reveal() {
    revealElems.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  }
  window.addEventListener("scroll", reveal);
  reveal();


  /* TYPEWRITER EFFECT */
  /* TYPEWRITER FOR SUBTITLE ONLY */
const typeTarget = document.getElementById("typewriter");
const words = [
  "Aspiring Software Engineer",
  "Front-end Developer",
  "Web Developer",
  "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 120;

function typeEffect() {
  const word = words[wordIndex];

  if (!isDeleting) {
    typeTarget.textContent = word.substring(0, charIndex++);
  } else {
    typeTarget.textContent = word.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === word.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();



  /* CONTACT FORM SIMULATION */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! (Simulated)");
    form.reset();
  });

});
/* ABOUT SECTION REVEAL ANIMATION */
const aboutBox = document.querySelector(".about-glass");

function revealAbout() {
  const boxTop = aboutBox.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight - 120) {
    aboutBox.style.opacity = "1";
    aboutBox.style.transform = "translateY(0) scale(1)";
  }
}

window.addEventListener("scroll", revealAbout);
revealAbout();
