import './sass/main.scss'; //custom sass styles
import AOS from 'aos'; //animate on scroll JavaScript
import 'aos/dist/aos.css'; //animate on scroll CSS styles
import MoveTo from 'moveto'; //allows for smooth scrolling between content sections within the document



//Initialize and configure the AOS (Animate on Scroll) library
AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  delay: 150,
  once: true,
  anchorPlacement: 'bottom-bottom',
  offset: 100,
});


//Initialize and configure MoveTo.js smooth scrolling library
document.addEventListener('DOMContentLoaded', function(){
  const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
  }
  const moveTo = new MoveTo({
    ease: 'easeInQuad'
  }, easeFunctions);
  const triggers = document.getElementsByClassName('trigger-scroll');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});

/*
The following form validation code was written by Dave Rupert
https://daverupert.com/2017/11/happier-html5-forms/
*/

//.contact-form validation:
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

// When #button-translate is clicked:
document.querySelector('#button-translate').addEventListener('click', () => {
  const japanese = '東京には好きなことがたくさんあったけど、その中でも特に好きなのはラーメンと桜と駅の発車メロディでした。';
  const english = 'There were many things I liked about Tokyo, but what I loved most was the ramen, the cherry blossoms, and the chime of my train-stop.';
  let translatableText = document.getElementById('translatable-text');
  let translateBtnImg = document.getElementById('button-translate-img');
  let animateBtn = document.getElementById('button-translate');
  let animateText = translatableText;

  //Trigger the .flip-in-hor-bottom and .fade-in animations;
  if(!animateBtn.classList.contains('flip-in-hor-bottom')){
    animateBtn.classList.add('flip-in-hor-bottom');
    animateText.classList.add('fade-in');
    // Remove .flip-in-hor-bottom and .fade-in after 0.601 seconds (animation duration is 0.6 seconds);
    setTimeout(function(){
      animateBtn.classList.remove('flip-in-hor-bottom');
      animateText.classList.remove('fade-in');
    }, 601);
  } 

  //If the text is Japanese, change it to English;
  if (translatableText.textContent === japanese) {
    translatableText.textContent = english;
    translatableText.setAttribute('lang', 'en-US');
    translateBtnImg.src = 'assets/images/icon-translate-japanese.svg';
    translateBtnImg.alt = "Translate text to Japanese button";

  //If the text is English, change it to Japanese;
  } else {
    translatableText.textContent = japanese;
    translatableText.setAttribute('lang', 'ja-jp');
    translateBtnImg.src = 'assets/images/icon-translate-english.svg';
    translateBtnImg.alt = "Translate text to English button";
  }
});
