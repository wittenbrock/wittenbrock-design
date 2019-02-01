import './sass/main.scss';


// When the translate button is clicked:
document.querySelector('.translate-button').addEventListener('click', () => {
  const japanese = "東京には好きなことがたくさんあったけど、その中でも特に好きなのはラーメンと桜と駅の発車メロディでした。";
  const english = "There were many things I liked about Tokyo, but what I loved most was the ramen, the cherry blossoms, and the chime of my train-stop.";
  let visibleText = document.getElementById("visible-text");
  
  if (visibleText.textContent === japanese) {
    visibleText.textContent = english;
    visibleText.setAttribute("lang", "en-US")
  } else {
    visibleText.textContent = japanese;
    visibleText.setAttribute("lang", "ja-jp");
  }
});