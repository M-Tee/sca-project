import util from 'util';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';

let storage = new GridFsStorage({
  url: "mongodb://localhost:27017/bezkoder_files_db",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["file/pdf", "image/doc"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}- file-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-bezkoder-${file.originalname}`
    };
  }
});

var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
export default uploadFilesMiddleware;

const maxSize =  2 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir, + "resources/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize},
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

export default uploadFileMiddleware;
