const sliderR = document.getElementById("R");
const sliderG = document.getElementById("G");
const sliderB = document.getElementById("B");
const sliders = document.querySelector(".slidecontainer");
const outputR = document.getElementById("R-output");
const outputG = document.getElementById("G-output");
const outputB = document.getElementById("B-output");
const outputHex = document.getElementById("hex");
let r = 0;
let g = 0;
let b = 0;

//個別將紅、綠、藍由數字轉為二位代碼
const rgbToHex = function (rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

//將紅、綠、藍的二位代碼組合起來，顯示於output並改變背景顏色
const fullColorHex = function(r,g,b) {   
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  let hexCode = `#${red}${green}${blue}`
  //console.log(hexCode)
  outputHex.textContent = hexCode
  document.body.style.background = hexCode;
};

// Update the current slider value (each time you drag the slider handle)
sliders.addEventListener('input', event => {
    const target = event.target
    if (target.matches('#R')){
      outputR.textContent = target.value
      r = Number(outputR.textContent)
    } else if (target.matches('#G')){
      outputG.textContent = sliderG.value
      g = Number(outputG.textContent)
    } else if (target.matches('#B')){
      outputB.textContent = sliderB.value
      b = Number(outputB.textContent) 
    }
    //console.log(r, g, b)
    fullColorHex(r, g, b)
  })
  