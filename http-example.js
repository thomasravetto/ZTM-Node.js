const http = require('http');
const https = require('https');


// Making an http request
const http_req = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk http: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data')
    })
})

http_req.end()

// Making an https request
const https_req = https.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk https: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data')
    })
})

https_req.end()