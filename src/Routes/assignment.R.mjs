import express from 'express';
import ctrl from '../Controllers/assignment.C.mjs';

const router = express.Router();

router.route('/upload')
  .post(ctrl.upload);

router.route('/view-assignments')
  .get(ctrl.getfiles);

export default router;
