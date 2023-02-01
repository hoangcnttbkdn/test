const express = require('express')
var mysql = require('mysql');

const app = express()
const port = 3000


var con = mysql.createConnection({
  host: "localhost",
  user: "hoang",
  password: "123qwe!@",
  database: "testapp"
});

app.get('/', (req, res) => {
  var a = 1
  res.send('hihi haha hehe')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})