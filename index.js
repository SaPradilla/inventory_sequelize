const express = require('express')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()
const Port = process.env.PORT 
const routes = require('./routes')
//server
app.listen(Port, function(){
    console.log(`Connected server in: http://localhost:${Port}`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api',routes)

