let isPerspectiveActive = true;

const perspectiveCheck = () => {
  const container = document.getElementById("container");
  isPerspectiveActive = document.getElementById("perspectChk").checked;
  if (isPerspectiveActive) {
    changePerspective();
  } else {
    container.style = "";
  }
}

const changePerspective = () => {
  const perspectiveValueElement = document.getElementById("perspectiveValue");
  const perspectiveValue = document.getElementById("perspect").value;
  perspectiveValue > 1000 && (perspectiveValue = 1000);
  perspectiveValue < 180 && (perspectiveValue = 180);
  perspectiveValueElement.textContent = perspectiveValue;
  if (isPerspectiveActive) {
    const container = document.getElementById("container");
    container.style = `perspective: ${perspectiveValue}px;`;
  }
}

const changeRotation = () => {
  const cube = document.getElementById("cube");
  const xValueElement = document.getElementById("rotateXValue");
  const yValueElement = document.getElementById("rotateYValue");
  const zValueElement = document.getElementById("rotateZValue");
  const degreeX = document.getElementById("rotateX").value;
  const degreeY = document.getElementById("rotateY").value;
  const degreeZ = document.getElementById("rotateZ").value;
  xValueElement.textContent = degreeX;
  yValueElement.textContent = degreeY;
  zValueElement.textContent = degreeZ;
  cube.style = `transform: rotateX(${degreeX}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ}deg);`;
}

const changeColor = (el) => {
  const face = document.getElementById(el.id);
  let faceName = (el.id).split("");
  faceName[0] = faceName[0].toUpperCase();
  const newColor = document.getElementById("colorPicker".concat(faceName.join(""))).value;
  const [colorR, colorV, colorB] = convertColor(newColor);
  face.style = `border: 5px solid ${newColor}; background-color: rgba(${colorR}, ${colorV}, ${colorB}, .6)`;
}

const changeColorAlpha = () => {
  const alpha = document.getElementById("colorAlpha").value;
  const alphaValue = document.getElementById("colorAlphaValue");
  alphaValue.textContent = alpha;
  const picker = selectAllInputColor();
  picker.forEach((el) => console.log(el));
}

const selectAllInputColor = () => {
  return document.querySelectorAll("input[type=color]");
}

const convertColor = (colorToConvert) => {
  const [_, rHex, vHex, bHex] = colorToConvert.match(/#(.{2})(.{2})(.{2})/g);
  console.log(first)
  const colorR = parseInt(rHex, 16);
  const colorV = parseInt(vHex, 16);
  const colorB = parseInt(bHex, 16);

  return [colorR, colorV, colorB];
}