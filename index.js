// install express with `npm install express` 
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = parseInt(process.env.PORT) || 8080
app.use(express.static(__dirname + '/public'))


app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

if (process.env.DEV === 'local') {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
} else {
    // module.exports = app
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}



