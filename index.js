fetch('https://rickandmortyapi.com/api/character/')
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

   showCharacters = characters => {
    const charactersDiv = document.querySelector('#rick-and-morty-characters');

  }