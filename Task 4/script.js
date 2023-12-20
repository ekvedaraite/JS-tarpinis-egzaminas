/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function displayCars() {
    try {
        const response = await fetch (ENDPOINT)
        const data = await response.json()

        const outputDiv = document.getElementById('output')
        outputDiv.style.display = 'flex'
        outputDiv.style.flexWrap = 'wrap'
        outputDiv.style.justifyContent = 'center'

        data.forEach((car) => {
            const brandCard = document.createElement('div')
            brandCard.style.background = '#222'
            brandCard.style.color = 'white'
            brandCard.style.border = '3px solid #333'
            brandCard.style.borderRadius = '8px'
            brandCard.style.margin = '10px'
            brandCard.style.padding = '15px'
            brandCard.style.width = '300px'
            brandCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
            
            const brandTitle = document.createElement('h2')
            brandTitle.textContent = car.brand
            brandTitle.style.color = 'white'
            brandTitle.style.marginBottom = '10px'
            brandTitle.style.textAlign = 'center'
            brandCard.append(brandTitle)

            const modelList = document.createElement('ul')
            modelList.style.listStyleType = 'disc'
            modelList.style.padding = '10px'
            modelList.style.paddingLeft = '30px'

            car.models.forEach((model) => {
                const modelItem = document.createElement('li')
                modelItem.textContent = model
                modelItem.style.marginBottom = '5px'
                modelList.append(modelItem)
            })

            brandCard.append(modelList)

            outputDiv.append(brandCard)
        })
    } catch (error) {
        console.error(error.message)
    }
}

window.onload = displayCars
displayCars()
