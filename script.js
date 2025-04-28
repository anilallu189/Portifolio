const typedText = document.getElementById('typed-text');
const phrases = ['Full Stack .NET Developer', 'C# | MVC | Web API', 'Angular | Azure | SQL'];
let index = 0;
let charIndex = 0;
let currentPhrase = '';
let isDeleting = false;

function typeEffect() {
  currentPhrase = phrases[index];

  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
