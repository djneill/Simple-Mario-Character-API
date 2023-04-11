const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const marioCharacters = {
    'mario': {
        name: 'Mario',
        strength: 'Jumping ability',
        origin: 'Donkey Kong (1981)',
        image: 'https://odd-colt-vestments.cyclic.app/images/mario.png'
    },
    'luigi': {
        name: 'Luigi',
        strength: 'Jumping ability, speed',
        origin: 'Mario Bros. (1983)',
        image: 'https://odd-colt-vestments.cyclic.app/images/luigi.png'
    },
    'princess peach': {
        name: 'Princess Peach',
        strength: "Magical powers",
        origin: "Super Mario Bros. (1985)",
        image: 'https://odd-colt-vestments.cyclic.app/images/peach.png'
    },
    'bowser':{
        name: 'Bowser',
        strength: "Strength, fire breath",
        origin: "Super Mario Bros. (1985)",
        image: 'https://odd-colt-vestments.cyclic.app/images/bowser.png'
      },
      'yoshi':{
        name: 'Yoshi',
        strength: "Swallowing enemies, long tongue",
        origin: "Super Mario World (1990)",
        image: 'https://odd-colt-vestments.cyclic.app/images/yoshi.png'
      },
      'wario':{
        name: 'Wario',
        strength: "Strength, flatulence",
        origin: "Super Mario Land 2: 6 Golden Coins (1992)",
        image: 'https://odd-colt-vestments.cyclic.app/images/wario.png'
      },
      'donkey kong':{
        name: 'Donkey Kong',
        strength: "Strength, throwing barrels",
        origin: "Donkey Kong (1981)",
        image: 'https://odd-colt-vestments.cyclic.app/images/donkeykong.png'
      },
      'diddy kong':{
        name: 'diddy kong',
        strength: "Agility, cartwheeling",
        origin: "Donkey Kong Country (1994)",
        image: 'https://odd-colt-vestments.cyclic.app/images/diddy.png'
      },
      'toad':{
        name: 'toad',
        strength: "Speed, digging",
        origin: "Super Mario Bros. (1985)",
        image: 'https://odd-colt-vestments.cyclic.app/images/toad.png'
      },
      'goomba':{
        name: 'goomba',
        strength: "Low-level enemy",
        origin: "Super Mario Bros. (1985)",
        image: 'https://odd-colt-vestments.cyclic.app/images/goomba.png'
      },
      'koopa troopa':{
        name: 'koopa troopa',
        strength: "Shell, high defense",
        origin: "Super Mario Bros. (1985)",
        image: 'https://odd-colt-vestments.cyclic.app/images/koopa.png'
      },
      'princess daisy':{
        name: 'Princess Daisy',
        strength: "Flower power",
        origin: "Super Mario Land (1989)",
        image: 'https://odd-colt-vestments.cyclic.app/images/daisy.png'
      },
      'rosalina':{
        name: 'rosalina',
        strength: "Magic, flight",
        origin: "Super Mario Galaxy (2007)",
        image: 'https://odd-colt-vestments.cyclic.app/images/rosalina.png'
      },
      'toadette':{
        name: 'toadette',
        strength: "Speed, digging",
        origin: "Mario Kart: Double Dash!! (2003)",
        image: 'https://odd-colt-vestments.cyclic.app/images/toadette.png'
      },
      'bowser jr':{
        name: 'bowser jr',
        strength: "Strength, fire breath",
        origin: "Super Mario Sunshine (2002)",
        image: 'https://odd-colt-vestments.cyclic.app/images/bowserjr.png'
      },
      'waluigi':{
        name: 'waluigi',
        strength: "Speed, agility",
        origin: "Mario Tennis (2000)",
        image: 'https://odd-colt-vestments.cyclic.app/images/waluigi.png'
      },
      'shy guy':{
        name: 'shy Guy',
        strength: "Low-level enemy",
        origin: "Yume Kōjō: Doki Doki Panic (1987)",
        image: 'https://odd-colt-vestments.cyclic.app/images/shyguy.png'
      },
      'unknown':{
        name: 'unlisted character found',
        strength: 'try again',
        origin: 'more data will be added at a later date',
        image: 'https://odd-colt-vestments.cyclic.app/images/box.png'
      }
    }

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/css/normalize.css', (request, response) => {
  response.sendFile(__dirname + '/css/normalize.css')
})

app.get('/css/style.css', (request, response) => {
  response.sendFile(__dirname + '/css/style.css')
})

app.get('/images/mario.png', (request, response) => {
  response.sendFile(__dirname + '/images/mario.png')
})

app.get('/images/back.jpg', (request, response) => {
  response.sendFile(__dirname + '/images/back.jpg')
})

app.get('/js/main.js', (request, response) => {
  response.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:characterName', (request, response) => {
    const characterName = request.params.characterName.toLowerCase()
    if (marioCharacters[characterName]) {
        response.json(marioCharacters[characterName])
    } else {
        response.json(marioCharacters['unknown'])
    }
})

app.get('/images/bowser.png', (request, response) => {
  response.sendFile(__dirname + '/images/bowser.png')
})

app.get('/images/bowserjr.png', (request, response) => {
  response.sendFile(__dirname + '/images/bowserjr.png')
})

app.get('/images/box.png', (request, response) => {
  response.sendFile(__dirname + '/images/box.png')
})

app.get('/images/daisy.png', (request, response) => {
  response.sendFile(__dirname + '/images/daisy.png')
})

app.get('/images/diddy.png', (request, response) => {
  response.sendFile(__dirname + '/images/diddy.png')
})

app.get('/images/donkeykong.png', (request, response) => {
  response.sendFile(__dirname + '/images/donkeykong.png')
})

app.get('/images/goomba.png', (request, response) => {
  response.sendFile(__dirname + '/images/goomba.png')
})

app.get('/images/koopa.png', (request, response) => {
  response.sendFile(__dirname + '/images/koopa.png')
})

app.get('/images/luigi.png', (request, response) => {
  response.sendFile(__dirname + '/images/luigi.png')
})

app.get('/images/peach.png', (request, response) => {
  response.sendFile(__dirname + '/images/peach.png')
})

app.get('/images/rosalina.png', (request, response) => {
  response.sendFile(__dirname + '/images/rosalina.png')
})

app.get('/images/shyguy.png', (request, response) => {
  response.sendFile(__dirname + '/images/shyguy.png')
})

app.get('/images/toad.png', (request, response) => {
  response.sendFile(__dirname + '/images/toad.png')
})

app.get('/images/toadette.png', (request, response) => {
  response.sendFile(__dirname + '/images/toadette.png')
})

app.get('/images/waluigi.png', (request, response) => {
  response.sendFile(__dirname + '/images/waluigi.png')
})

app.get('/images/wario.png', (request, response) => {
  response.sendFile(__dirname + '/images/wario.png')
})

app.get('/images/yoshi.png', (request, response) => {
  response.sendFile(__dirname + '/images/yoshi.png')
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! Ya betta go catch it!`)
})