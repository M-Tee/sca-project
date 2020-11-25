import express from 'express';
import controller from '../Controllers/userController.mjs'

const router = express.Router();

router.route('/signup')
  .post(controller.addUser);

export default router;
