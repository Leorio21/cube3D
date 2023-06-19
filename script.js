let isActivePerspective = true;

const isPerspectiveActive = () => {
  const container = document.getElementById("container");
  isActivePerspective = document.getElementById("perspectChk").checked;
  if (isActivePerspective) {
    perspective();
  } else {
    container.style = "";
  }
}

const perspective = () => {
  const perspectiveValueElement = document.getElementById("perspectiveValue");
  const perspectiveValue = document.getElementById("perspect").value;
  perspectiveValue > 1000 && (perspectiveValue = 1000);
  perspectiveValue < 180 && (perspectiveValue = 180);
  perspectiveValueElement.textContent = perspectiveValue;
  if (isActivePerspective) {
    const container = document.getElementById("container");
    container.style = `perspective: ${perspectiveValue}px;`;
  }
}

const rotate = () => {
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