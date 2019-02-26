import './sass/main.scss';
import AOS from 'aos'; //animate on scroll JavaScript
import 'aos/dist/aos.css'; //animate on scroll CSS styles

//Animate On Scroll (AOS) Initialization
AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  delay: 150,
  once: true,
  anchorPlacement: 'bottom-bottom',
  offset: 100,
});

//contact.html form validation:
const inputs = document.querySelectorAll('input, textarea');

// Loop through inputs and textareas
for(let input of inputs) {
  // Just before submit, the invalid event will fire, add .error class
  input.addEventListener('invalid', (event) => {
    input.classList.add('error');    
  }, false);
  
  // Immediately add the .error class if input field is invalid
  input.addEventListener('blur', (event) => {
    input.checkValidity();
  })
}

// When the translate button on index.html is clicked:
document.querySelector('.translate-button').addEventListener('click', () => {
  const japanese = '東京には好きなことがたくさんあったけど、その中でも特に好きなのはラーメンと桜と駅の発車メロディでした。';
  const english = 'There were many things I liked about Tokyo, but what I loved most was the ramen, the cherry blossoms, and the chime of my train-stop.';
  let visibleText = document.getElementById('visible-text');
  
  if (visibleText.textContent === japanese) {
    visibleText.textContent = english;
    visibleText.setAttribute('lang', 'en-US')
  } else {
    visibleText.textContent = japanese;
    visibleText.setAttribute('lang', 'ja-jp');
  }
});
