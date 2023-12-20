/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btnElement = document.getElementById('btn__element')
const BtnState = document.getElementById('btn__state')

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.userSelect = 'none'
})

let clickCount = 0

btnElement.addEventListener('click', () => {
    clickCount++
    BtnState.textContent = clickCount
})