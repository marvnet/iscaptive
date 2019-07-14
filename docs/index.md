# iscaptive
Node.js library for detecting captive portals

## Features
- Detect captive portals
- Choose captive server
- - isCaptive (Powered by AWS CloudFront)

## Installation
**Yarn:**
```
yarn add iscaptive
```

**NPM:**
```
npm install iscaptive
```

## Usage
The library consists of one main function.

### Basic example
```javascript
const isCaptive = require("iscaptive")

isCaptive()
    .then((captive) => {
        if(captive) { // you are behind a captive portal or have no internet
            console.log("Captive!")
        } else { // you have full access to the internet
            console.log("No captive!")
        }
    })
```

### Advanced usage
You can specify another captive server (currently only our own captive server) and protocol (`http` or `https` (default)).

**Captive server:**
```javascript
isCaptive("marvnet")
    .then((captive)) {

    }
```

**Protocol:**
```javascript
isCaptive("marvnet", "https")
    .then((captive) => {

    })
```
