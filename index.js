const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name == "dog") {
      res.json({'sound' : '멍멍'})
    } else if(name == "cat") {
      res.json({'sound': '야옹', 'img':'https://image.newsis.com/2023/07/12/NISI20230712_0001313626_web.jpg'})
    } else if(name == "pigg") {
      res.json({'sound' : '꿀꿀'})
    } else {
      res.json({'sound' : '모름'})
    }    
  })
app.get('/cat', (req, res) => {
    res.send('고양이')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// setTimeout(()=>{console.log("5초 지났다")}, 5000)