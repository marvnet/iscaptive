const fetch = require("node-fetch")

// define possible captive detection server
const captives = {
    marvnet: "iscaptive.marvnet.digital",
}

// define detection algorithms for detection pages
async function detectMarvnet(protocol) {
    return await fetch(protocol + "://" + captives.marvnet)
        .then((response) => {
            return response.text()
        })
        .then((text) => {
            if(text == "Success") {
                return false
            } else {
                return true
            }
        })
}

module.exports = async (server, protocol) => {
    server = typeof server  !== 'undefined' ?  server  : "marvnet"
    protocol = typeof protocol !== 'undefined' ? protocol : "https"
    switch(server) {
        case "marvnet":
            return await detectMarvnet(protocol)

        default:
            return false
    }
}