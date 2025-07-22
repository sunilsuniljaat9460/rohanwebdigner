// about.js

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skill.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });

    skill.addEventListener('mouseleave', () => {
      skill.style.boxShadow = 'none';
    });
  });

  console.log("✅ About section loaded.");
});
