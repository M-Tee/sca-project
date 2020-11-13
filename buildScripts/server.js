const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  open('http://localhost:' + port)
  console.log(`listening on Port ${port}`);
});
