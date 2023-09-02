const EventEmitter = require('events')
const raceDriver = new EventEmitter()

// Subscribe to raceDriver for Driver's Fan
raceDriver.on('race', (result) => {
    if (result === "won") {
        console.log("Congratulations!!")
    } else if (result === 'lost') {
        console.log("Noooo")
    }
})

// Subscribe to raceDriver for Driver's Opponent
raceDriver.on('race', (result) => {
    if (result === "won") {
        console.log("I could have done better than that!!")
    } else if (result === "lost") {
        console.log("Yess, now I can win!")
    }
})

raceDriver.emit("race", "won")
raceDriver.emit("race", "lost")
