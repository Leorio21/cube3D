let isActivePerspective = true;

const isPerspectiveActive = () => {
  const element = document.getElementById("container")
  isActivePerspective = document.getElementById("perspectChk").checked
  if (isActivePerspective) {
    perspective();
  } else {
    element.style = "";
  }
}

const perspective = () => {
  if (isActivePerspective) {
    const element = document.getElementById("container")
    const perspective = document.getElementById("perspect").value
    perspective > 1000 && (perspective = 1000)
    perspective < 180 && (perspective = 180)
    element.style = `perspective: ${perspective}px;`
  }
}

const rotate = () => {
  const element = document.getElementById("cube")
  const degreeX = document.getElementById("rotateX").value
  const degreeY = document.getElementById("rotateY").value
  const degreeZ = document.getElementById("rotateZ").value
  element.style = `transform: rotateX(${degreeX}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ}deg);`
}