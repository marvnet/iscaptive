const fetch = require("node-fetch")

// define possible captive detection server
const captives = {
    marvnet: "iscaptive.marvnet.digital",
}

// define detection algorithms for detection pages
const detectMarvnet = (protocol) => {
    fetch(protocol + "://" + captives.marvnet)
        .then((response) => {

        })
}