const faceId = ["front", "right", "left", "back", "up", "down"];
let isPerspectiveActive = true;

const perspectiveCheck = () => {
  const container = document.getElementById("container");
  isPerspectiveActive = document.getElementById("perspectChk").checked;
  if (isPerspectiveActive) {
    changePerspective();
  } else {
    container.style.perspective = "none";
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
    container.style.perspective = `${perspectiveValue}px`;
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
  cube.style.transform = `rotateX(${degreeX}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ}deg)`;
}

const textColorModification = () => {
  const cube = document.getElementById("cube");
  const textColor = document.getElementById("colorPickerText").value
  cube.style.color = textColor;
}

const faceColorModification = (el) => {
  changeFaceColor(el.id);
}

const changeFaceColor = (id) => {
  const face = document.getElementById(id);
  const faceName = getFaceName(id);
  const newColor = document.getElementById("colorPicker".concat(faceName)).value;
  const [colorR, colorV, colorB] = convertColor(newColor);
  const alpha = document.getElementById("colorAlpha").value;
  face.style.border = `5px solid ${newColor}`;
  face.style.backgroundColor = `rgba(${colorR}, ${colorV}, ${colorB}, ${alpha})`;
}

const getFaceName = (id) => {
  let faceName = id.split("");
  faceName[0] = faceName[0].toUpperCase();

  return faceName.join("");
}

const changeColorAlpha = () => {
  majAlphaValue();
  faceId.forEach((face) => changeFaceColor(face));
}

const majAlphaValue = () => {
  let alpha = document.getElementById("colorAlpha").value;
  const alphaValue = document.getElementById("colorAlphaValue");
  alpha < 0 && (alpha = 0);
  alpha > 1 && (alpha = 1);
  alphaValue.textContent = alpha;
}

const convertColor = (colorToConvert) => {
  const [_, rHex, vHex, bHex] = colorToConvert.match(/^#(.{2})(.{2})(.{2})$/);
  const colorR = parseInt(rHex, 16);
  const colorV = parseInt(vHex, 16);
  const colorB = parseInt(bHex, 16);

  return [colorR, colorV, colorB];
}

const cubeElement = document.getElementById("cube");
let isDragging = false;
let startingX = null;
let startingY = null;
let currentX = null;
let currentY = null;

cubeElement.addEventListener('mousedown', function(event) {
  isDragging = true;
  startingX = event.clientX;
  startingY = event.clientY;
});

cubeElement.addEventListener('mousemove', function(event) {
  if (!isDragging) return;
  
  event.preventDefault();
  
  currentX = event.clientX - startingX;
  currentY = event.clientY - startingY;
  
  cubeElement.style.transform = 'rotateY(' + currentX + 'deg) rotateX(' + (-currentY) + 'deg)';
});

cubeElement.addEventListener('mouseup', function() {
  isDragging = false;
});

cubeElement.addEventListener('touchstart', function(event) {
  startingX = event.touches[0].clientX;
  startingY = event.touches[0].clientY;
});

cubeElement.addEventListener('touchmove', function(event) {
  event.preventDefault();
  currentX = event.touches[0].clientX - startingX;
  currentY = event.touches[0].clientY - startingY;
  
  cubeElement.style.transform = 'rotateY(' + currentX + 'deg) rotateX(' + (-currentY) + 'deg)';
});

cubeElement.addEventListener('touchend', function() {
  startingX = null;
  startingY = null;
});