function calculatePentagonArea() {
  const pentagonParalobiumValue = parseFloat(document.getElementById("pentagon-paralobium").value);
  const pentagonBase = parseFloat(document.getElementById("pentagon-base").value);
  if (isNaN(pentagonParalobiumValue) === true || isNaN(pentagonBase) === true) {
    alert("Enter valid number");
  } else {
    const pentagonArea = 0.5 * pentagonBase * pentagonParalobiumValue;
    const areaCalculation = document.getElementById("area-calculation");
    const newArea = document.createElement("h2");
    newArea.innerHTML = `<h3>Rectangle area: ${pentagonArea} cm<sup>2</sup></h3>`;
    areaCalculation.appendChild(newArea);
  }
}
