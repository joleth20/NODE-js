const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 1000

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, () => {})

const routes = require('./routes/routes')
app.use('/server', routes)
