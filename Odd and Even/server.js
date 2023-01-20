const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
  let num1 = Number(req.body.num1)
  let even_num = []
  let odd_num = []
  for (let i = 1; i < num1; i++) {
    if (i % 2 == 0) {
      even_num.push(i)
    } else {
      odd_num.push(i)
    }
  }
  //   function functionEven(item, index) {
  //     return `${index + 1} : ${item} <br/>`
  //   }
  //   res.send(`${even_num.forEach(functionEven)}`)
  res.send(
    `Even Number are: ${even_num}.<br><br><br>Odd Number are: ${odd_num}`
  )
})

app.listen(3000, function () {
  console.log('Server listinening at port 3000')
})
