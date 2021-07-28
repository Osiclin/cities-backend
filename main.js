const csv = require('csv-parser')
const fs = require('fs')
const express = require('express')
const cors = require('cors')

const results = []

fs.createReadStream(__dirname + '/cities.csv')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', () => {})

const app = express()
app.use(cors())

const PORT = 3001

app.get('/cities', (req, res) =>{
  res.send({ data: results })
})

app.listen(PORT, () => console.log('Listening...'))

