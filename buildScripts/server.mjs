import {} from 'dotenv/config.js';
import express from 'express';
import path, { dirname } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.mjs';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import userRoutes from '../src/Routes/user.R.mjs';
import assignRoutes from '../src/Routes/assignment.R.mjs';
import mongoose from 'mongoose';
import flash from 'express-flash';
import fileUpload from 'express-fileupload';

/*eslint-disable no-console*/
const app = express();
const port = 4000;
const compiler = webpack(config);
const __dirname = dirname(fileURLToPath(import.meta.url));
// const mongoUri = process.env.URI;
const db = process.env.DB;
const options = { 
  useNewUrlParser: true,
   useUnifiedTopology: true, 
   useCreateIndex: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 4500,
}; 
 
//Connecting to mongoDB, Passing the URI and Options
  try {
    await mongoose.connect(db, options);
    console.log('Connected to MongoDB');
  } catch(err){
      console.log(err.reason);
  };

mongoose.connection.on('error', err => console.log(err));

morgan('tiny');
//Setup webpack
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(userRoutes);
// app.use(assignRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  // open('http://localhost:' + port);
  console.log(`listening on Port ${port}`);
});
