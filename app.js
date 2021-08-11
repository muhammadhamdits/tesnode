// Modules import section
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// Defining variable section
const port = 80
const app = express()

// Initialization section
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')

// Routing section
app.get('/', function (req, res) {
  res.render('index')
})

// Starting server
app.listen(port, () => {
    console.log("App is listening at http://localhost")
})