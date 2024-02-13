function calculateRectangleArea() {
  const rectangleWidthValue = parseFloat(document.getElementById("rectangle-width").value);
  const rectangleLengthValue = parseFloat(document.getElementById("rectangle-length").value);
  if (isNaN(rectangleWidthValue) === true || isNaN(rectangleLengthValue) === true) {
    alert("Enter valid number");
  } else {
    const rectangleArea = rectangleWidthValue * rectangleLengthValue;
    const areaCalculation = document.getElementById("area-calculation");
    const newArea = document.createElement("h2");
    newArea.innerHTML = `<h3>Rectangle area: ${rectangleArea} cm<sup>2</sup></h3>`;
    areaCalculation.appendChild(newArea);
  }
}
