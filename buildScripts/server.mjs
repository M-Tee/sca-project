import {} from 'dotenv/config.js';
import express from 'express';
import path, { dirname } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.mjs';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import userRoutes from '../src/Routes/userR.mjs';
import mongoose from 'mongoose';

/*eslint-disable no-console*/
const app = express();
const port = 4000;
const compiler = webpack(config);
const __dirname = dirname(fileURLToPath(import.meta.url));
// const mongoUri = process.env.URI;
const db = process.env.DB;
const options = { useNewUrlParser: true, useUnifiedTopology: true, ssl: false,};

//Connecting to mongoDB, Passing the URI and Options
await mongoose.connect(db, options, (err) => {
  if(err){
    return console.log(err);
  }
  return console.log('Connected to MongoDB');
});

//Setup webpack
app.use(WebpackDevMiddleware(compiler, {
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
