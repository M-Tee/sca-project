import express from 'express';
import path, { dirname } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.mjs';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import userRoutes from '../src/Routes/userRoutes.mjs';

/*eslint-disable no-console*/
const app = express();
const port = 4000;
const compiler = webpack(config);
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(WebpackDevMiddleware(compiler, {
  // noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(userRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  // open('http://localhost:' + port);
  console.log(`listening on Port ${port}`);
});
