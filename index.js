const express = require('express')
const path = require('path')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/index2', (req, res) => {
    res.sendFile(path.join(__dirname, '/index2.html'))
  })

app.get('/getTimeOut', (req, res) => {
    setTimeout(function() {
        res.sendStatus(200);
    }, 20000);
})

app.get('/getValidResponse', (req, res) => {
    setTimeout(function() {
        res.sendStatus(200);
    }, 5000);
})

app.post('/getValidPostResponse', (req,res) => {
    setTimeout(function() {
        res.sendStatus(200);
    }, 5000);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

server.setTimeout(10000);
