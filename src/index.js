import './sass/main.scss'; //custom sass styles
import AOS from 'aos'; //animate on scroll JavaScript
import 'aos/dist/aos.css'; //animate on scroll CSS styles
import MoveTo from 'moveto'; //allows for smooth scrolling between content sections within the document



//Initialize and configure the AOS (Animate on Scroll) library:
AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  delay: 150,
  once: true,
  anchorPlacement: 'bottom-bottom',
  offset: 100,
});


//Initialize and configure MoveTo.js smooth scrolling library:
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

// Loop through inputs and textareas;
for(let input of inputs) {
  // Just before submit, the invalid event will fire, add .error class;
  input.addEventListener('invalid', (event) => {
    input.classList.add('error');    
  }, false);
  
  // Immediately add the .error class if input field is invalid;
  input.addEventListener('blur', (event) => {
    input.checkValidity();
  })
}

// When #button-translate is clicked:
document.querySelector('#button-translate').addEventListener('click', () => {
  const japanese = '東京には好きなことがたくさんあったけど、その中でも特に好きなのはラーメンと桜と駅の発車メロディでした。';
  const english = 'There were many things I liked about Tokyo, but what I loved most was the ramen, the cherry blossoms, and the chime of my train-stop.';
  let translatableText = document.getElementById('translatable-text');
  let translateBtn = document.getElementById('button-translate');
  let btnText = document.getElementById('button-translate-text')

  //Trigger the .flip-in-hor-bottom and .fade-in animations;
  if(!translateBtn.classList.contains('flip-in-hor-bottom')) {
    translateBtn.classList.add('flip-in-hor-bottom');
    translatableText.classList.add('fade-in');

    // Remove .flip-in-hor-bottom and .fade-in after 0.601 seconds (animation duration is 0.6 seconds);
    setTimeout(function(){
      translateBtn.classList.remove('flip-in-hor-bottom');
      translatableText.classList.remove('fade-in');
    }, 601);
  } 

  //If the text is Japanese, change it to English;
  if (translatableText.textContent === japanese) {
    translatableText.textContent = english;
    translatableText.setAttribute('lang', 'en-US');
    translateBtn.style.backgroundImage = 'url(assets/images/icon-translate-japanese.svg)';
    btnText.textContent = 'Translate English text to Japanese';

  //If the text is English, change it to Japanese;
  } else {
    translatableText.textContent = japanese;
    translatableText.setAttribute('lang', 'ja-jp');
    translateBtn.style.backgroundImage = 'url(assets/images/icon-translate-english.svg)';
    btnText.textContent = 'Translate Japanese text to English';
  }
});

// When a .button-project is clicked:
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have .button-project, immediately exit the function;
	if (!event.target.matches('.button-project')) return;

	//Store the .button-project that was clicked;
	let projectBtn = event.target;
  let projectBtnText = projectBtn.childNodes[0];

  //Animate .button-project with .flip-in-hor-bottom;
  if(!projectBtn.classList.contains('flip-in-hor-bottom')) {
    projectBtn.classList.add('flip-in-hor-bottom');

    // Remove .flip-in-hor-bottom after 0.601 seconds (animation duration is 0.6 seconds);
    setTimeout(function(){
      projectBtn.classList.remove('flip-in-hor-bottom');
    }, 601);
  }

  //If the button's background-image is the info icon, change it to back-arrow icon;
  if (projectBtnText.textContent === 'Read project caption') {
    projectBtn.style.backgroundImage = 'url(assets/images/icon-back-arrow.svg)';
    projectBtnText.textContent = 'View project image';
  }

  //If the button's background-image is the back-arrow icon, change it to info icon;
  else {
    projectBtn.style.backgroundImage = 'url(assets/images/icon-info.svg)';
    projectBtnText.textContent = 'Read project caption';
  }
}, false);


