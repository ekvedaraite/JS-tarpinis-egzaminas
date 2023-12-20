/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {

}

Calculator.prototype.sum = function (a, b) {
  return a + b
}

Calculator.prototype.subtraction = function (a, b) {
  return a - b
}

Calculator.prototype.multiplication = function (a, b) {
  return a * b
}

Calculator.prototype.division = function (a, b) {
  if (b !== 0) {
    return a / b
  } else {
    alert("Cannot divide!")
    return undefined
  }
}

document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.alignItems = 'center'
document.body.style.justifyContent = 'center'
document.body.style.background = '#FFEED9'

const label1 = document.createElement("label")
label1.textContent = "Enter a number: "
label1.setAttribute("for", "num1")
label1.style.display = 'block'
label1.style.marginRight = '10px'
label1.style.fontWeight = '600'
label1.style.fontSize = '1.5em'
label1.style.color = 'blue'

const input1 = document.createElement("input")
input1.setAttribute("type", "number")
input1.setAttribute("id", "num1")
input1.style.display = 'block'
input1.style.marginRight = '10px'
input1.style.height = '20px'
input1.style.width = '200px'
input1.style.background = 'lightblue'
input1.style.border = '3px solid blue'
input1.style.borderRadius = '20px'
input1.style.cursor = 'pointer'
input1.style.padding = '5px'
input1.style.paddingLeft = '20px'
input1.style.textAlign = 'center'
input1.style.color = 'blue'

const label2 = document.createElement("label")
label2.textContent = "Enter a number: "
label2.setAttribute("for", "num2")
label2.style.display = 'block'
label2.style.marginRight = '10px'
label2.style.fontWeight = '600'
label2.style.fontSize = '1.5em'
label2.style.color = 'blue'

const input2 = document.createElement("input")
input2.setAttribute("type", "number")
input2.setAttribute("id", "num2")
input2.style.display = 'block'
input2.style.marginRight = '10px'
input2.style.height = '20px'
input2.style.width = '200px'
input2.style.background = 'lightblue'
input2.style.border = '3px solid blue'
input2.style.borderRadius = '20px'
input2.style.cursor = 'pointer'
input2.style.padding = '5px'
input2.style.paddingLeft = '20px'
input2.style.textAlign = 'center'
input2.style.color = 'blue'

const button = document.createElement("button")
button.textContent = "Calculate"
button.addEventListener("click", performCalculations)
button.style.background = 'blue'
button.style.color = 'lightblue'
button.style.border = '3px solid lightblue'
button.style.borderRadius = '20px'
button.style.height = '50px'
button.style.width = '200px'
button.style.fontWeight = '800'
button.style.fontSize = '1.5em'
button.style.margin = '10px'
button.style.cursor = 'pointer'

function performCalculations() {
  const num1 = parseFloat(document.getElementById("num1").value)
  const num2 = parseFloat(document.getElementById("num2").value)

  if (!isNaN(num1) && !isNaN(num2)) {
    const calculator = new Calculator()

    const sumResult = calculator.sum(num1, num2)
    const subtractionResult = calculator.subtraction(num1, num2)
    const multiplicationResult = calculator.multiplication(num1, num2)
    const divisionResult = calculator.division(num1, num2)

    const resultsDiv = document.createElement("div")
    resultsDiv.setAttribute("id", "results")
    resultsDiv.style.background = 'lightblue'
    resultsDiv.style.color = 'blue'
    resultsDiv.style.border = '3px solid blue'
    resultsDiv.style.borderRadius = '20px'
    resultsDiv.style.padding = '20px'
    resultsDiv.style.margin = '10px'
    resultsDiv.style.fontWeight = '600'

    resultsDiv.innerHTML = `
      <p>Sum result: ${sumResult}</p>
      <p>Subtraction result: ${subtractionResult}</p>
      <p>Multiplication result: ${multiplicationResult}</p>
      <p>Division result: ${divisionResult}</p>
    `

    document.body.appendChild(resultsDiv)

    input1.value = ""
    input2.value = ""
  } else {
    alert("Please enter valid numbers.")
  }
}

document.body.appendChild(label1)
document.body.appendChild(input1)
document.body.appendChild(label2)
document.body.appendChild(input2)
document.body.appendChild(button)