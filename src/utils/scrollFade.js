export function initScrollFade() {
  const elements = document.querySelectorAll('.fade-in');

  function checkPosition() {
    const windowBottom = window.innerHeight + window.scrollY;
    elements.forEach(el => {
      if (el.offsetTop < windowBottom - 100) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('load', checkPosition);
}
