const request = require("request")

// define possible captive detection server
const captives = {
    marvnet: "iscaptive.marvnet.digital",
}

module.exports = (server, protocol) => {
    return new Promise((resolve, reject) => {
        server = typeof server  !== 'undefined' ?  server  : "marvnet"
        protocol = typeof protocol !== 'undefined' ? protocol : "https"
        if(server == "marvnet") {
            request(protocol + "://" + captives.marvnet, (error, response, body) => {
                    if(error) {
                        resolve(true)
                    } else {
                        if(response.statusCode == 200) {
                            if(body == "Success") {
                                resolve(false)
                            } else {
                                resolve(true)
                            }
                        } else {
                            resolve(true)
                        }
                    }
                })
        } else {
            resolve(true)
        }
    })
}