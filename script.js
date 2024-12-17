let btn1 = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#347593";
let rgb2 = "#051937";

const hexValues = () => {
  let myHexaValues = "0123456789abcdef";
  let colors = "#";
  for (let index = 0; index < 6; index++) {
    colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
    // console.log(colors);
  }
  return colors;
};

const handleBtn1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  btn1.innerHTML = rgb1;
  btn1.style.backgroundColor = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
};

const handleBtn2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  btn2.innerHTML = rgb2;
  btn2.style.backgroundColor = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
};

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);

copyDiv.addEventListener("mousemove", () => {
  // Copy the text
  navigator.clipboard.writeText(copyDiv.innerText);
  alert("Text copied to clipboard");
});
