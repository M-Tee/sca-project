import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app = express();
const port = 4000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  open('http://localhost:' + port);
  console.log(`listening on Port ${port}`);
});
