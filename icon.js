// WhatsApp Floating Button Animation (Polished)
const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
  whatsappBtn.addEventListener('mouseenter', () => {
    whatsappBtn.style.transform = 'scale(1.1)';
  });

  whatsappBtn.addEventListener('mouseleave', () => {
    whatsappBtn.style.transform = 'scale(1)';
  });
}
