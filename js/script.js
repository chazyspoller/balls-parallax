// Parallax Balls

const parallaxElements = document.querySelectorAll('.parallax');
const parallaxSection = document.querySelector('.flying-intro');

let xValue = 0, yValue = 0;

const activateParallax = (evt) => {
  xValue = evt.clientX - window.innerWidth / 2;
  yValue = evt.clientY - window.innerHeight / 2;

  parallaxElements.forEach(el => {
    const speedX = el.dataset.speedx;
    const speedY = el.dataset.speedy;

    el.style.transform =
      `translate3d(calc(-50% + ${-xValue * speedX}px), calc(-50% + ${-yValue * speedY}px), 0)`;
  });

  setTimeout(() => {
    if (evt.clientX === (xValue + window.innerWidth / 2) && evt.clientY === (yValue + window.innerHeight / 2)) {
      parallaxElements.forEach(el => {
        if (!el.classList.contains('flying-intro__back')) {
          el.style.transform += `scale(0.9)`;
        }
      });
    }
  }, 100);
};

window.addEventListener('mousemove', activateParallax);

//parallaxSection.addEventListener('mouseover', (evt) => {
//  window.addEventListener('mousemove', activateParallax);
//});

//parallaxSection.addEventListener('mouseleave', (evt) => {
//  window.removeEventListener('mousemove', activateParallax);
//});