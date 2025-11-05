const boutonsJaunes = document.querySelectorAll('[id^="boutonJaune"]');

boutonsJaunes.forEach(bouton => {
  const topLine = bouton.querySelector('.top-line');

bouton.addEventListener('click', () => {
    topLine.classList.add('active');
    setTimeout(() => {
      topLine.classList.remove('active');
    }, 5000); // 5 secondes
  });
});

// On crée une feuille CSS interne, donc même origine
const style = document.createElement('style');
document.head.appendChild(style);

style.textContent = `
  #sys *, #canal *, #num *, #sortie *, #annuaire *, #groupe *, #rss *, #ac *, #regul *, #volplus *, #volmoins *, #test * {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;

const powerBtn = document.querySelector('.btn-power');
let powerOn = false; // état du système

powerBtn.addEventListener('click', () => {
  if (!powerOn) {
   style.textContent = `
     #sys *, #canal *, #num *, #sortie *, #annuaire *, #groupe *, #rss *, #ac *, #regul *, #volplus *, #volmoins *, #test * {
       visibility: visible;
       opacity: 1;
       transition: opacity 0.5s ease;
     }
   `;
 } else {
   style.textContent = `
     #sys *, #canal *, #num *, #sortie *, #annuaire *, #groupe *, #rss *, #ac *, #regul *, #volplus *, #volmoins *, #test *  {
       visibility: hidden;
       opacity: 0;
       transition: opacity 0.5s ease;
     }
   `;
 }
 powerOn = !powerOn;
});
