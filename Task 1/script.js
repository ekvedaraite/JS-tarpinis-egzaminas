/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()

        const inputWeight = parseFloat(document.getElementById('search').value)

        if (!isNaN(inputWeight)) {
            const weightInPounds = inputWeight * 2.2046
            const weightInGrams = inputWeight / 0.0010000
            const weightInOunces = inputWeight * 35.274

            const outputDiv = document.getElementById('output')
            outputDiv.innerHTML = 
            `
            <p style="text-align: center; font-weight: 600;">Weight in Pounds (lb): ${weightInPounds.toFixed(2)} <span style="color: #5c4301;">lb</span></p>
            <p style="text-align: center; font-weight: 600;">Weight in Grams (g): ${weightInGrams.toFixed(2)} <span style="color: #5c4301;">g</span></p>
            <p style="text-align: center; font-weight: 600;">Weight in Ounces (oz): ${weightInOunces.toFixed(2)} <span style="color: #5c4301;">oz</span></p>
            `

            outputDiv.style.background = 'white'
            outputDiv.style.width = '500px'
            outputDiv.style.margin = 'auto'
            outputDiv.style.padding = '10px'
            outputDiv.style.borderRadius = '20px'
            outputDiv.style.border = '3px solid #5c4301'
        } else {
            const outputDiv = document.getElementById('output')
            outputDiv.innerHTML = '<p>Please enter a valid weight in kilograms.</p>'
        }
    })
})