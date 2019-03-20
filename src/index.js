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

/*
The following form validation code was written by Dave Rupert
https://daverupert.com/2017/11/happier-html5-forms/
*/

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
document.querySelector('.button-translate').addEventListener('click', () => {
  const japanese = '東京には好きなことがたくさんあったけど、その中でも特に好きなのはラーメンと桜と駅の発車メロディでした。';
  const english = 'There were many things I liked about Tokyo, but what I loved most was the ramen, the cherry blossoms, and the chime of my train-stop.';
  let translatableText = document.getElementById('translatable-text');
  let translateBtnImg = document.getElementById('button-translate-img');

  if (translatableText.textContent === japanese) {
    translatableText.textContent = english;
    translatableText.setAttribute('lang', 'en-US')
    translateBtnImg.src = 'assets/images/icon-translate-japanese.svg';
    translateBtnImg.alt = "Translate text to Japanese button"
  } else {
    translatableText.textContent = japanese;
    translatableText.setAttribute('lang', 'ja-jp');
    translateBtnImg.src = 'assets/images/icon-translate-english.svg';
    translateBtnImg.alt = "Translate text to English button"
  }
});
