const isCaptive = require("./../index")

isCaptive()
    .then((captive) => {
        console.log(captive)
    })