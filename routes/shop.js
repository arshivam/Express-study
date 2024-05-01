const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Shope home page')
})

// define the about route
router.get('/buy', (req, res) => {
    res.send(`Buy sometthing from shop`)
  })

// define the about route
router.get('/item/:slug', (req, res) => {
  res.send(`item buyied :  ${req.params.slug}`)
})

module.exports = router