var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('random');

onload = function () {
  color1.value = '#FF0000';
  color2.value = '#FFFF00';
  setGradient();
};

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomBtn.addEventListener('click', function () {
  color1.value = getRandomHex();
  color2.value = getRandomHex();
  setGradient();
});

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background;
}

function getRandomHex() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  inroduce() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
