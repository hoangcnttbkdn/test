const express = require('express');
const mysql = require('mysql');
const redis = require('redis');

const app = express();
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'hoang',
  password: '123qwe!@',
  database: 'testapp'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

const client = redis.createClient({
    url: 'redis://redis:6379'
});

client.connect();

client.on('connect', function() {
    console.log('Connected to Redis');
});

client.on('error', err => {
    console.log('Error ' + err);
});

app.get('/', (req, res) => {
  // connection.query('SELECT * FROM user;', (err, rows) => {
  //   if (err) throw err;
  //   res.send(rows);
  // });
  res.send('test app');
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
