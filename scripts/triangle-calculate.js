function calculateTriangleArea() {
  const triangleBaseValue = parseFloat(document.getElementById("triangle-base").value);
  const triangleHeightValue = parseFloat(document.getElementById("triangle-height").value);
  console.log(triangleBaseValue, triangleHeightValue);
  if (isNaN(triangleBaseValue) === true || isNaN(triangleHeightValue) === true) {
    alert("Enter valid number");
  } else {
    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
    const areaCalculation = document.getElementById("area-calculation");
    const newArea = document.createElement("h2");
    newArea.innerHTML = `<h3>Triangle area: ${triangleArea} cm<sup>2</sup></h3>`;
    areaCalculation.appendChild(newArea);
  }
}
