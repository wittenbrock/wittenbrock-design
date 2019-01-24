import './sass/main.scss';

// When the translate button is clicked:
document.querySelector('.translate-button').addEventListener('click', () => {
  const japanese = "人生のミッションは、世界一のラーメン屋さんを見つけること。";
  const english = "This is an English translation.";
  let visibleText = document.getElementById("visible-text");
  
  if (visibleText.innerHTML === japanese) {
    visibleText.innerHTML = english;
  } else {
    visibleText.innerHTML = japanese;
  }
});