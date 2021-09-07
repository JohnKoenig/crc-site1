fetch('https://34vp8z8p64.execute-api.us-east-2.amazonaws.com/default/johnkoenig_ninja_counter')
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

   showCharacters = characters => {
    const charactersDiv = document.querySelector('#rick-and-morty-characters');
    characters.forEach(character => {
      const characterElement = document.createElement('p');
      characterElement.innerText = `Character Name: ${character.name}`;
      charactersDiv.append(characterElement);
    });
  }