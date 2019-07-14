const request = require("request")

// define possible captive detection server
const captives = {
    marvnet: "iscaptive.marvnet.digital",
}

module.exports = (server, protocol) => {
    server = typeof server  !== 'undefined' ?  server  : "marvnet"
    protocol = typeof protocol !== 'undefined' ? protocol : "https"
    switch(server) {
        case "marvnet":
            request(protocol + "://" + captives[server], (error, response, body) => {
                if(body == "Success") {
                    return false
                } else {
                    return true
                }
            })

        default:
            return false
    }
}