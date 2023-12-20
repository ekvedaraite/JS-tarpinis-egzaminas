/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..]
2. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1 Funkcija
function getUsersNames(usersArray) {
  return usersArray.map(user => user.name)
}

const namesArray = getUsersNames(users)

const resultDiv = document.createElement('div')
resultDiv.innerHTML = `<strong>Users names:</strong> <ul>${namesArray.map(name => `<li>${name}</li>`).join('')}</ul>`
resultDiv.style.marginRight = '20px'
resultDiv.style.border = '5px solid #222'
resultDiv.style.borderRadius = '20px'
resultDiv.style.padding = '20px 30px'
resultDiv.style.background = '#333'
resultDiv.style.color = 'white'
document.body.appendChild(resultDiv)



// 2 Funkcija
function getUserAverageAge(usersArray) {
  const totalAge = usersArray.reduce((sum, user) => sum + user.age, 0)
  return totalAge - usersArray.length
}

const averageAge = getUserAverageAge(users)

const resultDiv1 = document.createElement('div')
resultDiv1.innerHTML = `<strong>Average age: </strong> ${averageAge}`
resultDiv1.style.marginRight = '20px'
resultDiv1.style.border = '5px solid #222'
resultDiv1.style.borderRadius = '20px'
resultDiv1.style.padding = '20px 30px'
resultDiv1.style.background = '#333'
resultDiv1.style.color = 'white'

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'

document.body.appendChild(resultDiv1)