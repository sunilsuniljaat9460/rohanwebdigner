// ===============================
// COMMON.JS
// For global animations & effects
// ===============================

// Text Reveal on Scroll
const revealTexts = document.querySelectorAll(".reveal-text");

function handleReveal() {
  revealTexts.forEach((text) => {
    const top = text.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      text.classList.add("revealed");
    }
  });
}
window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Rotate on Scroll Effect
const rotatingElements = document.querySelectorAll(".rotate-on-scroll");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  rotatingElements.forEach((el, i) => {
    el.style.transform = `rotate(${scroll * 0.2}deg)`;
  });
});

// Floating Bubbles Background
function createBubbles() {
  const bubbleArea = document.querySelector(".bubble-background");
  if (!bubbleArea) return;

  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement("span");
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = bubble.style.height = `${10 + Math.random() * 30}px`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    bubbleArea.appendChild(bubble);
  }
}
window.addEventListener("load", createBubbles);
// aos-init.js
AOS.init({
  duration: 800,
  offset: 120,
  once: true,
});
