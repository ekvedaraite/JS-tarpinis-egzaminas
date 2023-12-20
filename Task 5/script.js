/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintini.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

// 1. Funkcija
function filterDogOwners(usersArray) {
  return usersArray.filter(user => user.hasDog)
}

const dogOwners = filterDogOwners(users)

const resultDiv = document.createElement('div')
resultDiv.innerHTML = `<h2>Dog Owners: </h2><ul>${dogOwners.map(user => `<li>${user.name}</li>`).join('')}</ul>`
resultDiv.style.marginRight = '20px'
resultDiv.style.border = '5px solid #222'
resultDiv.style.borderRadius = '20px'
resultDiv.style.padding = '20px 30px'
resultDiv.style.background = '#333'
resultDiv.style.color = 'white'
document.body.appendChild(resultDiv)

// 2. Funkcija
function filterAdults(usersArray) {
  const legalAge = 18
  return usersArray.filter(users => users.age >= legalAge)
}

const adults = filterAdults(users)

const resultDiv1 = document.createElement('div')
resultDiv1.innerHTML = `<h2>Adults: </h2><ul>${adults.map(user => `<li>${user.name}</li>`).join('')}</ul>`
resultDiv1.style.marginRight = '20px'
resultDiv1.style.border = '5px solid #222'
resultDiv1.style.borderRadius = '20px'
resultDiv1.style.padding = '20px 30px'
resultDiv1.style.background = '#333'
resultDiv1.style.color = 'white'

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'

document.body.appendChild(resultDiv1)