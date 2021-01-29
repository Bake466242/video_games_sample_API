const fetch = require("node-fetch");
const baseURL = 'https://api.sampleapis.com/switch/games';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));


function displayData(data) {
    let filter = data.map(filter => filter.name)
    console.log(filter)
}

// let gameName = gameName.filter(game => {
//     return game.name.includes('Racing')
// })
