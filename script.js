const greenSlider = document.getElementById("greenColor");
const redSlider = document.getElementById("redColor");

const greenStripe = document.getElementById("greenStripe");
const redStripe = document.getElementById("redStripe");

const greenHex = document.getElementById("greenHex");
const redHex = document.getElementById("redHex");

// El verde modifica ÚNICAMENTE G de RGB: rgb(0, G, 0)
function updateGreen() {
  const g = Number(greenSlider.value);
  const hex = rgbToHex(0, g, 0);

  greenStripe.style.backgroundColor = `rgb(0, ${g}, 0)`;
  greenHex.textContent = hex;
}

// El rojo modifica ÚNICAMENTE R de RGB: rgb(R, 0, 0)
function updateRed() {
  const r = Number(redSlider.value);
  const hex = rgbToHex(r, 0, 0);

  redStripe.style.backgroundColor = `rgb(${r}, 0, 0)`;
  redHex.textContent = hex;
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b]
    .map(value => value.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

greenSlider.addEventListener("input", updateGreen);
redSlider.addEventListener("input", updateRed);

updateGreen();
updateRed();
