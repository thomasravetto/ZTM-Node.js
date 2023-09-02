const EventEmitter = require('events')
const raceDriver = new EventEmitter()

// Subscribe to raceDriver for Driver's Fan
raceDriver.on('race', (result) => {
    if (result === "won") {
        console.log("Congratulations!!")
    }
})

// Subscribe to raceDriver for Driver's Opponent
raceDriver.on('race', (result) => {
    if (result === "won") {
        console.log("I could have done better than that!!")
    }
})

raceDriver.emit("race", "won")
