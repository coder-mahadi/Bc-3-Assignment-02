function calculates() {
  let weightInput = parseFloat(document.getElementById("weightInput").value)
  let heightInputInch = parseFloat(document.getElementById("heightInputInch").value)
  let resultField = document.getElementById("resultField")

  heightInputInch = heightInputInch * 12 //Now height in feet
  heightInputInch = heightInputInch * 0.025 //Now height in meter

  //Calculation
  //Formula :- weight(kg) / (height(m) * height(m))
  let result = weightInput / (heightInputInch * heightInputInch)
  result = result.toFixed(2)

  resultField.innerHTML = result

}