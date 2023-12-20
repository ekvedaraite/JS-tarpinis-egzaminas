/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
}

function showObjectKeys(obj) {
  return Object.keys(obj)
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const audiKeys = showObjectKeys(audi)

const resultDiv = document.createElement('div')
resultDiv.innerHTML = `<strong>Audi: </strong> <ul>${audiKeys.map(key => `<li><strong>${capitalizeFirstLetter(key)}:</strong> ${audi[key]}</li>`).join('')}</ul>`
resultDiv.style.marginRight = '20px'
resultDiv.style.border = '5px solid #222'
resultDiv.style.borderRadius = '20px'
resultDiv.style.padding = '20px 30px'
resultDiv.style.background = '#333'
resultDiv.style.color = 'white'

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'

document.body.appendChild(resultDiv)
