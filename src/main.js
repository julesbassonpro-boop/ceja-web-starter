import './styles.css';

const button = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

if (button && nav) {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
}
