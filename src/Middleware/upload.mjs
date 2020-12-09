import util from 'util';
import multer from 'multer';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir, + "resources/statisc/assets/uploads");
  },
  filename: (rew, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});
