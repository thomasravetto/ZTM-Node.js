const { request } = require('https');


// Making an https request
const https_req = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk https: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data')
    })
})

https_req.end()