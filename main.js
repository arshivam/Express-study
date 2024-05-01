// const fs = require('fs');

// fs.writeFile('shivam.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//Using express
const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  res.sendFile("/public/index.html", {root:__dirname})
})

//This is post request

// app.post('/', (req, res) => {
//     console.log("this is post request");
//     res.send('this is post request')
//   })

//This is Put request

app.put('/', (req, res) => {
    console.log("this is put request");
    res.send('this is put request')
  })

  //This is res.json which written json
  app.get('/api', (req, res) => {
    res.json({a:1,b:2,shivam:"armarkar",qualifications:["SVPCET","BE mech"]})
  })

// app.get('/about', (req, res) => {
//     res.send('This is about page')
//   })

// app.get('/:slug', (req, res) => {
// console.log(req.params.slug);
// console.log(req.query);
// res.send(`This is slug ${req.params.slug}`)
//     //res.sendFile("templates/blogPost.html", {root: __dirname})
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})