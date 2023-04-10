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
        origin: 'Mario Bros. (1983)'
    },
    'princess peach': {
        name: 'Princess Peach',
        strength: "Magical powers",
        origin: "Super Mario Bros. (1985)"
    },
    'bowser':{
        name: 'Bowser',
        strength: "Strength, fire breath",
        origin: "Super Mario Bros. (1985)"
      },
      'yoshi':{
        name: 'Yoshi',
        strength: "Swallowing enemies, long tongue",
        origin: "Super Mario World (1990)"
      },
      'wario':{
        name: 'Wario',
        strength: "Strength, flatulence",
        origin: "Super Mario Land 2: 6 Golden Coins (1992)"
      },
      'donkey kong':{
        name: 'Donkey Kong',
        strength: "Strength, throwing barrels",
        origin: "Donkey Kong (1981)"
      },
      'diddy kong':{
        name: 'Diddy Kong',
        strength: "Agility, cartwheeling",
        origin: "Donkey Kong Country (1994)"
      },
      'toad':{
        name: 'Toad',
        strength: "Speed, digging",
        origin: "Super Mario Bros. (1985)"
      },
      'goomba':{
        name: 'Goomba',
        strength: "Low-level enemy",
        origin: "Super Mario Bros. (1985)"
      },
      'koopa troopa':{
        name: 'Koopa Troopa',
        strength: "Shell, high defense",
        origin: "Super Mario Bros. (1985)"
      },
      'princess daisy':{
        name: 'Princess Daisy',
        strength: "Flower power",
        origin: "Super Mario Land (1989)"
      },
      'rosalina':{
        name: 'Rosalina',
        strength: "Magic, flight",
        origin: "Super Mario Galaxy (2007)"
      },
      'toadette':{
        name: 'Toadette',
        strength: "Speed, digging",
        origin: "Mario Kart: Double Dash!! (2003)"
      },
      'bowser jr.':{
        name: 'Bowser Jr.',
        strength: "Strength, fire breath",
        origin: "Super Mario Sunshine (2002)"
      },
      'birdo':{
        name: 'Birdo',
        strength: "Egg spitting",
        origin: "Super Mario Bros. 2 (1988)"
      },
      'walugi':{
        name: 'Walugi',
        strength: "Speed, agility",
        origin: "Mario Tennis (2000)"
      },
      'shy guy':{
        name: 'Shy Guy',
        strength: "Low-level enemy",
        origin: "Yume Kōjō: Doki Doki Panic (1987)"
      },
      'unknown':{
        name: 'unlisted character found',
        strength: 'try again',
        origin: 'more data will be added at a later date'
      }
    }

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/images/mario.png', (request, response) => {
    response.sendFile(__dirname + '/images/mario.png')
})

app.get('/api/:characterName', (request, response) => {
    const characterName = request.params.characterName.toLowerCase()
    if (marioCharacters[characterName]) {
        response.json(marioCharacters[characterName])
    } else {
        response.json(marioCharacters['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})