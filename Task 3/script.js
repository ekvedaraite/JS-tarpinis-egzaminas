/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn')
    const outputDiv = document.getElementById('output')
    const messageParagraph = document.getElementById('message')

    btn.addEventListener('click', function () {
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(users => {
            messageParagraph.style.display = 'none'
            outputDiv.innerHTML = ''

            users.forEach(user => {
                const userCard = document.createElement('div')
                userCard.style.marginBottom = '20px'
                userCard.style.padding = '15px'
                userCard.style.border = '3px solid #222'
                userCard.style.borderRadius = '5px'
                userCard.style.backgroundColor = '#fff'
                userCard.style.display = 'flex'
                userCard.style.flexDirection = 'column'
                userCard.style.alignItems = 'center'
      

                const login = document.createElement('p')
                login.textContent = `Login: ${user.login}`
                login.style.marginBottom = '10px'
                login.style.textAlign = 'center'
                login.style.fontWeight = '800'
                login.style.fontSize = '2em'

                const avatar = document.createElement('img')
                avatar.src = user.avatar_url
                avatar.alt = `${user.login}'s avatar`
                avatar.style.maxWidth = '100%'
                avatar.style.borderRadius = '50%'
                avatar.style.margin = 'auto'

                userCard.appendChild(login)
                userCard.appendChild(avatar)

                outputDiv.appendChild(userCard)
            })
        })
    })
})
