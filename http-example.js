const { get } = require('https');


// Making an https request
get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk https: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data')
    })
})
