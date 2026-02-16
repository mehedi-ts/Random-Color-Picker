const btnEl = document.getElementById("btn");
const boxEl = document.getElementById("box");
const codeBox = document.getElementById("c-box");

btnEl.addEventListener("click", function () {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  const rgb = `rgb(${R}, ${G}, ${B})`;

  boxEl.style.backgroundColor = rgb;
  codeBox.innerText = rgb;
});
