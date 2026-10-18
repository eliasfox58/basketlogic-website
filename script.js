const menuButton = document.querySelector('.menu');
const nav = document.getElementById('main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const signup = document.getElementById('signup');
if (signup) {
  signup.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const subject = encodeURIComponent('BasketLogic early-access updates');
    const body = encodeURIComponent(
      `Please add me to BasketLogic updates.\nEmail: ${email}\nInterest: ${interest}\n\nI understand this is a request for updates, not confirmation of enrollment.`
    );
    const note = document.getElementById('formnote');
    if (note) note.textContent = 'Your email app should open with a pre-filled request. Send it to complete your request.';
    window.location.href = `mailto:hello@mybasketlogic.com?subject=${subject}&body=${body}`;
  });
}
