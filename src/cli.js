#!/usr/bin/env node

const isCaptive = require("./index")

isCaptive()
    .then((captive) => {
        if(captive) {
            console.log("Captive portal found or no internet.")
        } else {
            console.log("No captive portal found.")
        }
    })