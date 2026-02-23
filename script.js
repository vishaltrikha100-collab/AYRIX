const text = "Because every little beginning deserves gentle care through the first days, weeks, and moments that matter most.";
const speed = 45;

let index = 0;
const target = document.getElementById("typing-text");

function typeEffect() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.addEventListener("load", typeEffect);

