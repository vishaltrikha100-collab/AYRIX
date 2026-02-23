// Logo typing (YRIX only)
const logoText = "AYRIX";
let logoIndex = 0;
const logoTarget = document.getElementById("logo-type");

// Caption typing
const text = "Because every little beginning deserves gentle care through the first days, weeks, and moments that matter most.";
let index = 0;
const speed = 40;
const target = document.getElementById("typing-text");

function typeLogo() {
  if (logoIndex < logoText.length) {
    logoTarget.innerHTML += logoText.charAt(logoIndex);
    logoIndex++;
    setTimeout(typeLogo, 120);
  } else {
    typeText(); // start caption after logo
  }
}

function typeText() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

window.addEventListener("load", typeLogo);
