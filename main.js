// MOBILE MENU
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Inject hamburger bars
menuToggle.innerHTML = `
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
`;

menuToggle.classList.add('hamburger');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

// Wireframe Toggle
const wireframeToggle = document.getElementById('wireframeToggle');
if (wireframeToggle) {
  wireframeToggle.addEventListener('click', () => {
    const active = document.body.classList.toggle('wireframe');
    wireframeToggle.setAttribute('aria-pressed', active);
  });
}