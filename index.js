fetch('https://34vp8z8p64.execute-api.us-east-2.amazonaws.com/default/johnkoenig_ninja_counter')
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));