'use strict';
const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'
const app = express()
const response = (req, res) => {
  res.render(req.view, req.bind)
}

app.set('view engine', 'pug')
app.use('/', require('./controller/listController'), response)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
