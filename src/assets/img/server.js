
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
//const connectHistory = require('connect-history-api-fallback')
app = express()
//app.use(connectHistory)
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
