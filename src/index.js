import './sass/main.scss'; //custom sass styles
import AOS from 'aos'; //animate on scroll JavaScript
import 'aos/dist/aos.css'; //animate on scroll CSS styles
import MoveTo from 'moveto'; //allows for smooth scrolling between content sections within the document

// Import images used by CSS for background-img: url();
import './assets/images/icons/icon-back-arrow.svg';
import './assets/images/icons/icon-down-arrow.svg';
import './assets/images/icons/icon-info.svg';
import './assets/images/icons/icon-play.svg';
import './assets/images/icons/icon-translate-english.svg';
import './assets/images/icons/icon-translate-japanese.svg';
import './assets/images/icons/social-media-icons/social-github.svg';
import './assets/images/icons/social-media-icons/social-instagram.svg';
import './assets/images/icons/social-media-icons/social-linkedin.svg';

/* 
* -----------------------------------------------------------------------------
* Initialize and configure the AOS (Animate on Scroll) library:
* -----------------------------------------------------------------------------
*/

AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  delay: 150,
  once: true,
  anchorPlacement: 'bottom-bottom',
  offset: 100,
});

/* 
* -----------------------------------------------------------------------------
* Initialize and configure MoveTo.js smooth scrolling library
* -----------------------------------------------------------------------------
*/

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
* -----------------------------------------------------------------------------
* Contact Form Validation
*
* The following form validation code was written by Dave Rupert:
* https://daverupert.com/2017/11/happier-html5-forms/
* -----------------------------------------------------------------------------
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

/* 
* -----------------------------------------------------------------------------
* Helper Functions
*
* show(), hide(), toggleVisibility() are used by the translate button;
* addThenRemoveClass() is used by the translate button and the project button;
* -----------------------------------------------------------------------------
*/

// Show an element. Note: .not-displayed is marked !important in _helpers.scss;
const show = elem => elem.classList.remove('not-displayed');

// Hide an element;
const hide = elem => elem.classList.add('not-displayed');

// Toggle an element's visibility. If the element is not visible, show it. Otherwise, hide it;
const toggleVisibility = elem => elem.classList.contains('not-displayed') ? show(elem) : hide(elem);

// Add a CSS class to an HTML element, then remove it after a duration of time has taken place;
// Accepted inputs are HTML element, string, and number;
const addThenRemoveClass = (elem, cssClass, removalTime) => {
  elem.classList.add(cssClass);

  setTimeout(function(){
    elem.classList.remove(cssClass);
  }, removalTime);
}

/* 
* -----------------------------------------------------------------------------
* The Translate Button
* -----------------------------------------------------------------------------
*/

// When #button-translate is clicked:
document.querySelector('#button-translate').addEventListener('click', () => {
  const japanese = '東京には好きなことがたくさんあったけど、その中でも特に好きなのはラーメンと桜と駅の発車メロディでした。';
  const english = 'There were many things I liked about Tokyo, but what I loved most was the ramen, the cherry blossoms, and the chime of my train-stop.';
  let translatableText = document.getElementById('translatable-text');
  let translateBtn = document.getElementById('button-translate');
  let btnText = document.getElementById('button-translate-text')

  // Animate the button with .flip-in-hor-bottom and the text with .fade-in,
  // then remove them after 0.601s;
  if(!translateBtn.classList.contains('flip-in-hor-bottom')) {
    addThenRemoveClass(translateBtn, 'flip-in-hor-bottom', 601);
    addThenRemoveClass(translatableText, 'fade-in', 601);
  } 

  // If the text is Japanese, change it to English;
  if (translatableText.textContent === japanese) {
    translatableText.textContent = english;
    translatableText.setAttribute('lang', 'en-US');
    translateBtn.style.backgroundImage = 'url(/assets/icon-translate-japanese.svg)';
    btnText.textContent = 'Translate English text to Japanese';

  // If the text is English, change it to Japanese;
  } else {
    translatableText.textContent = japanese;
    translatableText.setAttribute('lang', 'ja-jp');
    translateBtn.style.backgroundImage = 'url(/assets/icon-translate-english.svg)';
    btnText.textContent = 'Translate Japanese text to English';
  }
});

/* 
* -----------------------------------------------------------------------------
* The Project Button
* -----------------------------------------------------------------------------
*/

// When a DOM element is clicked;
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have .button-project, immediately exit the function;
	if (!event.target.matches('.button-project')) return;

	/* 
  * Store the .project-button that was clicked,
  * it's text, it's affiliated .project-img-container, and its .project-caption;
  */
	let projectBtn = event.target;
  let projectBtnText = projectBtn.childNodes[0];
  let projectImg = projectBtn.parentNode.childNodes[1].childNodes[0];
  let projectCaption = projectBtn.parentNode.childNodes[1].childNodes[1];

  // Hide the project image and show the project caption:
  if(projectCaption.classList.contains('not-displayed')) {
    // Animate the project image as it disappears;
    addThenRemoveClass(projectImg, 'slide-out-left', 501);

    // Once the project image has finished animating:
    setTimeout(function(){
      // Hide the project image;
      toggleVisibility(projectImg);
      // Show the project caption;
      toggleVisibility(projectCaption);
      // Animate the project caption as it appears;
      addThenRemoveClass(projectCaption, 'slide-in-right', 501);
    }, 500);
  }

  // Hide the project caption and show the project image:
  else {
    // Animate the project caption as it disappears;
    addThenRemoveClass(projectCaption, 'slide-out-left', 501);

    // Once the project caption has finished animating:
    setTimeout(function(){
      // Hide the project caption;
      toggleVisibility(projectCaption);
      // Show the project image;
      toggleVisibility(projectImg);
      // Animate the project image as it appears;
      addThenRemoveClass(projectImg, 'slide-in-right', 501);
    }, 500);
  }

  // Animate .button-project with .flip-in-hor-bottom;
  if (!projectBtn.classList.contains('flip-in-hor-bottom')) {
    addThenRemoveClass(projectBtn, 'flip-in-hor-bottom', 601);
  }

  // If the button's background-image is the info icon, change it to back-arrow icon;
  if (projectBtnText.textContent === 'Read project caption') {
    projectBtn.style.backgroundImage = 'url(/assets/icon-back-arrow.svg)';
    projectBtnText.textContent = 'View project image';
  }

  // If the button's background-image is the back-arrow icon, change it to info icon;
  else {
    projectBtn.style.backgroundImage = 'url(/assets/icon-info.svg)';
    projectBtnText.textContent = 'Read project caption';
  }
}, false);


