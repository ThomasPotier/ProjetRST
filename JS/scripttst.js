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
