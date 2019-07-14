const request = require("request")

// define possible captive detection server
const captives = {
    marvnet: "iscaptive.marvnet.digital",
}

// define detection algorithms for detection pages
function detectMarvnet(protocol) {
    return true
}

module.exports = async (server, protocol) => {
    server = typeof server  !== 'undefined' ?  server  : "marvnet"
    protocol = typeof protocol !== 'undefined' ? protocol : "https"
    switch(server) {
        case "marvnet":
            return detectMarvnet(protocol)

        default:
            return false
    }
}