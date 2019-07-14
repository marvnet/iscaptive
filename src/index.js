const request = require("request")

// define possible captive detection server
const captives = {
    marvnet: "iscaptive.marvnet.digital",
}

const detectMarvnet = (protocol) => {
    request(protocol + "://" + captives.marvnet, (error, response, body) => {
        if(error) {
            return true
        } else {
            if(response.statusCode == 200) {
                if(body == "Success") {
                    return false
                } else {
                    return true
                }
            } else {
                return true
            }
        }
    })
}

module.exports = (server, protocol) => {
    server = typeof server  !== 'undefined' ?  server  : "marvnet"
    protocol = typeof protocol !== 'undefined' ? protocol : "https"
    switch(server) {
        case "marvnet":
            return detectMarvnet(protocol)

        default:
            return detectMarvnet(protocol)
    }
}