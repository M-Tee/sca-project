const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`listening on Port ${port}`);
});
