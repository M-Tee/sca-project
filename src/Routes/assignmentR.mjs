import express from 'express';
import ctrl from '../Controllers/assignmentC.mjs';

const router = express.Router();

router.route('/upload')
.post(ctrl.upload);

export default router;
