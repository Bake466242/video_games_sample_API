const fetch = require("node-fetch");
const baseURL = 'https://api.sampleapis.com/switch/games';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data))
  .then(data => getName(data))


function displayData(data) {
    let filter = data.map(filter => filter.name)[31]
    console.log(filter)
}

function getName(data) {
  let firName = data.find(firName => firName.id == 1)
  console.log(firName)
}



// let gameName = gameName.filter(game => {
//     return game.name.includes('Racing')
// })
