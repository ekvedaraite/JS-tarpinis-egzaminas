/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
      this.title = title
      this.director = director
      this.budget = budget
    }
  
    wasExpensive() {
      return this.budget > 100000000
    }
  }
  
  const avengersEndgame = new Movie("Avengers: Endgame", "Anthony Russo, Joe Russo", 356000000)
  const mrNobody = new Movie("Mr. Nobody", "Jaco Van Dormael", 33000000)
  
  document.body.style.display = 'flex'
  document.body.style.flexDirection = 'column'
  document.body.style.alignItems = 'center'
  document.body.style.justifyContent = 'center'
  document.body.style.background = 'lightpink'

  function displayMovieInfo(movie) {
    const movieInfoContainer = document.createElement("div")
    movieInfoContainer.style.marginBottom = '15px'
    movieInfoContainer.style.marginTop = '15px'
    movieInfoContainer.style.background = 'red'
    movieInfoContainer.style.color = 'lightpink'
    movieInfoContainer.style.fontWeight = '600'
    movieInfoContainer.style.fontSize = '1.5em'
    movieInfoContainer.style.minWidth = '70%'
    movieInfoContainer.style.display = 'flex'
    movieInfoContainer.style.alignItems = 'center'
    movieInfoContainer.style.justifyContent = 'center'
    movieInfoContainer.style.padding = '10px'
    movieInfoContainer.style.border = '3px solid red'
    movieInfoContainer.style.borderRadius = '20px'
    
  
    const message = movie.wasExpensive()
      ? `${movie.title} biudžetas viršyjo 100 mln. USD`
      : `${movie.title} biudžetas neviršyjo 100 mln. USD`

    movieInfoContainer.textContent = message

    document.body.appendChild(movieInfoContainer)
  }
  
  displayMovieInfo(avengersEndgame)
  displayMovieInfo(mrNobody)
  